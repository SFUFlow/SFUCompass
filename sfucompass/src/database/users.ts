import dbClient from "./config";

export async function getUser(email: string) {
  const user = await dbClient.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}

export async function createUser(username: string, email: string) {
  const newUser = await dbClient.user.create({
    data: {
      email,
      username,
      password: "",
    },
  });

  return newUser;
}
