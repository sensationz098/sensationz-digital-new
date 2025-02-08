import { LazyLoadImage } from "react-lazy-load-image-component";

type LazyLoadImageComponentProps = {
  imageSource: string;
  className?: string;
  alt?: string;
  onClick?: () => void;
};

const LazyLoadImageComponent = ({
  imageSource,
  alt,
  className,
  onClick,
}: LazyLoadImageComponentProps) => {
  return (
    <LazyLoadImage
      src={imageSource}
      alt={alt}
      className={className}
      effect="blur"
      onClick={onClick}
    />
  );
};

export default LazyLoadImageComponent;
