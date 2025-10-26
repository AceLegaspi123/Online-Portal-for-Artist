import Link from "next/link"

export default function Logo(){
    return (
        <Link href="/">
            <div className="flex items-center">
                <img className="w-12" src="/Logo-icon.png" alt="logo" />
                <h1 className="font-bold" >ArtistryHub</h1>
            </div>
        </Link>
    )
}