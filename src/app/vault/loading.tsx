import MaxWidth from "~/components/ui/max-width";
import { Spinner } from "~/components/ui/spinner";

export default function ChatSkeleton() {
  return (
    <main>
      <MaxWidth className="items-center py-8">
        <Spinner />
      </MaxWidth>
    </main>
  );
}
