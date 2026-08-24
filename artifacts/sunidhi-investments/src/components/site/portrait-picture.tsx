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
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 460px, 560px"
      />
      <source
        type="image/webp"
        srcSet="/images/portrait/smita-tapadia-480.webp 480w, /images/portrait/smita-tapadia-768.webp 768w, /images/portrait/smita-tapadia-1120.webp 1120w"
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 460px, 560px"
      />
      <img
        src={advisor.photo}
        alt="Smita Tapadia, financial and health insurance advisor in Indore"
        className={className}
        width={1122}
        height={1402}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
