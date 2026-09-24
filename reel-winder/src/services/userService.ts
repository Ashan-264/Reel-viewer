"use server";
import { prisma } from "@/lib/prisma";
import type { User as UserRow } from "@/generated/prisma/client";
import { User } from "../types/database";

const toUser = (row: UserRow): User => ({
  ...row,
  name: row.name ?? undefined,
  interests: row.interests ?? undefined,
  created_at: row.created_at.toISOString(),
  updated_at: row.updated_at.toISOString(),
});

export const fetchUsers = async (): Promise<User[] | null> => {
  try {
    const data = await prisma.user.findMany();
    return data.map(toUser);
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

export const createUser = async (
  username: string,
  email: string,
  name?: string,
  interests?: string
): Promise<User | null> => {
  console.log("Inserting user:", { username, email, name, interests });
  try {
    const data = await prisma.user.create({
      data: { username, email, name, interests },
    });
    return toUser(data);
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};
