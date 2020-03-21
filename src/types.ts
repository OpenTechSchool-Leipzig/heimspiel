export type Quest = {
  id: number;
  title: string;
  category: number;
  text: string;
  flavorText: string;
  score: number;
  imageURL: string | null;
};

export type Member = {
  name: string;
  attributes: string[];
}
