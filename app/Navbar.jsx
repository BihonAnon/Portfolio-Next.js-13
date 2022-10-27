import Link from "next/link";

export default function Navbar() {
  const headshot = "https://i.ibb.co/wM2t1HT/headshot.png"
    return (
    <nav>
      <a className="flex items-center">
        <img
          src={headshot}
          className="rounded-full mr-3 h-6 sm:h-9"
          alt="Byron's Headshot"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Byron Dalberg
        </span>
      </a>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/resume">Resume</Link>
    </nav>
  );
}
