import type { NextApiRequest, NextApiResponse } from 'next';

const baseUrl = 'https://api.rawg.io';
const key = process.env.API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(`${baseUrl}/api/games?key=${key}`);
    const data = await response.json();

    res.status(200).json({ ...data });
  } catch (err) {
    res.status(200).json({ error: err });
  }
}
