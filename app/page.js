// app/page.tsx or pages/index.tsx depending on your setup
"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
