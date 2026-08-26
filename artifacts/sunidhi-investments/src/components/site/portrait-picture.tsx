import { siteConfig } from '@/config/site';

type PortraitPictureProps = {
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

export function PortraitPicture({ className, loading = 'lazy', fetchPriority = 'auto' }: PortraitPictureProps) {
  const advisor = siteConfig.business.advisorProfile;

  return (
    <img
      src={advisor.photo}
      alt={advisor.photoAlt}
      className={className}
      width={advisor.photoWidth}
      height={advisor.photoHeight}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
    />
  );
}
