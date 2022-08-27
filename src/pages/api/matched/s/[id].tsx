/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-cycle */
import type { NextApiRequest, NextApiResponse } from 'next';

import { getMatchedS } from '@/lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await getMatchedS(req.query.s);

  if (result.err) {
    res.status(500).json({ errors: result.err });
  }

  res.status(200).json({ fetchMatchedS: result.fetchMatchedS });
};
