/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
// import { Resend } from "resend";

// import TransCIITEmailToTemplate from "../../../../../components/email/template";

// const resend = new Resend(process.env.RESEND_API_KEY);

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;

  // eslint-disable-next-line no-console
  console.log(body);

  // const { data, error } = await resend.emails.send({
  //   from: "Acme <onboarding@resend.dev>",
  //   to: ["delivered@resend.dev"],
  //   subject: "Hello world",
  // });

  // react: TransCIITEmailToTemplate({ firstName: "John" }),

  // if (error) {
  //   return res.status(400).json(error);
  // }

  // res.status(200).json(data);
}
