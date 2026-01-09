export type AlphabetLetter = {
  letter: string;
  word: string;
  imageId: string;
  youtubeVideoId?: string;
};

export type NumberInfo = {
  number: number;
  word: string;
};

export type Game = {
  title: string;
  description: string;
  href: string;
  icon?: string;
};
