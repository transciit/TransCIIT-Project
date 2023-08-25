/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-cycle */
import type { NextApiRequest, NextApiResponse } from "next";

import { getBidsStudent } from "@/lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await getBidsStudent(req.query.id);

  if (result.err) {
    res.status(500).json({ errors: result.err });
  }

  res.status(200).json({ getBids: result.feeds });
};
