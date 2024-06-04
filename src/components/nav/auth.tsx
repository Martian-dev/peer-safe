"use client";

import { useAccount, useDisconnect, useConnect } from "wagmi";
import { Button } from "~/components/ui/button";
import { Spinner } from "../ui/spinner";

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
  const { connect, connectors } = useConnect();
  const { isConnecting } = useAccount();
  return (
    <Button
      onClick={() => {
        connect({ connector: connectors[0]! });
      }}
      disabled={isConnecting}
      className="flex gap-2"
    >
      {isConnecting ? "" : "Login"}
      {isConnecting ? (
        <Spinner color="hsl(var(--muted))" className="h-5 w-5" />
      ) : null}
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
