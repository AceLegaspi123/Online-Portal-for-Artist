import Image from 'next/image'
 
export default function CustomImage({
  src,
  width,
  height,
  alt,
  className,
}: {
  src: string
  width: number
  height: number
  alt: string
  className?: string
}) {
  return (
    <Image
      src="#"
      width={width}
      height={height}
      alt="Picture of the author"
      className={className}
    />
  )
}