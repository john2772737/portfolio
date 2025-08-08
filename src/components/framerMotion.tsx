// AnimatedShapes.tsx
import { motion } from "framer-motion";

const shapes = [
  { type: "circle", size: 120, color: "rgba(0, 255, 187, 0.3)", top: "10%", left: "15%" },
  { type: "square", size: 100, color: "rgba(255, 75, 145, 0.3)", top: "70%", left: "20%" },
  { type: "circle", size: 80, color: "rgba(255, 217, 61, 0.3)", top: "50%", left: "80%" },
  { type: "blob", size: 160, color: "rgba(108, 99, 255, 0.3)", top: "20%", left: "70%" },
];

export default function AnimatedShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={
            shape.type === "circle"
              ? "rounded-full"
              : shape.type === "square"
              ? ""
              : "rounded-full blur-2xl opacity-70"
          }
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            position: "absolute",
            top: shape.top,
            left: shape.left,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            rotate: shape.type === "square" ? [0, 15, 0] : 0,
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
