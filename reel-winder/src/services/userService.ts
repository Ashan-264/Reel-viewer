"use server";
import { supabase } from "@/app/supabaseClient";
import { User } from "../types/database";

export const fetchUsers = async (): Promise<User[] | null> => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    console.error("Error fetching users:", error);
    return null;
  }
  return data;
};

export const createUser = async (
  username: string,
  email: string,
  name?: string,
  interests?: string
): Promise<User | null> => {
  console.log("Inserting user:", { username, email, name, interests });
  const { data, error } = (await supabase
    .from("users")
    .insert([{ username, email, name, interests }])) as {
    data: User | null;
    error: Error | null;
  };

  if (error) {
    console.error("Error creating user:", error);
    return null;
  }
  return data ? data : null; // Return the first inserted row
};
