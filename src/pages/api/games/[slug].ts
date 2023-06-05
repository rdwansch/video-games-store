import type { NextApiRequest, NextApiResponse } from 'next';

const baseUrl = 'https://api.rawg.io';
const key = process.env.API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const res_detail = await await fetch(`${baseUrl}/api/games/${req.query.slug}?key=${key}`).then(res => res.json());
    const res_screenshot = await await fetch(`${baseUrl}/api/games/${req.query.slug}/screenshots?key=${key}`).then(res =>
      res.json()
    );

    res.status(200).json({ ...res_detail, screen_shot: res_screenshot.results });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
