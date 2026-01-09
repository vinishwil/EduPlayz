import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, BrainCircuit, Palmtree, SpellCheck, Train, Binary, Workflow, Mic } from 'lucide-react';
import { games } from '@/lib/games';

const iconMap: { [key: string]: React.ReactNode } = {
  Letter: <SpellCheck className="w-12 h-12 md:w-16 md:h-16 text-accent" />,
  Number: <Gamepad2 className="w-12 h-12 md:w-16 md:h-16 text-accent" />,
  Counting: <Palmtree className="w-12 h-12 md:w-16 md:h-16 text-accent" />,
  Memory: <BrainCircuit className="w-12 h-12 md:w-16 md:h-16 text-accent" />,
  Sequence: <Train className="w-12 h-12 md:w-16 md:h-16 text-accent" />,
  Pairs: <Binary className="w-12 h-12 md:w-16 md:h-16 text-accent" />,
  Logic: <Workflow className="w-12 h-12 md:w-16 md:h-16 text-accent" />,
  Voice: <Mic className="w-12 h-12 md:w-16 md:h-16 text-accent" />,
  Gamepad2: <Gamepad2 className="w-12 h-12 md:w-16 md:h-16 text-accent" />,
};

export default function GamesPage() {
  return (
    <div className="flex flex-col items-center flex-1 p-4 sm:p-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
          Mini-Games
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-4">
          Choose a game to play and test your skills!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {games.map((game) => (
          <Link href={game.href} key={game.title} className="group">
            <Card className="h-full text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden bg-card/80 backdrop-blur-sm flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="font-headline text-xl md:text-2xl text-accent-foreground bg-accent/90 rounded-lg p-3">
                  {game.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-between flex-grow gap-4 p-6">
                <div className="transform transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 flex-grow flex items-center justify-center h-24">
                  {game.icon && iconMap[game.icon]}
                </div>
                <p className="text-muted-foreground text-sm">{game.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
