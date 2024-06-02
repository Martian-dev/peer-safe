"use client";

import { useAccount, useDisconnect, useConnect } from "wagmi";
import { Button } from "~/components/ui/button";

export default function Auth() {
  const { isConnected } = useAccount();
  return (
    <div className="flex h-full items-center gap-4">
      {isConnected ? (
        <>
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

const SignIn = () => {
  const { connect, connectors, isPending } = useConnect();
  return (
    <Button
      onClick={() => {
        connect({ connector: connectors[0]! });
      }}
      disabled={isPending}
    >
      Login
    </Button>
  );
};

const SignOut = () => {
  const { disconnect } = useDisconnect();
  return (
    <Button
      onClick={() => {
        disconnect();
      }}
    >
      Logout
    </Button>
  );
};
