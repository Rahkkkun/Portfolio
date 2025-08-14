"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // adjust import if needed
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AboutSection() {
  return (
    <section className="bg-[#dcdad9] py-24 px-6" id="about">
      <div className="max-w-6xl mx-auto space-y-12 w-full">
        <motion.h1
          className="text-9xl font-bold leading-[0.8] text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ABOUT ME
        </motion.h1>

        <Separator className="mx-auto max-w-xs" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Who I Am",
              content: (
                <>
                  This is 
                  <span className="font-semibold"> Rahul Maity</span>— a
                  frontend-obsessed software developer focused on clean code,
                  elegant UI, and seamless experiences.
                </>
              ),
            },
            {
              title: "Education",
              content: (
                <>
                  🎓 B.Tech in Computer Science and Engineering
                  <br />
                  <span className="font-semibold">
                    College of Engineering & Management, Kolaghat
                  </span>
                </>
              ),
            },
            {
              title: "More About Me",
              content: (
                <>
                  📍 Based in{" "}
                  <span className="font-semibold">West Bengal, India</span>
                  <br />
                  💡 Passionate about building intuitive UIs and solving
                  real-world problems.
                </>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="border border-zinc-400 bg-transparent shadow-none min-h-[260px] flex flex-col justify-center">
                <CardContent className="p-6 space-y-4 text-center">
                  <Badge
                    variant="outline"
                    className="bg-zinc-900 border-black text-white text-sm font-medium px-4 py-2 backdrop-blur-sm mt-5"
                  >
                    {item.title}
                  </Badge>
                  <p className="text-zinc-600 leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
