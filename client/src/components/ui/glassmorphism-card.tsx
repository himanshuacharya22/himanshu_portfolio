import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassmorphismCard({ children, className }: GlassmorphismCardProps) {
  return (
    <div className={cn("glassmorphism rounded-2xl", className)}>
      {children}
    </div>
  );
}
