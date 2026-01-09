
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import Header from './header';
import Footer from './footer';

export const metadata: Metadata = {
  title: 'Eduplayz Adventures',
  description: 'A fun and interactive learning app for kids aged 3-6.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased h-full flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
         <footer className="w-full p-4 text-center text-sm text-muted-foreground bg-background">
          © {new Date().getFullYear()} Eduplayz Adventures. All Rights Reserved.
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
