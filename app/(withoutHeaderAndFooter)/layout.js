export const metadata = {
  title: 'Baylink',
  description: 'Baylink',
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
