import { createUser, getUser } from "@/database/users";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const userID = req.query.id as string;

    const user = await getUser(userID);

    res.json(user);
  }
}
