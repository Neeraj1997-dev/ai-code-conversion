import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const steps = [
  {
    title: "Upload Your Code",
    description: "Securely upload your legacy codebase to our platform."
  },
  {
    title: "AI Analysis",
    description: "Our AI analyzes your code structure, patterns, and dependencies."
  },
  {
    title: "Conversion Process",
    description: "The AI converts your code to the target language."
  },
  {
    title: "Review & Refine",
    description: "Review the converted code and request any necessary refinements."
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-blue-900 to-indigo-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-center mb-4">
                <span className="text-4xl md:text-5xl font-bold text-blue-400">{index + 1}</span>
              </CardTitle>
              <CardTitle className="text-center text-xl md:text-2xl mb-4">{step.title}</CardTitle>
              <CardDescription className="text-center text-base md:text-lg text-blue-200">{step.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

