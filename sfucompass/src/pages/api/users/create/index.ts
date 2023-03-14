import { createUser } from "@/database/users";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {

    const { username, email }: { username: string; email: string } = req.body;

    const newUser = await createUser(username, email);

    res.json({ message: `Created a new user with the id of ${newUser.id}` });
  }
}
