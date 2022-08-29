/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-cycle */
import type { NextApiRequest, NextApiResponse } from 'next';

import { getUser } from '@/lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await getUser(req.query.uid);

  if (result.err) {
    res.status(500).json({ errors: result.err });
  }
  // // read current file contents
  // const filePath = path.join(process.cwd(), 'users.json');
  // const fileData = fs.readFile(filePath);
  // const data = JSON.parse(fileData);

  // // append the new user
  // data.push(result.userType);

  // // write the file back to users.json
  // fs.writeFile(filePath, JSON.stringify(data));

  res.status(200).json({ userDetails: result.userType });
};
