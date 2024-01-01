"use client";
import Image from "next/image";
import Bubble from "./components/bubble";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 mt-5 ml-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Bubble loadingDuration={4000} text="Hey there 👋" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        <Bubble loadingDuration={9000} text="I'm Reza" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 9 }}
      >
        <Bubble loadingDuration={19000} text="I code web thing on the web" />
      </motion.div>
    </div>
  );
}
