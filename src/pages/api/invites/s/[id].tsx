/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-cycle */
import type { NextApiRequest, NextApiResponse } from "next";

import { getInvitesStudent } from "@/lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await getInvitesStudent(req.query.id);

  if (result.err) {
    res.status(500).json({ errors: result.err });
  }

  res.status(200).json({ getInvites: result.feeds });
};
