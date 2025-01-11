import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

const conversions = [
  { from: "Node.js", to: "Golang" },
  { from: "Golang", to: "Java" },
  { from: "Java", to: "Golang" },
  { from: "Angular", to: "React" },
]

export default function ConversionCards() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-blue-900 to-indigo-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Supported Conversions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {conversions.map((conversion, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-center">{conversion.from} to {conversion.to}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-3xl font-bold flex items-center">
                {conversion.from} <ArrowRight className="mx-2 text-blue-400" /> {conversion.to}
              </div>
            </CardContent>
            <CardDescription className="text-center pb-4 text-blue-200">
              Seamless conversion with AI
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  )
}

