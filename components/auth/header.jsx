import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Header = ({ label }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={cn("text-3xl font-semibold text-orange-400", font.className)}
      >
        🔐 Orangutan Technologies{" "}
      </h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
