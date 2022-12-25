import Link from "next/link";

export default function Navbar() {
  const headshot = "https://i.ibb.co/wM2t1HT/headshot.png"
    return (
    <nav className="grid grid-cols-5 grid-row-2 gap-4">
      <a className="col-span-5 items-center">
        <img
          src={headshot}
          className="rounded-full mr-3 h-6 sm:h-9"
          alt="Byron's Headshot"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Byron Dalberg
        </span>
      </a>
      <div className="col-span-5 row-span-2 p-3">
      <Link className="p-3" href="/">Home</Link>
      <Link className="p-3" href="/about">About</Link>
      <Link className="p-3" href="/portfolio">Portfolio</Link>
      <Link className="p-3" href="/blog">Blog</Link>
      <Link className="p-3" href="/resume">Resume</Link>
      </div>
    </nav>
  );
}
