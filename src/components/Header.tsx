import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../../typings";

type Props = {
  socials: Social[];
};
export const Header = ({ socials }: Props) => {
  return (
    <header className="nav sticky top-0 flex items-start justify-between px-20 py-6 cursor-pointer max-w-full mx-auto z-20 xl:items-center">
      {/* Social Icons */}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.25 }}
        className="flex flex-row items-start"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="grey"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.25 }}
        className="flex flex-row items-center text-gray-300"
      >
        {/* <p>☀️</p> */}
        <SocialIcon
          network="email"
          bgColor="transparent"
          fgColor="grey"
          url="#contact"
        />
        <Link href="#contact">
          <p className="text-gray-400 hidden md:inline-flex text-sm uppercase hover:text-slate-500">
            Get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};
