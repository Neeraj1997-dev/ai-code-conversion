import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate is the AI-powered code conversion?",
    answer: "LegacyTransformed.ai achieves a high level of accuracy, typically converting over 95% of code correctly. Any remaining issues are usually minor and easily addressed during the review phase."
  },
  {
    question: "What types of legacy code can be converted?",
    answer: "LegacyTransformed.ai specializes in converting various legacy languages to Java, including COBOL, Fortran, and older versions of Java. We also support conversions between modern languages like Node.js, Golang, and Angular to React. Contact us for specific language support."
  },
  {
    question: "How long does the conversion process take?",
    answer: "The conversion time depends on the size and complexity of your codebase. Typically, we can convert several thousand lines of code within hours, with larger projects taking a few days."
  },
  {
    question: "Is my code kept secure and confidential?",
    answer: "Absolutely. We use enterprise-grade encryption and security measures to ensure your code remains completely confidential throughout the conversion process. Our platform is compliant with industry-standard security protocols."
  },
  {
    question: "Can I customize the output of the converted code?",
    answer: "Yes, LegacyTransformed.ai allows for customization. You can specify coding standards, naming conventions, and even particular patterns you'd like to see in the converted code. After the initial conversion, you can also make manual adjustments."
  }
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-indigo-900 to-blue-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white/10 backdrop-blur-lg border-none rounded-lg overflow-hidden">
              <AccordionTrigger className="text-white hover:text-blue-300 px-6 py-4 text-left">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-blue-200 px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

