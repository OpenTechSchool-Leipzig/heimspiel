export enum Categories {
  health = 1,
  livingtogether = 2,
  productivity = 3,
  chores = 4,
  solidarity = 5,
  activity = 6,
}

export type CategoriesNames = keyof typeof Categories;

export type CatItem = {
  name: string;
  id: number;
};

export type Quest = {
  id: number;
  title: string;
  category: CategoriesNames;
  text: string;
  flavorText: string;
  score: number;
  image: string | null;
};

export type QuestFilter = {
  category: number | null;
  searchString: string;
};

export type PlayerAttribute = {
  name: string;
  id: string;
};

export type Player = {
  name: string;
  attributes: PlayerAttribute[];
};

export type Team = {
  id: string;
  name: string;
  token: string;
};

export type TilePosition = "top-right" | "bottom-left";
