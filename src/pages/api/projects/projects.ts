import type { NextApiRequest, NextApiResponse } from 'next';

import { matchedProjectData } from '@/utils/matchedProjectData';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(matchedProjectData)) {
      throw new Error('Cannot find project data');
    }

    res.status(200).json(matchedProjectData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
