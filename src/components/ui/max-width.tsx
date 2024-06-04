import { cn } from "~/lib/utils";
import { type ReactNode } from "react";

const MaxWidth = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-screen-xl flex-col px-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidth;
