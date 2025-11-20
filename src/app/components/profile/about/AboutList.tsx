import Link from "next/link";

const AboutList = () => {
  return (
    <ul className="flex flex-col gap-8 text-lg opacity-70 sticky top-0">
        <li><Link href="#basic-information">Basic Information</Link> </li>
        <li><Link href="#address">Address</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li><Link href="#about-me">About me</Link> </li>
        <li><Link href="">Link Accounts</Link></li>
        <li><Link href="">Skills / Creative Tags</Link></li>
    </ul>
  )
}

export default AboutList;