import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function CallBooking() {
  const [init, setInit] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    if (showConfetti) {
      container.play();
      setTimeout(() => {
        container.stop();
        setShowConfetti(false);
      }, 3000); // Confetti duration
    }
  };

  const showConfettiEffect = () => {
    setShowConfetti(true);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const handleCalendlyEvent = (e) => {
      if (
        e.origin === "https://calendly.com" &&
        e.data.event &&
        e.data.event === "calendly.event_scheduled"
      ) {
        showConfettiEffect();
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);

  const confettiOptions = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#FFD700", "#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#00FFFF"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 1,
          anim: {
            enable: true,
            speed: 5,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: { enable: true, minimumValue: 1 },
          anim: {
            enable: true,
            speed: 10,
            size_min: 0.1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 10,
          direction: "bottom",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center m-20">
      {showConfetti && (
        <Particles
          id="tsparticles"
          options={confettiOptions}
          loaded={particlesLoaded}
        />
      )}
      <p className="font-montserrat font-semibold text-white text-lg italic mt-5 mb-5">
        Maximize growth with virtually no risk
      </p>
      <h1 className="font-montserrat font-black text-white italic text-4xl w-2/3 grad-headline text-center">
        LET YOUR BUSINESS GROW BEYOND THE IMAGINABLE
      </h1>
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/accelerate_mayhem/strategy-session?background_color=171717&text_color=ffffff&primary_color=eef069"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
}

export default CallBooking;
