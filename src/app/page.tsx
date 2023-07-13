import { GameBoard } from "@/components/ui/board/export/GameBoard";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl dark:text-white">Infinite Wordle</h1>
      <GameBoard />
    </main>
  );
}
