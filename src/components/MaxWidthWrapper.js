import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl px-2.5 md:px-10", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
