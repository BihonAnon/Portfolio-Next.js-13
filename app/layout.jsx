// These styles apply to every route in the application
import './global.css';
import Navbar from './Navbar';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Byron | Home</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}