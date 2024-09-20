"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Star,
  MessageSquare,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Heart,
  Globe,
  Coffee,
  Check,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const CustomSVG = ({ children }: { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-12 h-12 text-indigo-400 mb-4"
  >
    {children}
  </svg>
);

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage() {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <motion.header
        className={`${
          isNavSticky
            ? "fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 shadow-md"
            : ""
        } transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-indigo-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Recognify
          </motion.div>
          <div className="hidden md:flex space-x-4 items-center">
            <Button className="rounded-full" variant="ghost" size="sm">
              Features
            </Button>
            <Button className="rounded-full" variant="ghost" size="sm">
              About
            </Button>
            <Button className="rounded-full" variant="ghost" size="sm">
              Pricing
            </Button>
            <Button className="rounded-full" variant="ghost" size="sm">
              Contact
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700 rounded-full text-white"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-800 shadow-md py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              <Button className="rounded-full" variant="ghost" size="sm">
                Features
              </Button>
              <Button className="rounded-full" variant="ghost" size="sm">
                About
              </Button>
              <Button className="rounded-full" variant="ghost" size="sm">
                Pricing
              </Button>
              <Button className="rounded-full" variant="ghost" size="sm">
                Contact
              </Button>
              <Button
                size="sm"
                className="bg-indigo-600 rounded-full hover:bg-indigo-700 text-white"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero section */}
        <AnimatedSection>
          <section className="text-center py-16 sm:py-20">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Feeling Disconnected?
              <br />
              <motion.span
                className="text-indigo-400"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Recognify
              </motion.span>{" "}
              Brings Your Team Together
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Combat isolation, boost morale, and bridge communication gaps in
              your remote team. Recognify turns digital spaces into hubs of
              appreciation and connection.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-4 rounded-full"
              >
                Start Recognizing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 rounded-full border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-gray-900"
              >
                Watch Demo
              </Button>
            </motion.div>
            <motion.div
              className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Recognify Dashboard"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Pain Points section */}
        <AnimatedSection>
          <section className="py-16 sm:py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Challenges We Solve
            </h2>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
                hidden: {},
              }}
            >
              {[
                {
                  title: "Isolation",
                  description: "Feel connected, even miles apart",
                  icon: (
                    <CustomSVG>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </CustomSVG>
                  ),
                },
                {
                  title: "Lack of Recognition",
                  description: "Celebrate every win, big or small",
                  icon: (
                    <CustomSVG>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </CustomSVG>
                  ),
                },
                {
                  title: "Communication Gaps",
                  description: "Bridge the digital divide effortlessly",
                  icon: (
                    <CustomSVG>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </CustomSVG>
                  ),
                },
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {point.icon}
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Features section */}
        <AnimatedSection>
          <section className="py-16 sm:py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How Recognify Empowers Your Team
            </h2>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {},
              }}
            >
              {[
                {
                  icon: Star,
                  title: "Peer Recognition",
                  description:
                    "Empower team members to celebrate each other's wins, big and small.",
                },
                {
                  icon: MessageSquare,
                  title: "Real-time Feedback",
                  description:
                    "Foster open communication that bridges the digital divide.",
                },
                {
                  icon: TrendingUp,
                  title: "Team Insights",
                  description:
                    "Gain valuable insights into your team's dynamics and morale.",
                },
                {
                  icon: Users,
                  title: "Virtual Team Building",
                  description:
                    "Create shared experiences that bring your team closer together.",
                },
                {
                  icon: Shield,
                  title: "Culture Reinforcement",
                  description:
                    "Strengthen your company values in every interaction.",
                },
                {
                  icon: Zap,
                  title: "Boost Productivity",
                  description:
                    "Motivate your team to achieve more through positive reinforcement.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.8 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="h-12 w-12 text-indigo-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </AnimatedSection>

        {/* About section */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-indigo-900 rounded-3xl">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <motion.p
                className="text-xl text-gray-300 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                At Recognify, we're on a mission to make remote work feel less
                remote. We believe that distance shouldn't diminish the human
                connections that make great teams thrive.
              </motion.p>
              <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.3 } },
                  hidden: {},
                }}
              >
                {[
                  {
                    icon: Heart,
                    title: "Foster Appreciation",
                    description:
                      "Create a culture where every contribution, no matter how small, is valued and celebrated.",
                  },
                  {
                    icon: Globe,
                    title: "Bridge Distances",
                    description:
                      "Bring your team closer together, turning digital spaces into places of genuine connection.",
                  },
                  {
                    icon: Coffee,
                    title: "Build Relationships",
                    description:
                      "Facilitate meaningful interactions that go beyond work tasks and create lasting bonds.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 50 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* How It Works section */}
        <AnimatedSection>
          <section className="py-16 sm:py-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              How Recognify Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.ol
                className="relative border-l border-indigo-400 ml-6"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.3 } },
                  hidden: {},
                }}
              >
                {[
                  {
                    title: "Join the Recognify Community",
                    description:
                      "Sign up your team and create your unique digital space for recognition.",
                  },
                  {
                    title: "Customize Your Experience",
                    description:
                      "Tailor recognition categories to reflect your team's unique values and goals.",
                  },
                  {
                    title: "Start Recognizing",
                    description:
                      "Encourage team members to celebrate wins and support each other's growth.",
                  },
                  {
                    title: "Grow Together",
                    description:
                      "Use insights and feedback to continuously improve your team's remote work experience.",
                  },
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    className="mb-10 ml-6"
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -50 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-400 rounded-full -left-4 ring-4 ring-gray-900">
                      {index + 1}
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-400">
                      {step.description}
                    </p>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Testimonials section */}
        {/*
          <AnimatedSection>
          <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-indigo-900 rounded-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">What Teams Are Saying</h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
                hidden: {}
              }}
            >
              {[
                {
                  quote: "Recognify has transformed how our remote team connects. It's like we're all in the same room, celebrating our wins together.",
                  author: "Sarah L.",
                  role: "Product Manager",
                  avatar: (
                    <CustomSVG>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </CustomSVG>
                  )
                },
                {
                  quote: "The boost in team morale since we started using Recognify is incredible. Our team feels more united than ever.",
                  author: "Michael R.",
                  role: "HR Director",
                  avatar: (
                    <CustomSVG>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </CustomSVG>
                  )
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonial.avatar}
                  <p className="text-lg mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </AnimatedSection>
          */}

        {/* Pricing section */}
        <AnimatedSection>
          <section className="py-16 sm:py-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Simple, Transparent Pricing
            </h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
                hidden: {},
              }}
            >
              {[
                {
                  name: "Team",
                  price: 99,
                  features: [
                    "Up to 50 team members",
                    "Unlimited recognitions",
                    "Basic analytics",
                    "Email support",
                    "Integration with Slack",
                  ],
                },
                {
                  name: "Enterprise",
                  price: 299,
                  features: [
                    "Unlimited team members",
                    "Advanced analytics",
                    "Priority support",
                    "Custom integrations",
                    "Dedicated account manager",
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors"
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.8 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold mb-6">
                    ${plan.price}
                    <span className="text-xl font-normal text-gray-400">
                      /month
                    </span>
                  </p>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-indigo-400 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    Choose {plan.name}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Integration Showcase section */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-indigo-900 rounded-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Seamless Integrations
            </h2>
            <div className="max-w-4xl mx-auto text-center px-4">
              <motion.p
                className="text-xl text-gray-300 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Recognify works harmoniously with the tools your team already
                loves. Boost productivity without disrupting your existing
                workflow.
              </motion.p>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {},
                }}
              >
                {[
                  {
                    name: "Slack",
                    icon: "/placeholder.svg?height=64&width=64&text=Slack",
                  },
                  {
                    name: "Microsoft Teams",
                    icon: "/placeholder.svg?height=64&width=64&text=Teams",
                  },
                  {
                    name: "Zoom",
                    icon: "/placeholder.svg?height=64&width=64&text=Zoom",
                  },
                  {
                    name: "Trello",
                    icon: "/placeholder.svg?height=64&width=64&text=Trello",
                  },
                  {
                    name: "Asana",
                    icon: "/placeholder.svg?height=64&width=64&text=Asana",
                  },
                  {
                    name: "Jira",
                    icon: "/placeholder.svg?height=64&width=64&text=Jira",
                  },
                  {
                    name: "GitHub",
                    icon: "/placeholder.svg?height=64&width=64&text=GitHub",
                  },
                  {
                    name: "GitLab",
                    icon: "/placeholder.svg?height=64&width=64&text=GitLab",
                  },
                ].map((integration, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0.8 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                      <Image
                        src={integration.icon}
                        alt={integration.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-sm font-medium">{integration.name}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button className="mt-12 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white">
                  Explore All Integrations
                </Button>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA section */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to transform your remote team?
            </motion.h2>
            <motion.p
              className="text-xl mb-12 max-w-2xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join the Recognify community and start building a more connected,
              engaged, and empowered remote team today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-4 rounded-full"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Recognify</h3>
              <p className="text-gray-400">
                Bringing remote teams closer, one recognition at a time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-400"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-400"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-400"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-400"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-400"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-400"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-400"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-indigo-400"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Recognify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
