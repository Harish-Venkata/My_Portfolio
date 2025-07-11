import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 -mt-30"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Pesala
            </span>
            <span className="text-gradient text-primary ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Venkata Harish
            </span>
          </h1>

          <p>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 text-4xl text-white">
              {" "}
              I'm
            </span>
            <span className="text-gradient text-primary ml-2 opacity-0 animate-fade-in-delay-2 text-4xl ">
              {" "}
              <Typewriter
                words={["Full Stack Developer.", "MERN Stack Developer."]}
                loop={5}
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 text-white">
            I'm a passionate web developer specializing in the MERN stack. I
            love building full-stack applications that are fast, responsive, and
            scalable — turning ideas into seamless digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
