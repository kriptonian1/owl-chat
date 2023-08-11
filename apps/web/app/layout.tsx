import { Metadata } from 'next';
import './globals.css';
import 'ui/styles.css';

export const metadata: Metadata = {
  title: 'Owl Chat',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
