import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 text-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Modernize Your Legacy Code with LegacyTransformed.ai?</h2>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Start your journey towards a more maintainable and efficient codebase today.
      </p>
      <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-3 bg-white text-blue-900 hover:bg-blue-100 transition-colors duration-300">
        Get Started Now
      </Button>
    </section>
  )
}

