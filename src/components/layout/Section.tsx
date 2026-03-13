"use client";

import { motion } from "motion/react";
import Container from "./Container";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({ id, children, className, fullWidth }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {fullWidth ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </Container>
      )}
    </section>
  );
}
