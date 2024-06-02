import "server-only";

export async function serverOnly() {
  // can only be called from server components
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "";
}
