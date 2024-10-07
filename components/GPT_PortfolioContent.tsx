'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('home')

  // Highlight the current section based on the scroll position
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header section with sticky navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Navigation links */}
            <nav className="flex items-center space-x-4 lg:space-x-6">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>
            {/* Resume Download Button */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home Section */}
        <section id="home" className="py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Rishi Umaria</h1>
              <p className="text-xl mb-6">Aspiring Software Developer</p>
              {/* Social links */}
              <div className="flex space-x-4">
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
            {/* Profile picture */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/me.jpg"
                alt="Rishi Umaria"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Bachelor of Computer Science</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Conestoga College, Waterloo, ON</p>
              <p>GPA: 3.5</p>
              <p className="mt-4">Relevant Coursework:</p>
              <ul className="list-disc list-inside">
                <li>Data Structures & Algorithms</li>
                <li>Operating System</li>
                <li>Database Management</li>
                <li>Object Oriented Programming</li>
                <li>Computer Networks</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Programming Languages:</strong> Python, C, C++, Java, HTML, CSS, JavaScript</p>
              <p><strong>Technologies/Frameworks:</strong> React, Node.js, Flask, Typescript, Git, SQL, Docker, Postman</p>
              <p><strong>Interpersonal Skills:</strong> Adaptability, Collaborative Team Member, Innovative Problem Solver</p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          <Card>
            <CardHeader>
              <CardTitle>Freelance Web Developer</CardTitle>
              <CardDescription>Dutch Hollow Market, Avon, NY | June 2024 - July 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Integrated Google Business API for real-time stock inventory tracking.</li>
                <li>Redesigned the website, enhancing user experience and navigation.</li>
                <li>Improved website traffic by 30% and reduced bounce rates.</li>
                <li>Boosted user engagement by 46% via enhanced design and performance.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Notable Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* TutorRacoon Project */}
            <Card>
              <CardHeader>
                <CardTitle>TutorRacoon</CardTitle>
                <CardDescription>IgnitionHacks Hackathon</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Developed an online tutoring platform connecting students with experts.</li>
                  <li>Integrated features such as real-time chat, session scheduling, and feedback.</li>
                  <li>Utilized JavaScript, Node.js, and Firebase for backend and scalability.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Self-Driving Car Project */}
            <Card>
              <CardHeader>
                <CardTitle>Self-Driving Car</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Created a self-driving car simulation using Python with AI algorithms.</li>
                  <li>Implemented lane detection and obstacle avoidance with simulated sensors.</li>
                  <li>Trained the model using deep learning frameworks for improved learning.</li>
                </ul>
              </CardContent>
            </Card>

            {/* LectureLife Project */}
            <Card>
              <CardHeader>
                <CardTitle>LectureLife</CardTitle>
                <CardDescription>ConHacks Hackathon</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Led a team to create a self-scheduling app integrated with Google Maps.</li>
                  <li>Helped students manage schedules and navigate local transit effectively.</li>
                  <li>Enhanced skills in API integration and team collaboration.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <p className="text-center">Feel free to reach out to me for any opportunities or collaborations!</p>
              <div className="flex space-x-4">
                <Link href="mailto:rishiumaria24@gmail.com">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/rishi-umaria-026119288/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
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
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
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