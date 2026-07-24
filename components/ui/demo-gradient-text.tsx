import { GradientText } from "@/components/ui/gradient-text-fill"

export default function Default() {
  return (
    <div className="flex min-h-[320px] w-full items-center justify-center p-8 bg-slate-950">
      <GradientText
        as="h1"
        className="text-6xl font-extrabold tracking-tight md:text-8xl"
        colors="#38bdf8, #a855f7, #34d399, #f472b6, #f59e0b"
      >
        MANTEJ SINGH
      </GradientText>
    </div>
  )
}
