type WordTip = {
  word: string;
  meanings?: Meaning[];
};

type Meaning = {
  partOfSpeech?: string;
  definitions?: Definition[];
};

type Definition = {
  definition?: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
};

export type { WordTip, Meaning, Definition };
