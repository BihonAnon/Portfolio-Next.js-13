import Navbar from "./Navbar";
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Next.js</title>
        </head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    );
  }