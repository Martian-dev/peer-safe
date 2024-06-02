"use client";

import { useMutation } from "@tanstack/react-query";
import { serverAction } from "~/server/actions";
import { Button } from "../ui/button";

export default function VaultPage() {
  const { mutate, isPending } = useMutation({
    mutationFn: serverAction,
  });
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      Vault Page
      <Button onClick={() => mutate()} disabled={isPending}>
        Click
      </Button>
    </div>
  );
}
