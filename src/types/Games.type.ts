type Property = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: Property;
  platforms: [];
  parent_platforms: [{ platform: Property }];
  genres: Property[];
};
