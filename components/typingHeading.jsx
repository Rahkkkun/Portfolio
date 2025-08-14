"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const line1 = "SOFTWARE";
const line2 = "DEVELOPER";

export default function TypingHeading() {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [stage, setStage] = useState("line1");

  useEffect(() => {
    let interval;

    if (stage === "line1" && firstLine.length < line1.length) {
      interval = setInterval(() => {
        setFirstLine(prev => {
          const next = line1.slice(0, prev.length + 1);
          if (next === line1) {
            clearInterval(interval);
            setStage("line2");
          }
          return next;
        });
      }, 80);
    } else if (stage === "line2" && secondLine.length < line2.length) {
      interval = setInterval(() => {
        setSecondLine(prev => {
          const next = line2.slice(0, prev.length + 1);
          if (next === line2) {
            clearInterval(interval);
            setStage("done");
          }
          return next;
        });
      }, 80);
    }

    return () => clearInterval(interval);
  }, [stage, firstLine, secondLine]);

  return (
    <motion.h1
      className="text-6xl md:text-9xl font-bold text-black text-left leading-[0.9]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {firstLine}
      {firstLine.length === line1.length && <br />}
      {secondLine}
    </motion.h1>
  );
}
