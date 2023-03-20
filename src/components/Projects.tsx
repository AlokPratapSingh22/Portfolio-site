import { motion } from "framer-motion";
import { Space_Mono } from "next/font/google";
import Image from "next/image";
import { urlFor } from "../../sanity";
import { Project, Skill } from "../../typings";
const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: ["700", "400"],
});

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto z-10 items-center"
    >
      <h3
        data-value="Projects"
        id="title"
        className={`${space_mono.className} z-30 absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl hover:font-bold`}
      >
        Projects
      </h3>

      <div className="relative w-full flex items-center overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track scrollbar-track-gray-400/20 scrollbar-thumb-[#0fe3ff]/80">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt="project1"
              width={400}
              height={400}
              className="object-contain w-80 h-80"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#0fe3ff]/50">
                  Project {index + 1} of {projects.length}
                </span>
                : {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project.technologies?.map((tech: Skill, i: number) => (
                  <Image
                    src={urlFor(tech.image).url()}
                    width={50}
                    height={50}
                    alt={tech.title}
                    key={i}
                    className="h-10 w-10"
                  />
                ))}
              </div>

              <p className="text-base sm:text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#0fe3ff]/20 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;

// useEffect(() => {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let interval: any = null;

//   const h3Element = document.getElementById("title");
//   h3Element?.addEventListener("mouseover", (event) => {
//     let iteration = 0;

//     clearInterval(interval);

//     interval = setInterval(() => {
//       event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter: string, index: int) => {
//           if (index < iteration) {
//             return event.target.dataset.value[index];
//           }

//           return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//       if (iteration >= event.target.dataset.value.length) {
//         clearInterval(interval);
//       }

//       iteration += 1 / 3;
//     }, 30);
//   });
// }, []);
