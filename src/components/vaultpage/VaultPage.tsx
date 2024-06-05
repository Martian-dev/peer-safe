"use client";

import { useMutation } from "@tanstack/react-query";
import { serverAction } from "~/server/actions";
import { Button } from "../ui/button";
import { useAccount } from "wagmi";

export const dynamic = "force-dynamic";

export default function VaultPage() {
  const { mutate, isPending } = useMutation({
    mutationFn: serverAction,
  });
  const { isConnected } = useAccount()

  if (!isConnected) return <div className="text-center">please login above</div>;

  return (
    <div className="flex items-center justify-center gap-4 py-8">
      Vault Page
      <Button onClick={() => mutate()} disabled={isPending}>
        Click
      </Button>
    </div>
  );
}
