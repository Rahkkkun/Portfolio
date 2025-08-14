// app/page.tsx or pages/index.tsx depending on your setup
"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import TypingHeading from "@/components/typingHeading";
import TypingName from "@/components/typingName";
import { motion } from "framer-motion";
import AboutSection from "@/components/aboutSection";


export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form submitted!"); // You can replace this with actual logic
    // Optional: show success message or reset form
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      className="min-h-screen bg-[#dcdad9] text-black font-sans flex flex-col justify-between p-10"
      id="home"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
        <div className="pt-12">
          <TypingHeading />

          <Badge
            variant="outline"
            className="bg-zinc-900/10 border-zinc-700/20 text-zinc-800 text-sm font-medium px-4 py-2 backdrop-blur-sm mt-5"
          >
            - FRONTEND ADDICTED
          </Badge>
        </div>

        <div className="flex flex-col items-end mt-10 lg:mt-0">
          <div className="w-90 h-90 relative overflow-hidden rounded-sm mt-30">
            <Image
              src="/pic.jpeg"
              alt="Your Photo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <TypingName />
          <Badge
            variant="outline"
            className="bg-zinc-900/10 border-zinc-700/20 text-zinc-800 text-sm font-medium px-4 py-2 backdrop-blur-sm mt-5"
          >
            - FULLSTACK CAPABLE
          </Badge>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <a href="#about">
          <Badge className="animate-bounce bg-zinc-900 text-white border border-zinc-700 px-7 py-3 text-lg font-medium cursor-pointer">
            ↓ SCROLL
          </Badge>
        </a>
      </div>

      {/*ABOUT ME */}
     <AboutSection/>

      {/* PROJECTS */}
      <section className="bg-[#dcdad9] py-24 px-6" id="projects">
        <div className="max-w-6xl mx-auto space-y-12 w-full">
          <motion.h1
            className="text-9xl font-bold leading-[0.8] text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            PROJECTS
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Separator className="mx-auto max-w-xs" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="border border-zinc-400 bg-transparent shadow-none overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-zinc-600">
                <motion.div 
                  className="relative h-64 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src="/picture.png"
                    alt="Better-Car Project Demo"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </motion.div>
                
                <CardContent className="p-6 space-y-4">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                      Better-Car
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Advanced AI Car Search and Test Drive Platform. A modern, AI-powered car search and test drive booking platform that connects car enthusiasts with their dream vehicles.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    {["Next.js", "React", "Tailwind CSS", "Supabase", "Prisma", "Clerk"].map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-zinc-900/10 border-zinc-700/20 text-zinc-800 text-xs font-medium px-3 py-1 hover:bg-zinc-900 hover:text-white transition-all duration-200 cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex gap-3 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="border-zinc-400 text-zinc-700 hover:bg-zinc-900 hover:text-white transition-all duration-200 hover:shadow-lg"
                      >
                        <a href="https://better-car-ymi5.vercel.app/" target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="border-zinc-400 text-zinc-700 hover:bg-zinc-900 hover:text-white transition-all duration-200 hover:shadow-lg"
                      >
                        <a href="https://github.com/Rahkkkun/better-car" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-[#dcdad9] py-24 px-6" id="skills">
        <div className="max-w-6xl mx-auto space-y-12 w-full">
          <h1 className="text-9xl font-bold leading-[0.8] text-center">
            SKILLS
          </h1>
          <Separator className="mx-auto max-w-xs" />

          <Card className="bg-transparent border border-zinc-400 shadow-none p-10">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML",
                  "CSS",
                  "MongoDB",
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={badgeVariants}
                  >
                    <Badge
                      className="bg-zinc-900 border-black text-white text-sm font-medium px-7 py-3 backdrop-blur-sm mt-5"
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
                
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT ME / NEWSLETTER */}
      <section className="bg-[#dcdad9] py-24 px-6" id="contact">
        <div className="max-w-4xl mx-auto space-y-12 w-full">
          <h1 className="text-9xl font-bold leading-[0.8] text-center">
            CONTACT ME
          </h1>
          <Separator className="mx-auto max-w-xs" />

          <Card className="bg-transparent border border-zinc-400 shadow-none p-10">
            <CardContent className="space-y-6">
              <form
                action="https://formspree.io/f/movlanew" // replace with your real form endpoint
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-zinc-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="mt-1 w-full border border-zinc-400 px-4 py-2 rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-zinc-800"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-zinc-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="mt-1 w-full border border-zinc-400 px-4 py-2 rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-zinc-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-zinc-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Say something..."
                    required
                    className="mt-1 w-full border border-zinc-400 px-4 py-2 rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-zinc-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition duration-200 rounded-md text-sm font-medium cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="mt-20 flex justify-center">
        <a href="#home">
          <Badge className="animate-bounce bg-zinc-900 text-white border border-zinc-700 px-7 py-3 text-lg font-medium cursor-pointer">
            ↑ BACK TO TOP
          </Badge>
        </a>
      </div>
    </div>
  );
}
