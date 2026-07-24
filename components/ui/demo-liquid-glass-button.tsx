import React from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function DemoLiquidButton() {
  return (
    <div className="relative h-[200px] w-[800px] flex items-center justify-center bg-slate-900 rounded-2xl"> 
      <LiquidButton size="sm" className="z-10 animate-pulse">
        📅 BOOK MEETING
      </LiquidButton> 
    </div>
  );
}
