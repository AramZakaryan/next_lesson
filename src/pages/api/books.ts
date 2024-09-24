import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'GET') {

    const term = req.query.term

    res.status(200).json({ message: `this is books endpoint for GET request, term is ${term}` })
  }

  if (req.method === 'POST') {
    res.status(200).json({ message: 'this is books endpoint for POST request' })
  }
}
