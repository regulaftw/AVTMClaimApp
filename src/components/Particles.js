import React, { Component } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

class ParticleSettings extends Component {
  render() {
    return (
      <div>
        <Particles
          id="tsparticles"
          init={async (main) => {
            console.log(main);
            await loadFull(main);
          }}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1 // Set zIndex to -1 to ensure it stays in the background
            },
            particles: {
              number: {
                value: 100,
                density: {
                  enable: false,
                  value_area: 800
                }
              },
              color: {
                value: "#7701BC"
              },
              shape: {
                type: "star",
                options: {
                  sides: 5
                }
              },
              // ... other particle settings ...
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: false,
                  mode: "grab"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 10,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 70  
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true,
            background:
             {
              color: "#111",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover"
            }
          }}
        />
      </div>
    );
  }
}

export default ParticleSettings;
