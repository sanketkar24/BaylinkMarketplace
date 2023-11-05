import './globals.css'


export const metadata = {
  title: 'Baylink',
  description: 'Your online shelfplace marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>  
    </html>
  )
}
