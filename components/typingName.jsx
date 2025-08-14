"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const line1 = "Rahul";
const line2 = "Maity";

export default function TypingName() {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [typingStage, setTypingStage] = useState("line1");

  useEffect(() => {
    let timeout;

    if (typingStage === "line1" && firstLine.length < line1.length) {
      timeout = setTimeout(() => {
        setFirstLine(line1.slice(0, firstLine.length + 1));
      }, 100);
    } else if (typingStage === "line1" && firstLine.length === line1.length) {
      setTypingStage("line2");
    } else if (typingStage === "line2" && secondLine.length < line2.length) {
      timeout = setTimeout(() => {
        setSecondLine(line2.slice(0, secondLine.length + 1));
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [firstLine, secondLine, typingStage]);

  return (
    <motion.h1
      className="text-5xl md:text-7xl font-bold text-black text-right leading-[0.8] whitespace-pre-line mt-7 mb-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {firstLine}
      {firstLine.length === line1.length && "\n"}
      {secondLine}
     
    </motion.h1>
  );
}
