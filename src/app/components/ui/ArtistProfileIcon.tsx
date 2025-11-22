import Link from "next/link"

const ArtistProfileIcon = ({src} : {src: string}) => {

  return (
    <Link href={`/profile/`}>
        {src}
    </Link>
  )
}

export default ArtistProfileIcon