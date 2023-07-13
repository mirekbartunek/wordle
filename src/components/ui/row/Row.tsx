import { Box } from "@/components/ui/box/Box";
import { it } from "node:test";
import { v4 as uuidv4 } from "uuid";
type RowProps = {
  chars: string[];
};

export const Row = ({ chars }: RowProps) => {
  return (
    <div className="flex flex-row">
      {chars.map((item) => (
        <Box value={item} key={uuidv4()} />
      ))}
    </div>
  );
};
