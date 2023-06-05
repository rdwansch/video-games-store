type Property = {
  id: number;
  name: string;
  slug: string;
};

type Platform = {
  id: number;
  name: string;
  slug: 'pc' | 'playstation' | 'xbox' | 'nintendo' | 'android' | 'mac' | 'linux';
};

type Ratings = {
  id: number;
  title: 'exceptional' | 'recommended' | 'meh' | 'skip';
  count: number;
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
  ratings: Ratings[];
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
  parent_platforms?: [{ platform: Platform }];
  genres: Property[];
  description?: string;
  screen_shot?: [
    {
      image: string;
      hidden: false;
    }
  ];
  tags?: [{ id: number; name: string; slug: string }];
};
