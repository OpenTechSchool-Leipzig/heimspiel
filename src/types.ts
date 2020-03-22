export enum Categories {
  Gesundheit = 1,
  Zusammenleben = 2,
  Produktivität = 3,
  Haushalt = 4,
  Zusammenhalt = 5,
  Beschäftigung = 6
}

export type CategorieTitles = keyof typeof Categories;

export type CatItem = {
  name: string;
  id: number;
};

export type QuestCategory = {
  id: number;
  title: CategorieTitles;
  image?: string;
};

export type Quest = {
  id: number;
  title: string;
  category: QuestCategory;
  text: string;
  flavorText: string;
  score: number;
  imageURL: string | null;
};

export type QuestFilter = {
  category: number | null;
  searchString: string;
};

export type PlayerAttributes = {
  name: string;
  url: string;
}

export type Team = {
  name: string;
  members: Member[];
};

export type Member = {
  name: string;
  attributes: PlayerAttributes[];
};

export type User = {
  id: string,
  name: string,
  token: string,
  url: string
}

export type TilePosition = "top-right" | "bottom-left";
