'use client';

import React from 'react';
import { useScramble } from 'use-scramble';

export default function ScrambleText({ text }: { text: string }) {
  const { ref, replay } = useScramble({
    text,
    speed: 0.7,
    tick: 1,
    step: 2,
    scramble: 4,
    seed: 0,
    overflow: true,
  });

  return (
    <span
      ref={ref}
      onMouseEnter={() => replay()}
      className="cursor-pointer hover:text-green-400 transition-colors duration-300"
    >
      {text}
    </span>
  );
}
