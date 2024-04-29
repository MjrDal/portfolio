"use server";

import bcrypt from "bcrypt";

export const saltAndHashPassword = async (password: string) => {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
};
