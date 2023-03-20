import { motion } from "framer-motion";
import { Skill as SkillType } from "../../typings";
import Skill from "./Skill";
type Props = { skills: SkillType[] };
function SkillType({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl ">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-400 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="skills-grid grid grid-cols-5 sm:grid-cols-4 md:grid-cols-7 pt-5 gap-2 sm:gap-5">
        {skills.slice(0, skills.length / 2).map((s: SkillType) => (
          <Skill key={s._id} skill={s} scale={0} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((s: SkillType) => (
          <Skill key={s._id} skill={s} scale={1.5} />
        ))}
      </div>
    </motion.div>
  );
}

export default SkillType;

{
  /* <div className="experience-content inline-grid grid-cols-1 md:grid-cols-2 p-0 box-border w-full mt-12 border border-white border-r-0 border-b-0">
    <div className="experience-card">
      <div className="top">
        <div>
          <h3>Python</h3>
          <span>
            Django, Celery, Selenium, BeautifulSoup4, Automation, Numpy,
            Pandas, Matplotlib, Problem Solving, Competetive Programming
          </span>
        </div>
        <span>
          <FaPython /> <DiDjango /> <DiCode />
        </span>
      </div>
      <div className="bottom">
        <span>2019-present</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="top">
        <div>
          <h3>JavaScript</h3>
          <span>
            VanillaJs, JQuery, JSON, Node.js, ReactJs, NextJs, ExpressJs
          </span>
        </div>
        <span>
          <FaJs /> <DiJqueryLogo /> <DiNodejs /> <DiReact />
        </span>
      </div>
      <div className="bottom">
        <span>2017-present</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="top">
        <div>
          <h3>Java</h3>
          <span>
            Core Java, Problem Solving, OOPS, Competetive Programming
          </span>
        </div>
        <span>
          <FaJava />
        </span>
      </div>
      <div className="bottom">
        <span>2016-present</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="top">
        <div>
          <h3>HTML5</h3>
          <span>Web Development, Markdown</span>
        </div>
        <span>
          <FaHtml5 /> <DiMarkdown />
        </span>
      </div>
      <div className="bottom">
        <span>2017-present</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="top">
        <div>
          <h3>CSS3</h3>
          <span>Web Development, Web Design, Bootstrap, TailwindCSS</span>
        </div>
        <span>
          <FaCss3Alt />
        </span>
      </div>
      <div className="bottom">
        <span>2017-present</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="top">
        <div>
          <h3>Database Management</h3>
          <span>MySQL, PostgreSQL, SQLite, MongoDB, Firebase</span>
        </div>
        <span>
          <FaDatabase /> <DiMysql /> <DiPostgresql /> <DiSqllite />{" "}
          <DiMongodb /> <DiFirebase />
        </span>
      </div>
      <div className="bottom">
        <span>2020-present</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="top">
        <div>
          <h3>Dart</h3>
          <span>Flutter</span>
        </div>
        <span>
          <DiDart />
        </span>
      </div>
      <div className="bottom">
        <span>2020-present</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="top">
        <div>
          <h3>Video Editing</h3>
          <span>
            Adobe AfterEffects, Adobe PremierePro, Sony VegasPro, Corel
            VideoStudio
          </span>
        </div>
        <span>
          <SiAdobeaftereffects /> <SiAdobepremierepro /> <SiSony />
        </span>
      </div>
      <div className="bottom">
        <span>2018-present</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="top">
        <div>
          <h3>Photo Editing | Graphic Design</h3>
          <span>Adobe Photoshop</span>
        </div>
        <span>
          <DiPhotoshop />
        </span>
      </div>
      <div className="bottom">
        <span>2018-present</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="top">
        <div>
          <h3>UI/UX</h3>
          <span>Adobe XD, Figma</span>
        </div>
        <span>
          <SiAdobexd /> <FiFigma />
        </span>
      </div>
      <div className="bottom">
        <span>2022-present</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="top">
        <div>
          <h3>Vector Design</h3>
          <span>Adobe Illustrator</span>
        </div>
        <span>
          <DiIllustrator />
        </span>
      </div>
      <div className="bottom">
        <span>2022-present</span>
      </div>
    </div>
  </div>{" "} */
}
