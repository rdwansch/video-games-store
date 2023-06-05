import 'dotenv/config';

export const getAllGames = (page: string) => `/api/games?page=${page}`;
export const getDetailGame = (id: string) => `/api/games/${id}`;
