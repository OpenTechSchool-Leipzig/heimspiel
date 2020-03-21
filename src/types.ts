export enum Categories {
  Gesundheit = 1,
  Zusammenleben = 2,
  Produktivität = 3,
  Haushalt = 4,
  Zusammenhalt = 5,
  Beschäftigung = 6
}

export type CategorieTitles = keyof typeof Categories;

export type QuestCategory = {
  id: number;
  title: CategorieTitles;
  image?: string;
};

export type Quest = {
  id: number;
  title: string;
  category: number; // hier kommt der category type rein!
  text: string;
  flavorText: string;
  score: number;
  imageURL: string | null;
};

export type Member = {
  name: string;
  attributes: string[];
};

export type QuestFilter = {
  category: number | null;
  searchString: string;
};
