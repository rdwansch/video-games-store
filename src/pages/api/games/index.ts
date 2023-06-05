import type { NextApiRequest, NextApiResponse } from 'next';

const baseUrl = 'https://api.rawg.io';
const key = process.env.API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    let url = `${baseUrl}/api/games?key=${key}&page=${req.query.page}`;

    if (req.query.search) {
      url += `&search=${req.query.search}`;
    }

    // console.log('FETCH', url);
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json({ ...data });
  } catch (err) {
    res.status(200).json({ error: err });
  }
}
