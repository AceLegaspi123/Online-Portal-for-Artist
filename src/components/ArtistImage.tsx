import { CldImage } from "next-cloudinary";

type Props = {
  publicId: string;
};

export default function ArtistImage({ publicId }: Props) {
  return (
    <CldImage
      width="600"
      height="400"
      src={publicId}
      alt="Artist work"
    />
  );
}
