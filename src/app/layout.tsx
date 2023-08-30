import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Insights Blogging',
  description: 'Read blogs on all my interests',
}

export default function RootLayout({ children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="base">{children}</body>
    </html>
  )
}
