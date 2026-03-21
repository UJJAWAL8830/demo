import './globals.css'

export const metadata = {
  title: 'Aetrix | Health Triage',
  description: 'Unified Triage & Mental Health platform for ASHA workers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
