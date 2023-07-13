import { useEffect, useState } from "react";

type Position = {
  row: number;
  char: number;
};
export const usePosition = () => {
  const [position, setPosition] = useState<Position>({
    char: 0,
    row: 0,
  });
  useEffect(() => {
    console.log(position);
  }, [position]);
  const setChar = (position: number) => {
    if (position >= 0 && position <= 4) {
      setPosition((prevPosition) => ({
        ...prevPosition,
        char: position,
      }));
      console.log(
        "setChar called, successfully set new position to " + position,
      );
      return;
    }
    console.log(
      "setChar called but with unsuccessful new position " + position,
    );
  };

  const setRow = (position: number) => {
    if (position >= 0 && position <= 5) {
      setPosition((prevPosition) => ({
        ...prevPosition,
        row: position,
      }));
      console.log(
        "setRow called, successfully set new position to " + position,
      );
      return;
    }
    console.log("setRow called but with unsuccessful new position " + position);
  };
  return {
    position,
    setRow,
    setChar,
  };
};
