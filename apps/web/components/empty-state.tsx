import { Ghost } from "lucide-react";
import { PropsWithChildren } from "react";
import { Particles } from "./landing/particles";

type Props = {
  title: string;
  description?: string;
};

export const EmptyState: React.FC<PropsWithChildren<Props>> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="relative flex flex-col items-center gap-4 p-8 h-full flex-1">
      <Ghost className="animate-pulse" />
      <h3 className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
      <p className="mt-1 text-sm text-zinc-500">{description}</p>
      <div className="mt-8">{children}</div>
      <Particles className="absolute inset-0 -z-10 opacity-50" quantity={10} />
    </div>
  );
};
