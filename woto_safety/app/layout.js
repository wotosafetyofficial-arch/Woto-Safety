import './globals.css';
import ToastProvider from './components/Toast';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

export const metadata = {
  title: 'WOTO Safety — Safety, connected when it matters most.',
  description: 'Your safety, our priority. A world where no one faces danger alone.',
  icons: {
    icon: "/logo.png", // Path relative to public/ directory
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <ToastProvider />
        <Footer/>
      </body>
    </html>
  );
}