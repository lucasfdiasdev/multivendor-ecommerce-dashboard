import clsx from "clsx";
import Image from "next/image";

interface IAvatar {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const AvatarLarge: React.FC<IAvatar> = ({
  src,
  alt,
  className,
  width,
  height,
}) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={clsx(
        "relative flex shrink-0 overflow-hidden rounded-full border cursor-pointer object-cover object-center",
        className
      )}
    />
  );
};

export default AvatarLarge;
