'use client';

interface VideoProps {
  src: string;
  title?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
  className?: string;
}

export default function Video({
  src,
  title,
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  poster,
  className,
}: VideoProps) {
  return (
    <video
      src={src}
      title={title}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      poster={poster}
      className={className}
    />
  );
}
