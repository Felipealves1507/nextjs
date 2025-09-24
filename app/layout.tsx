import './globals.css'

export const metadata = {
  title: 'Next.js - Trabalho Final SENAI',
  description: 'Projeto final do curso SENAI usando Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}