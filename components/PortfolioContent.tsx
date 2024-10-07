'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Github, Linkedin, Mail, Phone, Menu, ExternalLink } from 'lucide-react'

export default function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = "/Rishi's resume.pdf"
    link.download = "Rishi_Umaria_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              <Menu className="h-6 w-4" />
            </Button>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative left-0 right-0 top-14 md:top-0 bg-background md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-6 md:items-center`}>
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-primary hover:underline ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button variant="outline" size="sm" onClick={handleDownload} className="md:hidden">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </nav>
            <div className="flex items-center">
              <Button variant="outline" size="sm" onClick={handleDownload} className="hidden md:flex">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Rishi Umaria</h1>
              <p className="text-lg md:text-xl mb-6">Aspiring Software Developer</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link href="https://linkedin.com/in/rishi-umaria-026119288/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="mailto:rishiumaria24@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="tel:+14377330060">
                  <Button variant="outline" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/ME.jpg"
                alt="Rishi Umaria"
                width={400}
                height={400}
                className="rounded-full w-56 h-56 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">About Me</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Education</CardTitle>
              <CardDescription>Bachelor of Computer Science</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Conestoga College, Waterloo, ON</p>
              <p>GPA: 3.5</p>
              <p className="mt-4">Relevant Coursework:</p>
              <ul className="list-disc list-inside text-sm md:text-base">
                <li>Data Structures &amp; Algorithms</li>
                <li>Operating System</li>
                <li>Database Management</li>
                <li>Object Oriented Programming</li>
                <li>Computer Networks</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mt-6 md:mt-8">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Skills</CardTitle>
            </CardHeader>
            <CardContent className="text-sm md:text-base">
              <p><strong>Programming Languages:</strong> Python, C, C++, Java, HTML, CSS, JavaScript</p>
              <p><strong>Technologies/Frameworks:</strong> React, Node.js, Flask, Typescript, Git, SQL, Docker, Postman</p>
              <p><strong>Interpersonal Skills:</strong> Adaptability, Collaborative Team member, Innovative Problem-solver</p>
            </CardContent>
          </Card>
        </section>

        <section id="experience" className="py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Professional Experience</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Freelance Web Developer</CardTitle>
              <CardDescription>Dutch Hollow Market, Avon, NY | June 2024 - July 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>Integrated Google Business API into the POS system for real-time stock inventory tracking.</li>
                <li>Redesigned and modernized the Dutch Hollow Market website, improving user experience and navigation.</li>
                <li>Improved website traffic by 30% and reduced bounce rates after redesigning the site.</li>
                <li>Enhanced website performance and visual appeal, driving increased user engagement and interaction.</li>
                <li>Boosted user engagement by 46%, as evidenced by increased page views and customer interactions.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Notable Projects</h2>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">TutorRacoon</CardTitle>
                <CardDescription>IgnitionHacks Hackathon</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                  <li>Developed an online tutoring platform connecting students with subject-matter experts.</li>
                  <li>Integrated features such as session scheduling, real-time chat, and feedback systems.</li>
                  <li>Used JavaScript, Node.js, and Firebase, focusing on scalability and user engagement.</li>
                </ul>
                <Link href="https://devpost.com/software/tutorraccoon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-primary hover:underline">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Self-Driving Car</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                  <li>Developed a self-driving car simulation using Python, leveraging machine learning and AI algorithms.</li>
                  <li>Implemented simulated sensors for lane detection and obstacle avoidance.</li>
                  <li>Trained the model using deep learning frameworks to enhance the car&apos;s ability to learn from its environment.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">LectureLife</CardTitle>
                <CardDescription>ConHacks Hackathon</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                  <li>Led a team to develop a self-scheduling app integrated with Google Maps and GRT&apos;s API.</li>
                  <li>Helped students manage schedules and navigate local transit effectively.</li>
                  <li>Gained experience in API integration and team collaboration.</li>
                  <li>Enhanced coding skills in React, NodeJS and Flask.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contact Me</h2>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <p className="text-center text-sm md:text-base">Feel free to reach out to me for any opportunities or collaborations!</p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Link href="mailto:rishiumaria24@gmail.com">
                  <Button className="w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/rishi-umaria-026119288/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Rishi Umaria. All rights reserved.
          </p>
          <div className="flex items-center space-x-1">
            <Link href="https://github.com/R-umaria" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/rishi-umaria-026119288/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}