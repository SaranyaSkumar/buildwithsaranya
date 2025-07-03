"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import ProjectCard from "@/components/project-card"

import { useTheme } from "next-themes"


// Move projects data outside component
const projects = [
  {
    id: 1,
    title: "Healthcare Management System",
    description:
      "A comprehensive healthcare platform with appointment booking, patient management, and telemedicine features.",
    longDescription:
      "Built a scalable healthcare management system using Node.js and React.js, integrated with AWS services for secure data storage and real-time communication. Features include role-based authentication, appointment scheduling, and patient record management.",
    technologies: ["Node.js", "React.js", "PostgreSQL", "AWS RDS", "AWS S3", "AWS Cognito"],
    category: "Full-stack",
    status: "Completed",
    year: "2024",
    features: [
      "Role-based authentication and authorization",
      "Real-time appointment booking system",
      "Secure patient data management",
      "Telemedicine integration",
      "Admin dashboard with analytics",
    ],
    challenges: [
      "Implementing HIPAA-compliant data security",
      "Real-time synchronization across multiple users",
      "Scalable architecture for growing user base",
    ],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced search, payment integration, and inventory management.",
    longDescription:
      "Developed a full-featured e-commerce platform with Algolia search integration, Stripe payment processing, and real-time inventory tracking. Built with Next.js and Node.js for optimal performance.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Algolia", "Stripe", "Redis"],
    category: "E-commerce",
    status: "In Progress",
    year: "2023",
    features: [
      "Advanced product search with Algolia",
      "Secure payment processing with Stripe",
      "Real-time inventory management",
      "Order tracking and notifications",
      "Admin panel for product management",
    ],
    challenges: [
      "Optimizing search performance for large catalogs",
      "Handling concurrent inventory updates",
      "Payment security and fraud prevention",
    ],
  },
  {
    id: 3,
    title: "Doctor Consultation Platform",
    description: "Digital platform connecting patients with healthcare providers for online consultations.",
    longDescription:
      "Created a comprehensive telemedicine platform enabling secure video consultations, prescription management, and patient history tracking. Integrated with multiple third-party APIs for enhanced functionality.",
    technologies: ["Angular", "Node.js", "PostgreSQL", "WebRTC", "Socket.io"],
    category: "Healthcare",
    status: "Completed",
    year: "2022",
    features: [
      "Video consultation with WebRTC",
      "Prescription management system",
      "Patient history and records",
      "Appointment scheduling",
      "Payment integration",
    ],
    challenges: [
      "Ensuring video call quality and reliability",
      "Managing complex scheduling logic",
      "Integrating with existing healthcare systems",
    ],
  },
  {
    id: 4,
    title: "Microservices Architecture",
    description: "Scalable microservices solution with containerization and cloud deployment.",
    longDescription:
      "Architected and implemented a microservices-based system using Docker containers, deployed on AWS with auto-scaling capabilities. Includes API gateway, service discovery, and monitoring.",
    technologies: ["Node.js", "Docker", "AWS ECS", "API Gateway", "CloudWatch"],
    category: "Architecture",
    status: "Completed",
    year: "2023",
    features: [
      "Containerized microservices with Docker",
      "Auto-scaling with AWS ECS",
      "API Gateway for service routing",
      "Centralized logging and monitoring",
      "Service mesh implementation",
    ],
    challenges: [
      "Service communication and data consistency",
      "Monitoring and debugging distributed systems",
      "Managing deployment complexity",
    ],
  },
  {
    id: 5,
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for real-time data visualization and business intelligence.",
    longDescription:
      "Built a comprehensive analytics dashboard using React and D3.js for data visualization, with real-time updates via WebSocket connections. Integrated with multiple data sources and APIs.",
    technologies: ["React.js", "D3.js", "Node.js", "WebSocket", "Redis", "PostgreSQL"],
    category: "Analytics",
    status: "Completed",
    year: "2022",
    features: [
      "Real-time data visualization with D3.js",
      "Interactive charts and graphs",
      "Custom dashboard builder",
      "Data export and reporting",
      "Multi-tenant architecture",
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Real-time data synchronization",
      "Creating responsive visualizations",
    ],
  },
  {
    id: 6,
    title: "API Management Platform",
    description: "Comprehensive API management solution with authentication, rate limiting, and analytics.",
    longDescription:
      "Developed an API management platform providing authentication, rate limiting, request/response transformation, and detailed analytics. Built with scalability and security in mind.",
    technologies: ["Node.js", "Express.js", "Redis", "MongoDB", "JWT", "Docker"],
    category: "Backend",
    status: "In Progress",
    year: "2024",
    features: [
      "API authentication and authorization",
      "Rate limiting and throttling",
      "Request/response transformation",
      "Detailed API analytics",
      "Developer portal and documentation",
    ],
    challenges: [
      "Handling high-throughput API requests",
      "Implementing flexible rate limiting",
      "Creating comprehensive API documentation",
    ],
  },
]

export default function ProjectsPage() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <Header />
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
        {/* Header */}
        <div className="pt-20 pb-8 border-b border-gray-200 dark:border-white/10">
          <div className="container mx-auto">
            <div className="flex items-center mb-6">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                My Projects
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                A showcase of my work in full-stack development
              </p>
            </div>
          </div>
        </div>


        { /* Coming Soon*/ }
        <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10"
                  : "bg-white/80 backdrop-blur-xl border border-gray-200 hover:bg-white/90"
              }`}
            >
              <div className={`text-xs sm:text-sm ${theme === "dark" ? "text-white/60" : "text-gray-500"}`}>
                Coming Soon...
              </div>
            </motion.div>
        

        {/* Projects Grid */}
        { /*<div className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto">
            <div className="grid gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
