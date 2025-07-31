import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-svh">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft calcMode="size-4" />
        Back
      </Link>
      <div className="flex flex-col w-full max-w-sm gap-6">
        <Link
          className="flex items-center gap-2 self-center font-medium"
          href="/"
        >
          <Image src="globe.svg" alt="Logo" width={32} height={32} />
          MarshalLMS.
        </Link>
        {children}

        <div className="text-balance text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our
          <span className="hover:text-primary hover:underline">
            {" "}
            Terms of service
          </span>{" "}
          and
          <span className="hover:text-primary hover:underline">
            {" "}
            Privacy Policy
          </span>
          .
        </div>
      </div>
    </div>
  );
}
