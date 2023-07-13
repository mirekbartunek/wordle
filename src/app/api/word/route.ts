import { NextRequest, NextResponse } from "next/server";
import { WordTip } from "@/types/server";
// This could be done as a server component, more like should be done as a server component
type RequestBody = {
  word: string;
};
// NOT IMPLEMENTED
export async function POST(req: NextRequest) {
  const { word }: RequestBody = await req.json();
  console.log(word + " body");
  const tip = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );
  const res: WordTip = await tip.json();
  console.log(res.meanings?.at(0));
  const temp: WordTip = { ...res };
  const safeMeanings = temp?.meanings?.map(
    (meaning) =>
      meaning?.definitions?.map((definition) => {
        if (definition?.definition?.includes(word)) {
          definition.definition.replace(word, "<word>");
        }
      }),
  );
  console.log(safeMeanings + " safe meanings");
  return NextResponse.json(
    { error: "Not implemented" },
    {
      status: 400,
      statusText: "Endpoint not implemented",
    },
  );
}
