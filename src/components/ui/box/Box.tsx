type BoxProps = {
  value: string;
};

export const Box = ({ value }: BoxProps) => {
  return (
    <div className="m-1 flex h-24  w-24 items-center justify-center border-2 border-solid border-black text-4xl dark:border-white dark:bg-black dark:text-white">
      {value}
    </div>
  );
};
