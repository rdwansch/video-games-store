const baseUrl = `http://localhost:3000`;

export const getAllGames = (page: string) => `${baseUrl}/api/games?page=${page}`;
export const getDetailGame = (id: string) => `${baseUrl}/api/games/${id}`;
