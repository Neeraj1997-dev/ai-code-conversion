import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "This AI-powered conversion tool saved us months of manual work. Our legacy code is now much more maintainable.",
    avatar: "/avatar1.png"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, InnoSoft",
    content: "I was skeptical at first, but the quality of the converted Java code is impressive. It's clean, readable, and efficient.",
    avatar: "/avatar2.png"
  },
  {
    name: "Emily Rodriguez",
    role: "Software Architect, DataDynamics",
    content: "This tool has been a game-changer for our modernization efforts. It's broadened our options and accelerated our timeline.",
    avatar: "/avatar3.png"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-blue-900 to-indigo-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl text-center">{testimonial.name}</CardTitle>
              <CardDescription className="text-blue-300 text-center">{testimonial.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="italic text-center">&ldquo;{testimonial.content}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

