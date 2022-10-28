import Navbar from "../Navbar";
export default function AboutLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Byron | About</title>
        </head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    );
  }