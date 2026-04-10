// components/IKImage.tsx
import { Image } from "@imagekit/next";

interface IKImageProps {
  src: string | undefined;
}

export default function MyIKImage({ src }: IKImageProps) {
  console.log(`Rendering IKImage with src: ${src}`);
  const link = `${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}${src}`;
  console.log(`Full image URL: ${link}`);
  return (
    <Image
      path={"https://ik.imagekit.io/pdxjkqgyn/ArtistryHub/pic1"} 
      alt="Artwork"
      width={400}
      height={300}
      transformation={[{ width: 400, height: 300, quality: 90 }]}
      loading="lazy"
      className="mt-4"
    />
  );
}