import { GlowCard } from "@/components/ui/spotlight-card";

export function Default() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor bg-slate-950 p-8">
      <GlowCard glowColor="blue">
        <div className="flex flex-col justify-between h-full text-white">
          <h3 className="text-xl font-bold">Blue Spotlight</h3>
          <p className="text-sm text-slate-400">Interactive mouse tracking glow border &amp; background.</p>
        </div>
      </GlowCard>
      
      <GlowCard glowColor="purple">
        <div className="flex flex-col justify-between h-full text-white">
          <h3 className="text-xl font-bold">Purple Spotlight</h3>
          <p className="text-sm text-slate-400">Gen-Z reactive lighting effect.</p>
        </div>
      </GlowCard>

      <GlowCard glowColor="green">
        <div className="flex flex-col justify-between h-full text-white">
          <h3 className="text-xl font-bold">Green Spotlight</h3>
          <p className="text-sm text-slate-400">Sleek glassmorphic card container.</p>
        </div>
      </GlowCard>
    </div>
  );
}
