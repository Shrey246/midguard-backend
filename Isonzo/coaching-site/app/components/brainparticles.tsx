"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BrainParticles() {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo<any>(() => ({
    fullScreen: { enable: false },

    background: {
      color: "transparent"
    },

    particles: {
      number: {
        value: 80,
        density: {
          enable: true
        }
      },

      color: {
        value: "#14b8a6"
      },

      links: {
        enable: true,
        color: "#14b8a6",
        distance: 140,
        opacity: 0.3,
        width: 1
      },

      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: {
          default: "bounce"
        }
      },

      opacity: {
        value: 0.5
      },

      size: {
        value: {
          min: 1,
          max: 4
        }
      }
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        }
      },

      modes: {
        repulse: {
          distance: 100
        }
      }
    }

  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}