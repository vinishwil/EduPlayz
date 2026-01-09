import { Header } from "@/components/Header";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full flex-1">
       <div className="p-4 flex items-center gap-4 bg-primary/10">
         <Link href="/games" passHref>
          <Button variant="outline" size="icon">
            <ArrowLeft />
          </Button>
        </Link>
        <Header title="Games" />
      </div>
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
}
