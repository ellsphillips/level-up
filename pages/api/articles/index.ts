import { articleData } from "@/data/articles";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(articleData)) {
      throw new Error("Cannot find article data");
    }

    res.status(200).json(articleData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
