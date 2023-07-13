"use client";
import { useEffect, useState } from "react";
import { isLetter } from "@/lib/isLetter";
import { Row } from "@/components/ui/row/Row";
import { v4 as uuidv4 } from "uuid";
import { usePosition } from "@/hooks/usePosition";

const VALID_KEYS = ["Backspace", "Enter", "Delete"];

export const Board = ({ word }: { word: string }) => {
  const [words, setWords] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const { position, setChar, setRow } = usePosition();
  //TODO: Implement letter checking
  useEffect(() => {
    const handleKeydown = (evt: KeyboardEvent) => {
      const key = evt.key;
      console.log(`Key press ${key}`);
      if (VALID_KEYS.includes(key) || isLetter(key)) {
        const updatedWords = [...words];
        switch (key) {
          case "Backspace":
            updatedWords[position.row][position.char] = "";
            setChar(position.char - 1);
            setWords(updatedWords);
            break;
          case "Enter":
            //TODO: Implement row checking
            setRow(position.row + 1);
            setChar(0);
            break;
          default:
            updatedWords[position.row][position.char] = key.toUpperCase();
            setChar(position.char + 1);
            setWords(updatedWords);
        }
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [position, words, setChar, setRow]);

  return (
    <article className="flex flex-col">
      {process.env.NODE_ENV === "development" ? (
        <p className="dark:text-white">Word: {word}</p>
      ) : null}

      {words.map((row) => (
        <Row chars={row} key={uuidv4()} />
      ))}
      <div className="mx-auto flex w-fit flex-col items-center justify-center rounded-lg border  border-solid border-black p-2 dark:border-white">
        {process.env.NODE_ENV === "development" ? (
          <>
            <p>Row: {position.row}</p>
            <p>Char: {position.char}</p>
            <p>Delete index: {position.char - 1}</p>
          </>
        ) : (
          <ul>
            <li>TODO: Row checking</li>
            <li>TODO: Game end</li>
          </ul>
        )}
      </div>
    </article>
  );
};
