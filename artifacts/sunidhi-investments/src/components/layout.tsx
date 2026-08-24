import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
};

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  children: ReactNode;
  contained?: boolean;
};

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = '',
  contained = true,
  ...props
}: SectionProps) {
  return (
    <section className={className} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
