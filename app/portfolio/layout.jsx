import Navbar from "../Navbar";
export default function PortfolioLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Byron | Portfolio</title>
        </head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    );
  }
