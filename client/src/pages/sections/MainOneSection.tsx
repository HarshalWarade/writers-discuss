import { motion } from "framer-motion";
import { Calendar, Check, Stars, Verified } from "lucide-react";
import { COMMON_SPAN_CLASS } from "../../constants";

const MainOneSection = () => {
  return (
    <div className="flex flex-col py-8 gap-16">
      {/* Added z-10 here to ensure it stays above the page background */}
      <h2 className="text-4xl lg:text-6xl w-full text-center z-10">
        {/* Wrap the text and SVG in a relative, w-fit span! */}
        <span className="relative inline-block w-fit">
          The <span className={COMMON_SPAN_CLASS}>reward</span> system
          <svg
            className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-auto text-indigo-400 opacity-30 z-[-1]"
            viewBox="0 0 300 50" /* Increased height to 50 so it doesn't clip! */
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible" /* Failsafe to prevent edge chopping */
          >
            {/* Sweeps under, drawing Right-to-Left */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              d="M290 15 C 220 45 80 45 10 20" /* Lowered the curve to fit the new taller box */
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* Splatters */}
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 }}
              cx="25"
              cy="36" /* Adjusted Y to match the new box */
              r="2.5"
              fill="currentColor"
            />
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5 }}
              cx="15"
              cy="8"
              r="1.5"
              fill="currentColor"
            />
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 }}
              cx="140"
              cy="32" /* Adjusted Y */
              r="2"
              fill="currentColor"
            />
          </svg>
        </span>
      </h2>
      <div className="flex flex-1 justify-between w-full">
        <div className="flex-1 flex flex-col justify-center gap-8 px-8">
          {/* Card 1: Writing Milestone */}
          <div className="flex justify-start">
            <div className="bg-indigo-800/10 border flex items-center rounded-lg p-4 border-indigo-800/30 w-[97%]">
              <div className="shrink-0">
                <div className="bg-indigo-800/80 text-white p-3 rounded-full w-min">
                  <Stars />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-1 px-4">
                <h2 className="text-xl font-semibold">Chapter Milestone</h2>
                <p className="text-text-supporting text-sm">
                  You just crossed the 10,000-word mark on your latest draft.
                  Keep the ink flowing!
                </p>
              </div>

              <div className="font-bold text-indigo-800 whitespace-nowrap">
                +500 Pages
              </div>
            </div>
          </div>

          {/* Card 2: Consistency/Streaks */}
          <div className="flex justify-end">
            <div className="bg-indigo-800/10 border flex items-center rounded-lg p-4 border-indigo-800/30 w-[97%]">
              <div className="shrink-0">
                <div className="bg-indigo-800/80 text-white p-3 rounded-full w-min">
                  <Calendar />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-1 px-4">
                <h2 className="text-xl font-semibold">Daily Writing Streak</h2>
                <p className="text-text-supporting text-sm">
                  You've successfully hit your daily word count goal for 140
                  consecutive days.
                </p>
              </div>

              <div className="font-bold text-indigo-800 whitespace-nowrap">
                Level-10
              </div>
            </div>
          </div>

          {/* Card 3: Community Contribution */}
          <div className="flex justify-start">
            <div className="bg-indigo-800/10 border flex items-center rounded-lg p-4 border-indigo-800/30 w-[97%]">
              <div className="shrink-0">
                <div className="bg-indigo-800/80 text-white p-3 rounded-full w-min">
                  <Verified />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-1 px-4">
                <h2 className="text-xl font-semibold">Helpful Critique</h2>
                <p className="text-text-supporting text-sm">
                  Your feedback on a fellow author's scene was verified and
                  voted as highly helpful.
                </p>
              </div>

              <div className="font-bold text-indigo-800 whitespace-nowrap">
                +500 Pages
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8 px-8">
          <div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              nisi saepe quae numquam, possimus voluptatem nesciunt voluptates
              doloribus a ad! Quod ullam nostrum aperiam exercitationem.
              Adipisci suscipit eos sequi tenetur fugiat inventore porro,
              quisquam impedit enim unde magnam saepe quas deserunt repudiandae
              exercitationem. Sed doloremque obcaecati optio sit facilis
              quaerat.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center rounded-lg gap-4 p-4 border border-indigo-800/30">
              <span className="bg-indigo-800/50 p-2 rounded-full">
                <Check />
              </span>
              <div className="flex flex-col gap-1">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, illo?
                </span>
                <p className="text-text-supporting">some text here</p>
              </div>
            </div>
            <div className="flex items-center rounded-lg gap-4 p-4 border border-indigo-800/30">
              <span className="bg-indigo-800/50 p-2 rounded-full">
                <Check />
              </span>
              <div className="flex flex-col gap-1">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, illo?
                </span>
                <p className="text-text-supporting">some text here</p>
              </div>
            </div>
            <div className="flex items-center rounded-lg gap-4 p-4 border border-indigo-800/30">
              <span className="bg-indigo-800/50 p-2 rounded-full">
                <Check />
              </span>
              <div className="flex flex-col gap-1">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, illo?
                </span>
                <p className="text-text-supporting">some text here</p>
              </div>
            </div>
            <div className="flex items-center rounded-lg gap-4 p-4 border border-indigo-800/30">
              <span className="bg-indigo-800/50 p-2 rounded-full">
                <Check />
              </span>
              <div className="flex flex-col gap-1">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, illo?
                </span>
                <p className="text-text-supporting">some text here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainOneSection;
