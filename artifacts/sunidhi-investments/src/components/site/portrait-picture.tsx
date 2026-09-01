import { siteConfig } from '@/config/site';

type PortraitPictureProps = {
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

export function PortraitPicture({ className, loading = 'lazy', fetchPriority = 'auto' }: PortraitPictureProps) {
  const advisor = siteConfig.business.advisorProfile;

  return (
    <picture>
      <source
        type="image/avif"
        srcSet="/images/portrait/smita-tapadia-480.avif 480w, /images/portrait/smita-tapadia-768.avif 768w, /images/portrait/smita-tapadia-1120.avif 1120w"
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 460px, min(100vw - 2rem, 390px)"
      />
      <source
        type="image/webp"
        srcSet="/images/portrait/smita-tapadia-480.webp 480w, /images/portrait/smita-tapadia-768.webp 768w, /images/portrait/smita-tapadia-1120.webp 1120w"
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 460px, min(100vw - 2rem, 390px)"
      />
      <img
        src="/images/portrait/smita-tapadia-1120.webp"
        alt={advisor.photoAlt}
        className={className}
        width={advisor.photoWidth}
        height={advisor.photoHeight}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
