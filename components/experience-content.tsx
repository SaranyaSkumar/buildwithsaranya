"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building, MapPin, Briefcase, Star, TrendingUp } from "lucide-react"
import { useTheme } from "next-themes"

const experiences = [
  {
    title: "Software Engineer",
    company: "Woods",
    location: "New Zealand",
    period: "March 2024 - Present",
    type: "Full-time",
    description:
      "Designing and developing user-friendly front-end interfaces using Figma and ReactJS, focusing on optimal functionality and user experience. Creating robust APIs for front-end applications in Python to ensure seamless data interaction and system integration.",
    responsibilities: [
      "Design and develop user-friendly front-end interfaces using Figma and ReactJS",
      "Create robust APIs for front-end applications in Python",
      "Manage and utilize AWS services for logging, data storage, and microservices",
      "Ensure seamless data interaction and system integration",
      "Focus on optimal functionality and user experience",
    ],
    technologies: ["React.js", "Python", "Figma", "AWS", "Microservices"],
    achievements: [
      "Improved user experience through optimized front-end interfaces",
      "Enhanced application performance with AWS services integration",
      "Streamlined data interaction processes",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Tech Agrim",
    location: "India",
    period: "2022 - 2023",
    type: "Full-time",
    description:
      "Architected a scalable solution using Node.js and Next.js, supported by AWS RDS for data storage and AWS S3 for efficient object management. Seamlessly integrated AWS Cognito for user authentication and automated administrative operations for enhanced efficiency.",
    responsibilities: [
      "Architect scalable solutions using Node.js and Next.js",
      "Implement AWS RDS for data storage and AWS S3 for object management",
      "Integrate AWS Cognito for user authentication",
      "Establish role-based access controls for security",
      "Automate administrative operations for enhanced efficiency",
    ],
    technologies: ["Node.js", "Next.js", "AWS RDS", "AWS S3", "AWS Cognito"],
    achievements: [
      "Built scalable architecture supporting growing user base",
      "Implemented stringent security with role-based access controls",
      "Automated operations reducing manual administrative work",
    ],
  },
  {
    title: "Senior Web Developer",
    company: "DoctorOnCall",
    location: "Remote",
    period: "2022",
    type: "Contract",
    description:
      "Developed multiple modules to handle various user customizations at the backend level with role-based authentication. Implemented a seamless appointment booking platform, facilitating effortless scheduling for both users and administrators.",
    responsibilities: [
      "Develop multiple modules for user customizations",
      "Implement role-based authentication systems",
      "Create seamless appointment booking platform",
      "Facilitate effortless scheduling for users and administrators",
      "Lead and coordinate team for effective product management",
    ],
    technologies: ["Node.js", "Authentication", "Booking Systems", "Team Leadership"],
    achievements: [
      "Successfully led team to manage product effectively",
      "Implemented comprehensive appointment booking system",
      "Enhanced user customization capabilities",
    ],
  },
  {
    title: "Software Engineer",
    company: "Turing Test",
    location: "India",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Enhanced system performance and reduced execution time by integrating Sequelize with NodeJS. Designed specialized modules for admin functionality, leading to a 10% reduction in development time. Updated and improved legacy code, resulting in a 60% decrease in security vulnerabilities.",
    responsibilities: [
      "Enhance system performance with Sequelize and NodeJS integration",
      "Design specialized modules for admin functionality",
      "Update and improve legacy code for security",
      "Reduce development time through efficient module design",
      "Address security vulnerabilities in existing systems",
    ],
    technologies: ["Node.js", "Sequelize", "Legacy Systems", "Security"],
    achievements: [
      "10% reduction in development time through specialized modules",
      "60% decrease in security vulnerabilities",
      "Significant system performance improvements",
    ],
  },
  {
    title: "Software Developer",
    company: "Vitalic Health Private Limited",
    location: "India",
    period: "2018 - 2020",
    type: "Full-time",
    description:
      "Upgraded NodeJS to enhance the doctor consultation system and streamlined processes using NodeJS and AngularJS. Developed key features like Algolia Search, Slot Management, and Order Tracking by integrating third-party APIs.",
    responsibilities: [
      "Upgrade NodeJS for doctor consultation system enhancement",
      "Streamline processes using NodeJS and AngularJS",
      "Develop Algolia Search integration",
      "Implement Slot Management system",
      "Create Order Tracking functionality",
      "Lead database maintenance for multiple projects",
    ],
    technologies: ["Node.js", "Angular.js", "Algolia", "Third-party APIs"],
    achievements: [
      "Enhanced doctor consultation system functionality",
      "15% reduction in operational time through improved admin dashboard",
      "Successfully integrated multiple third-party APIs",
    ],
  },
  {
    title: "Software Developer",
    company: "JustDoc",
    location: "India",
    period: "2017 - 2018",
    type: "Full-time",
    description:
      "Developed and maintained web applications using modern JavaScript frameworks and backend technologies. Collaborated with cross-functional teams to deliver high-quality software solutions for healthcare applications.",
    responsibilities: [
      "Develop and maintain web applications using JavaScript frameworks",
      "Collaborate with cross-functional teams on software solutions",
      "Implement healthcare-specific features and functionality",
      "Ensure code quality and application performance",
      "Participate in code reviews and technical discussions",
    ],
    technologies: ["JavaScript", "Node.js", "Web Development", "Healthcare Systems"],
    achievements: [
      "Successfully delivered healthcare web applications",
      "Improved application performance and user experience",
      "Contributed to team collaboration and code quality standards",
    ],
  },
]

const education = [
  {
    degree: "Postgraduate Diploma in Information Technology",
    institution: "Eastern Institute of Technology",
    location: "Auckland, New Zealand",
    period: "2023 - Present",
    status: "In Progress",
  },
  {
    degree: "Computer Science and Engineering",
    institution: "Cochin University of Science and Technology",
    location: "India",
    period: "2014 - 2018",
    status: "Completed",
  },
]

export default function ExperienceContent() {
  const { theme } = useTheme()

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary" />
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile for cleaner look */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-600"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative sm:pl-20"
                >
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden sm:block absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                  <Card
                    className={`hover:shadow-xl transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-white/5 backdrop-blur-xl border border-white/20"
                        : "bg-white/90 backdrop-blur-xl border border-gray-200"
                    }`}
                  >
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-col space-y-4">
                        <div>
                          <CardTitle
                            className={`text-lg sm:text-xl lg:text-2xl mb-2 flex items-start ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-1 text-yellow-500 flex-shrink-0" />
                            <span>{exp.title}</span>
                          </CardTitle>
                          <CardDescription
                            className={`flex flex-col sm:flex-row sm:items-center text-base sm:text-lg mb-2 ${
                              theme === "dark" ? "text-white/70" : "text-gray-600"
                            }`}
                          >
                            <div className="flex items-center mb-1 sm:mb-0">
                              <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                              {exp.company}
                            </div>
                            <div className="flex items-center sm:ml-4">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                              {exp.location}
                            </div>
                          </CardDescription>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <Badge variant="outline" className="mb-2 sm:mb-0 w-fit text-xs sm:text-sm">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </Badge>
                          <Badge variant="secondary" className="w-fit text-xs sm:text-sm">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-4 sm:p-6">
                      <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                        {exp.description}
                      </p>

                      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div>
                          <h4 className="font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                              <li key={idx} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0" />
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0" />
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Technologies Used</h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
            <Building className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary" />
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg sm:text-xl mb-2">{edu.degree}</CardTitle>
                        <CardDescription className="text-sm sm:text-base">{edu.institution}</CardDescription>
                        <CardDescription className="flex items-center mt-1 text-xs sm:text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {edu.location}
                        </CardDescription>
                      </div>
                      <Badge
                        variant={edu.status === "Completed" ? "default" : "secondary"}
                        className="mt-2 sm:mt-0 w-fit text-xs sm:text-sm"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      {edu.period}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
