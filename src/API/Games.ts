const baseUrl = `http://localhost:3000`;

export const getAllGames = `${baseUrl}/api/games`;
export const getDetailGame = (id: string) => `${baseUrl}/api/games/${id}`;
