import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/ai-background.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">
          AI-Powered Legacy Code Conversion by LegacyTransformed.ai
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Transform your outdated codebase into modern, readable code. Broaden your modernization paths and solve legacy code challenges for the long term.
        </p>
        <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-3 bg-white text-blue-900 hover:bg-blue-100 transition-colors duration-300">
          Transform Your Code Now
        </Button>
      </div>
    </section>
  )
}

