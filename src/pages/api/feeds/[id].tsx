/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-cycle */
import type { NextApiRequest, NextApiResponse } from "next";

import { getFeedDetails } from "@/lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await getFeedDetails(req.query.id);

  if (result.err) {
    res.status(500).json({ errors: result.err });
  }

  res.status(200).json({ feedD: result.feedDetail });
};
