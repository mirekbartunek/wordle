import { words } from "@/resources/words";

export const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
