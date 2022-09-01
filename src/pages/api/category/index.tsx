/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-cycle */
import type { NextApiRequest, NextApiResponse } from 'next';

import { getCategories } from '@/lib/db';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const result = await getCategories();

  if (result.err) {
    res.status(500).json({ errors: result.err });
  }

  res.status(200).json({ fetchCategories: result.fetchCategories });
};
