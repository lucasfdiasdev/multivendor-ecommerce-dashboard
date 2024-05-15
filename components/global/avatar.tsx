import clsx from "clsx";
import Image from "next/image";

interface IAvatar {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const Avatar: React.FC<IAvatar> = ({ src, alt, className, width, height }) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={clsx(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border cursor-pointer",
        className
      )}
    />
  );
};

export default Avatar;
