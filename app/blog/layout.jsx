import Navbar from "../Navbar";

export default function BlogLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Byron | Blog</title>
        </head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    );
  }