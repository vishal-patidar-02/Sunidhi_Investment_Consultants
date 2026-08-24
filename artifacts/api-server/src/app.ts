import express, { type Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import pinoHttp from "pino-http";
import router from "./routes";
import { env, isProduction } from "./lib/env";
import { isHttpError } from "./lib/http-errors";
import { logger } from "./lib/logger";

const app: Express = express();

const developmentOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

const allowedOrigins = new Set(
  env.corsAllowedOrigins.length > 0
    ? env.corsAllowedOrigins
    : isProduction()
      ? []
      : developmentOrigins,
);

app.set("trust proxy", 1);
app.use((_req, res, next) => {
  res.setTimeout(10_000);
  next();
});
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "same-site" },
  }),
);
app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
          origin: req.headers.origin,
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      if (allowedOrigins.has(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("CORS origin denied"));
    },
  }),
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(
  "/api/contact",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      code: "rate_limited",
      message: "Too many requests. Please try again later.",
    },
  }),
);

app.use("/api", router);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (isHttpError(err)) {
    res.status(err.statusCode).json({
      code: err.code,
      message: err.message,
    });
    return;
  }

  const message = err instanceof Error ? err.message : "Unknown error";
  if (
    typeof err === "object" &&
    err !== null &&
    "type" in err &&
    err.type === "entity.too.large"
  ) {
    res.status(413).json({
      code: "payload_too_large",
      message: "Request body is too large.",
    });
    return;
  }

  if (message === "CORS origin denied") {
    res.status(403).json({
      code: "origin_denied",
      message: "This origin is not allowed.",
    });
    return;
  }

  logger.error({ err }, "Unhandled API error");
  res.status(500).json({
    code: "internal_error",
    message: "Something went wrong. Please try again later.",
  });
});

export default app;
