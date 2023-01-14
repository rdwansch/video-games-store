const baseUrl = `https://api.rawg.io/api`;

export const getAllGames = `${baseUrl}/platforms?key=${process.env.NEXT_PUBLIC_API}`;
