"use server";
import "server-only";

export async function serverAction() {
  // can be called from client components
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "";
}
