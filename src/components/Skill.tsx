import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import { Skill } from "../../typings";
type Props = { scale?: number; skill: Skill };
function Skill({ scale, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer z-20">
      <motion.img
        initial={{
          scale: 0,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        src={urlFor(skill.image).url()}
        className="rounded-full border border-gray-500 object-cover md:w-20 md:h-20 w-8 h-8 sm:w-12 sm:h-12 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 rounded-full transition duration-300 ease-in-out group-hover:bg-white w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20">
        <div className="flex items-center justify-center h-full z-20">
          <p className="text-xs sm:text-sm md:text-3xl font-bold text-gray-800 tracking-tighter opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
