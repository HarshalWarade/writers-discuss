import { motion } from "framer-motion";
import DummyPosts from "../../components/DummyPosts";

const HeroSection = () => {
  return (
    <section className="h-full flex items-center">
      <div className="w-full grid md:grid-cols-2 gap-15 items-center">
        <div className="flex flex-col gap-5">
          <div className="text-4xl md:text-6xl font-semibold leading-tight flex flex-col gap-2 z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-thin text-gray-600"
            >
              Built for writers.
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-fit"
            >
              Power behind great writing.
              <svg
                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-auto text-indigo-200 opacity-80 -z-10"
                viewBox="0 0 300 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                  d="M5 24C60 8 160 -5 295 18"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 }}
                  cx="280"
                  cy="26"
                  r="3"
                  fill="currentColor"
                />
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  cx="295"
                  cy="8"
                  r="1.5"
                  fill="currentColor"
                />
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                  cx="35"
                  cy="22"
                  r="2"
                  fill="currentColor"
                />
              </svg>
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg"
          >
            Post questions, refine your drafts, and share your novels with
            readers while gaining insights from a massive community of writers.
          </motion.p>
        </div>

        <div className="relative flex flex-col items-center justify-center py-20 overflow-hidden font-sans">
          <div className="absolute w-125 h-125 md:w-175 md:h-175 bg-linear-to-tr from-blue-300 via-red-200 to-purple-300 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
          <DummyPosts />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
