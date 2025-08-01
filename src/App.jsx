import React, { useState } from "react";
import { TABS } from "../constants";
import { motion } from "motion/react";

const App = () => {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="h-dvh w-full flex justify-center items-center">
      <nav className="flex items-center gap-8">
        {TABS.map((tab, index) => (
          <a
            href={tab.name}
            className="text-[1.2rem] relative cursor-pointer p-2  hover:text-neutral-200 transition-colors"
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(0)}
          >
            {hovered === index && (
              <motion.span
                layoutId="hovered-span"
                className="h-full  absolute inset-0 rounded-md bg-[#2090FF]"
              />
            )}
            <span className="relative z-10">
              {tab.icon} {tab.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default App;
