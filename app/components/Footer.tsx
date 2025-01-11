export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 bg-blue-900 text-white">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} LegacyTransformed.ai. All rights reserved.</p>
        <p className="mt-2">Contact: <a href="mailto:neerajkumar.sde@gmail.com" className="underline hover:text-blue-300">neerajkumar.sde@gmail.com</a></p>
      </div>
    </footer>
  )
}

