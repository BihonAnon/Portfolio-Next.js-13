import Navbar from "../Navbar";
export default function ResumeLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Byron | Resume</title>
        </head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    );
  }