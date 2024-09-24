import type { NextApiRequest, NextApiResponse } from 'next'
import * as process from 'node:process'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const secret = req.query.secret
  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: 'invalid secret token' })
  }
  try {
    await res.revalidate('/experiment')
    return res.json({ revalidated: true })
  } catch {
    return res.status(500).json({ message: 'revalidate failed' })
  }

}
