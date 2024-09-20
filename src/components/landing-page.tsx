"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowRight,
  Check,
  MessageSquare,
  X,
  Star,
  Users,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Peer Recognition",
    description:
      "Bridge the distance gap and foster a culture of appreciation, even when your team is spread across time zones.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Structured Feedback",
    description:
      "Overcome communication barriers and ensure every team member receives constructive, actionable feedback for growth.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Pulse Surveys",
    description:
      "Stay connected with your team's well-being and quickly identify and address issues before they escalate.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    features: [
      "Up to 20 users",
      "Basic recognition features",
      "Monthly pulse surveys",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$299",
    features: [
      "Up to 100 users",
      "Advanced recognition tools",
      "Weekly pulse surveys",
      "Priority email support",
      "Custom branding",
    ],
  },
];

const companyLogos = [
  {
    name: "TechCorp",
    logo: "/placeholder.svg?height=60&width=120&text=TechCorp",
    quote: "Recognify boosted our team morale by 40%",
  },
  {
    name: "InnovateCo",
    logo: "/placeholder.svg?height=60&width=120&text=InnovateCo",
    quote: "Employee engagement increased by 35% with Recognify",
  },
  {
    name: "GlobalSoft",
    logo: "/placeholder.svg?height=60&width=120&text=GlobalSoft",
    quote: "Recognify helped us build a culture of appreciation",
  },
  {
    name: "FutureTech",
    logo: "/placeholder.svg?height=60&width=120&text=FutureTech",
    quote: "Our remote team feels more connected than ever",
  },
  {
    name: "SmartSolutions",
    logo: "/placeholder.svg?height=60&width=120&text=SmartSolutions",
    quote: "Recognify is a game-changer for remote work",
  },
];

const faqItems = [
  {
    question: "How does Recognify improve team morale in remote settings?",
    answer:
      "Recognify facilitates peer-to-peer recognition, making it easy for team members to appreciate each other's efforts across different time zones and locations. This consistent acknowledgment fosters a positive work environment and boosts morale, even when teams can't interact face-to-face.",
  },
  {
    question:
      "Can Recognify help with the challenges of remote team communication?",
    answer:
      "Recognify provides structured feedback tools and pulse surveys that enhance communication in remote teams. These features ensure that important conversations happen regularly, helping to overcome the communication barriers often faced in distributed work environments.",
  },
  {
    question:
      "How does Recognify address the isolation often felt in remote work?",
    answer:
      "Recognify creates a virtual space for team members to connect, share achievements, and provide feedback. Regular recognition and structured check-ins help combat feelings of isolation by maintaining a sense of community and shared purpose, even when working from different locations.",
  },
  {
    question: "Can Recognify integrate with our existing remote work tools?",
    answer:
      "Yes, Recognify offers API access in our Growth plan, allowing for seamless integration with your current remote work stack. This ensures that recognition and feedback become an integral part of your team's daily workflow, regardless of the other tools you're using.",
  },
];

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        className="rounded-full w-16 h-16 shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </Button>
      {isOpen && (
        <Card className="absolute bottom-20 right-0 w-80">
          <CardContent className="p-4">
            <h3 className="font-bold mb-2">Recognify Support</h3>
            <p className="mb-4">How can we help your remote team today?</p>
            <Textarea
              placeholder="Type your message here..."
              className="mb-2"
            />
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              Send
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function RemoteWorkChallenges() {
  return (
    <div className="grid md:grid-cols-3 gap-8 px-10">
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center text-red-700">
            <Users className="mr-2 h-6 w-6" />
            Disconnected Teams
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600">
            Remote work can lead to feelings of isolation and disconnection
            among team members, impacting collaboration and morale.
          </p>
        </CardContent>
      </Card>
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-700">
            <MessageSquare className="mr-2 h-6 w-6" />
            Communication Barriers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-orange-600">
            Lack of face-to-face interaction can result in misunderstandings and
            reduced clarity in team communication.
          </p>
        </CardContent>
      </Card>
      <Card className="border-amber-200 bg-amber-50">
        <CardHeader>
          <CardTitle className="flex items-center text-amber-700">
            <TrendingUp className="mr-2 h-6 w-6" />
            Performance Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-amber-600">
            Tracking and improving employee performance becomes more challenging
            in a distributed work environment.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function RecognifyBenefits() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <Card className="border-indigo-200 bg-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center text-indigo-700">
            <Star className="mr-2 h-6 w-6" />
            Boost Team Morale
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-indigo-600">
            Recognify's peer recognition system fosters a culture of
            appreciation, increasing team morale and job satisfaction.
          </p>
        </CardContent>
      </Card>
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-700">
            <MessageSquare className="mr-2 h-6 w-6" />
            Enhance Communication
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-600">
            Our structured feedback tools and pulse surveys improve team
            communication and alignment across time zones.
          </p>
        </CardContent>
      </Card>
      <Card className="border-emerald-200 bg-emerald-50">
        <CardHeader>
          <CardTitle className="flex items-center text-emerald-700">
            <TrendingUp className="mr-2 h-6 w-6" />
            Drive Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-emerald-600">
            Recognify's analytics help managers track engagement, recognize top
            performers, and make data-driven decisions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function LandingPage() {
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-b from-indigo-50 to-gray-50">
        <header
          className={`${
            isNavSticky
              ? "fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50"
              : ""
          } transition-all duration-300`}
        >
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-indigo-600"
            >
              Recognify
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-x-1 sm:space-x-2 md:space-x-4 flex items-center"
            >
              <Button
                className="rounded-full"
                variant="ghost"
                size="sm"
                onClick={() => scrollTo("features")}
              >
                Features
              </Button>
              <Button
                className="rounded-full"
                variant="ghost"
                size="sm"
                onClick={() => scrollTo("how-it-works")}
              >
                How It Works
              </Button>
              <Button
                className="rounded-full"
                variant="ghost"
                size="sm"
                onClick={() => scrollTo("benefits")}
              >
                Benefits
              </Button>
              <Button
                className="rounded-full"
                variant="ghost"
                size="sm"
                onClick={() => scrollTo("pricing")}
              >
                Pricing
              </Button>
              <Button
                className="rounded-full"
                variant="ghost"
                size="sm"
                onClick={() => scrollTo("testimonials")}
              >
                Testimonials
              </Button>
              <Button
                size="sm"
                className="rounded-full w-[100px] bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Sign Up
              </Button>
            </motion.div>
          </nav>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          {/* Hero section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16 sm:py-24"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Is Your Remote Team Suffering from{" "}
              <span className="text-red-300">
                Disconnection and Low Morale?
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-10 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Recognify helps you bridge the gap, boost engagement, and create a
              thriving remote work culture where every team member feels valued
              and connected.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-4 rounded-full"
              >
                Improve Your Remote Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 rounded-full border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                See How It Works
              </Button>
            </div>
          </motion.section>

          {/* Remote Work Challenges section */}
          <section
            id="challenges"
            className="py-16 sm:py-24 bg-white rounded-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
              Common Remote Work Challenges
            </h2>
            <RemoteWorkChallenges />
          </section>

          {/* Features section */}
          <section id="features" className="py-16 sm:py-24">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`py-12 sm:py-16 ${
                  index % 2 === 0 ? "bg-white" : "bg-indigo-50"
                } rounded-3xl mb-8`}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-8 lg:gap-16`}
                >
                  <div className="lg:w-1/2 space-y-6 px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-3 rounded-full">
                      Learn More
                    </Button>
                  </div>
                  <div className="lg:w-1/2">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </section>

          {/* How It Works section */}
          <section
            id="how-it-works"
            className="py-16 sm:py-24 bg-white rounded-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
              How Recognify Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <ol className="relative border-l border-indigo-200">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-200 rounded-full -left-4 ring-4 ring-white">
                    1
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                    Set Up Your Team
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500">
                    Invite team members and customize your Recognify workspace
                    to match your company culture.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-200 rounded-full -left-4 ring-4 ring-white">
                    2
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    Encourage Recognition
                  </h3>
                  <p className="text-base font-normal text-gray-500">
                    Team members can easily recognize each other's contributions
                    through the platform.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-200 rounded-full -left-4 ring-4 ring-white">
                    3
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    Gather Feedback
                  </h3>
                  <p className="text-base font-normal text-gray-500">
                    Conduct regular pulse surveys to gauge team sentiment and
                    identify areas for improvement.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-200 rounded-full -left-4 ring-4 ring-white">
                    4
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    Analyze and Improve
                  </h3>
                  <p className="text-base font-normal text-gray-500">
                    Use Recognify's analytics to track engagement, recognize top
                    performers, and make data-driven decisions to improve your
                    remote work culture.
                  </p>
                </li>
              </ol>
            </div>
          </section>

          {/* Recognify Benefits section */}
          <section
            id="benefits"
            className="py-16 sm:py-24 bg-indigo-50 my-16 px-16 rounded-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
              Why Recognify is Essential for Remote Teams
            </h2>
            <RecognifyBenefits />
            <div className="text-center mt-12">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-3 rounded-full">
                Start Transforming Your Team Today
              </Button>
            </div>
          </section>

          {/* Benefits section */}
          <section className="py-16 sm:py-24 my-16 px-8 bg-white rounded-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
              Benefits of Using Recognify
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Increased Employee Engagement",
                  description:
                    "Foster a culture of appreciation that keeps remote employees motivated and connected.",
                },
                {
                  title: "Improved Team Communication",
                  description:
                    "Break down communication barriers and ensure clear, constructive feedback across your distributed team.",
                },
                {
                  title: "Enhanced Performance Management",
                  description:
                    "Gain insights into team dynamics and individual contributions to make informed decisions.",
                },
                {
                  title: "Boosted Team Morale",
                  description:
                    "Create a positive work environment where achievements are celebrated, no matter where team members are located.",
                },
                {
                  title: "Reduced Employee Turnover",
                  description:
                    "Increase job satisfaction and retention by showing remote employees they're valued.",
                },
                {
                  title: "Data-Driven HR Strategies",
                  description:
                    "Use analytics to shape your remote work policies and improve overall team performance.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-indigo-50 p-6 rounded-xl shadow-md border border-indigo-100"
                >
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Remote Work Trends section (replacing the Animated Statistics section) */}
          {/*
                      <section className="py-16 sm:py-24 text-center bg-indigo-600 rounded-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Remote Work Trends</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
              {[
                { title: "Remote Work Adoption", description: "Companies embracing remote work policies" },
                { title: "Productivity Boost", description: "Reported increase in productivity for remote workers" },
                { title: "Work-Life Balance", description: "Improved work-life balance for remote employees" },
                { title: "Cost Savings", description: "Reduced overhead costs for businesses" }
              ].map((trend, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">{trend.title}</h3>
                  <p className="text-gray-600">{trend.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
            */}

          {/* Pricing section with animated feature comparison */}
          <section id="pricing" className="py-16 sm:py-24 bg-white rounded-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-gray-800">
              Choose Your Remote Team Solution
            </h2>
            <div className="grid md:grid-cols-2 gap-8 px-4 sm:px-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-indigo-50 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500"
                >
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">
                    {plan.name}
                  </h3>
                  <p className="text-2xl sm:text-5xl text-indigo-500 font-bold mb-6">
                    {plan.price}
                    <span className="text-base font-normal text-indigo-600">
                      {" "}
                      one-time fee
                    </span>
                  </p>
                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Check className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                        <span className="text-indigo-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-4 rounded-full">
                    Choose Plan
                  </Button>
                </motion.div>
              ))}
            </div>
            <p className="text-center mt-8 text-lg text-indigo-600">
              Limited time offer: One-time fee because everyone deserves to be
              recognized!
            </p>
          </section>

          {/* Testimonials section */}
          {/*
            <section
            id="testimonials"
            className="py-16 sm:py-24 bg-indigo-50 rounded-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-gray-800">
              Remote Teams Thriving with Recognify
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-100"
                >
                  <p className="text-gray-600 mb-6 text-lg">
                    "Recognify has bridged the gap in our distributed team. Our
                    remote employees now feel as valued and connected as those
                    in the office."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={`/placeholder.svg?height=60&width=60&text=User ${i}`}
                      alt={`User ${i}`}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold text-gray-800">Jane Doe</p>
                      <p className="text-gray-600">
                        HR Director, Global Tech Co.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
            */}

          {/* Trusted Companies section with tooltips */}
          {/*
            <section className="py-16 sm:py-24 text-center bg-white rounded-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">Empowering Remote-First Companies</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16">
              {companyLogos.map((company, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image src={company.logo} alt={company.name} width={180} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{company.quote}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </section>
            */}

          {/* FAQ section */}
          <section className="py-16 sm:py-24 my-16 bg-indigo-50 rounded-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
              Remote Work FAQs
            </h2>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 sm:py-24 bg-indigo-600 text-white text-center rounded-3xl my-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Ready to Revitalize Your Remote Team?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of distributed teams already using Recognify to
              overcome remote work challenges and build a thriving virtual
              workplace.
            </p>
            <form className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                className="max-w-sm bg-white text-gray-800 text-lg py-6 px-6 rounded-full"
              />
              <Button
                type="submit"
                className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-6 rounded-full"
              >
                Start Free Trial
              </Button>
            </form>
          </motion.section>
        </main>

        <footer className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Recognify
                </h3>
                <p className="text-gray-600">
                  Uniting remote teams through recognition and feedback.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Remote Solutions
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Team Building
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Employee Engagement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Performance Management
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Remote Work Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
              <p>
                &copy; {new Date().getFullYear()} Recognify. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <ChatBot />
    </div>
  );
}
