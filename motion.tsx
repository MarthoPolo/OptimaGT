import React from 'react';
import { motion, TargetAndTransition } from 'framer-motion';

const animations: Record<string, TargetAndTransition> = {
  "_8_95_personalized_fitness_built_with_generative_ai": {
    "y": [
      null,
      -20
    ],
    "transition": {
      "y": {
        "type": "keyframes",
        "ease": [
          0,
          0,
          0.58,
          1
        ],
        "times": [
          0,
          1
        ],
        "duration": 0.9
      },
      "opacity": {
        "type": "keyframes",
        "ease": [
          0,
          0,
          0.58,
          1
        ],
        "times": [
          0,
          1
        ],
        "duration": 0.9
      }
    },
    "opacity": [
      0,
      1
    ]
  },
  "_9_230_get_started_button": {
    "y": [
      null,
      -20
    ],
    "transition": {
      "y": {
        "type": "keyframes",
        "ease": [
          0.25,
          1,
          0.5,
          1
        ],
        "times": [
          0,
          1
        ],
        "duration": 0.9
      },
      "opacity": {
        "type": "keyframes",
        "ease": [
          0.76,
          0,
          0.24,
          1
        ],
        "times": [
          0,
          1
        ],
        "duration": 0.9
      }
    },
    "opacity": [
      0,
      1
    ]
  }
}

export function App() {
  return (
    <>
      <motion.div id="_8_95_personalized_fitness_built_with_generative_ai" animate={animations._8_95_personalized_fitness_built_with_generative_ai} />
<motion.div id="_9_230_get_started_button" animate={animations._9_230_get_started_button} />
    </>
  )
}
