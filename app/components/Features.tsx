import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code, Zap, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: <Code className="h-8 w-8 md:h-10 md:w-10 mb-4 text-blue-400" />,
    title: "Intelligent Code Analysis",
    description: "Our AI deeply understands your legacy code structure and patterns."
  },
  {
    icon: <Zap className="h-8 w-8 md:h-10 md:w-10 mb-4 text-blue-400" />,
    title: "Rapid Conversion",
    description: "Convert large codebases quickly, saving time and resources."
  },
  {
    icon: <Shield className="h-8 w-8 md:h-10 md:w-10 mb-4 text-blue-400" />,
    title: "Maintained Functionality",
    description: "Preserve existing functionality while improving code quality."
  },
  {
    icon: <Sparkles className="h-8 w-8 md:h-10 md:w-10 mb-4 text-blue-400" />,
    title: "Enhanced Readability",
    description: "Generate clean, modern code that's easy to maintain."
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-indigo-900 to-blue-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <div className="flex justify-center">{feature.icon}</div>
              <CardTitle className="text-center text-xl md:text-2xl mb-4">{feature.title}</CardTitle>
              <CardDescription className="text-center text-base md:text-lg text-blue-200">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

