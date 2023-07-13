import "server-only";
import { getWord } from "@/lib/getWord";
import { Board } from "@/components/ui/board/Board";

export const GameBoard = () => {
  const word = getWord();
  return <Board word={word} />;
};
