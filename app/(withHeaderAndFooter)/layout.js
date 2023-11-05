import Navbar from "../components/navigation/navbar";
import Footer from '../components/footer'


export const metadata = {
  title: 'Baylink',
  description: 'Baylink',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        < Footer />
      </body>  
    </html>
  )
}
