
import "./globals.css";
import Navbar from "./component/Navbar";
import FloatingContactButtons from "./component/WhatsAppButton";
import Footer from "./component/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Navbar/>
        {children}
        <FloatingContactButtons/>
        <Footer/>
        </body>
    </html>
  );
}
