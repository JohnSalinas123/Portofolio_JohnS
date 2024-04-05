import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic} from "@tsparticles/basic";

const ParticleAnimation = () => {
    const [init, setInit] = useState(false);
  
    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        //await loadSlim(engine);
        await loadBasic(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
    const options = useMemo(
      () => ({
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          move: {
            direction: "top",
            enable: true,
            
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area : 750
            },
            value: 100,
          },
          opacity: {
            animation: {
                enable: true,
                speed: 0.1,
                sync: false,
              },
              value: {
                min: 0,
                max: 0.5
              }
          },
          shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
              },
            polygon: {
                nb_sides: 5,
            },
          },
            size: {
                value: 2,
                random: true,
                anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
                }
            },
            detectRetina: true,
        }}),
      [],
    );
  
    if (init) {
      return (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      );
    }
  
    return <></>;
  };

export default ParticleAnimation;