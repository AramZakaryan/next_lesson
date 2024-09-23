import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const id = req.query.id
  res.status(200).json({ message: `this is books endpoint for GET request, id is ${id}` })

}
