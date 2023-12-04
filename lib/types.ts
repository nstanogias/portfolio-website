import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Category =
  | "react"
  | "spring"
  | "node"
  | "mongo"
  | "angular"
  | "blockchain";

export type TProject = {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url?: string;
  category: Category[];
  key_techs: string[];
};
