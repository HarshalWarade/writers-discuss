import { motion } from "framer-motion";

const DummyPosts = () => {
  return (
    <>
      {/* Post 1 (Slides in from the LEFT) */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        animate={{ opacity: 1, x: -32, rotate: -3 }}
        whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-10 w-full max-w-xl border border-white/40 p-5 rounded-2xl shadow-xl flex flex-col gap-4 bg-white/95 backdrop-blur-md cursor-default"
      >
        {/* User Profile Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
            HW
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2 justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-gray-900 hover:underline cursor-pointer">
                  Harshal Warade
                </span>
                <span className="bg-linear-to-r from-slate-900 to-slate-800 text-yellow-400 border border-yellow-500/50 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1 w-max">
                  <svg
                    className="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Elite
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold">
                <svg
                  className="w-3.5 h-3.5 text-rose-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="bg-linear-to-r from-rose-600 to-red-500 bg-clip-text text-transparent">
                  35.2K Pages
                </span>
              </span>
            </div>
            <span className="text-xs text-gray-500 cursor-pointer hover:underline">
              @harshalwarade
            </span>
          </div>
        </div>

        {/* Original Post Content */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg text-gray-900">
            Struggling with the "murky middle" of my novel...
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            I've hit the 40k-word mark in my draft, and the pacing has
            completely stalled. Right now, my characters are just sitting around
            discussing their next move, and I don't know how to transition to
            the next major plot point without it feeling rushed or forced. How
            do you guys bridge the gap between the setup and the climax without
            losing the reader's interest?
          </p>
        </div>

        {/* Action Stats / Buttons */}
        <div className="flex items-center justify-between text-gray-500 text-sm mt-1 border-y border-gray-200/60 py-2 px-2">
          <button className="flex items-center gap-2 hover:text-red-500 transition-colors group cursor-pointer">
            <svg
              className="w-5 h-5 group-hover:fill-red-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span className="font-medium">22.8K</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-500 transition-colors group cursor-pointer">
            <svg
              className="w-5 h-5 group-hover:fill-blue-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span className="font-medium">3400</span>
          </button>
          <button className="flex items-center gap-2 hover:text-green-500 transition-colors group cursor-pointer">
            <svg
              className="w-5 h-5 group-hover:fill-green-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
            <span className="font-medium">12.2K</span>
          </button>
        </div>
      </motion.div>

      {/* Post 2 (Slides in from the RIGHT, slight delay) */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 15 }}
        animate={{ opacity: 1, x: 48, rotate: 4 }} // x: 48 replaces translate-x-12
        whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
        transition={{ duration: 0.8, delay: 0.15, type: "spring", bounce: 0.4 }}
        className="relative z-20 w-full max-w-xl border border-white/40 p-5 rounded-2xl shadow-2xl flex flex-col gap-4 bg-white/95 backdrop-blur-md -mt-24 cursor-default"
      >
        {/* User Profile Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
            ST
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2 justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-gray-900 hover:underline cursor-pointer">
                  Sam Todler
                </span>
                <span className="bg-orange-50 text-orange-700 border border-orange-300 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 w-max">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                  Storyteller
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold">
                <svg
                  className="w-3.5 h-3.5 text-sky-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="bg-linear-to-r from-sky-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">
                  10.1K Pages
                </span>
              </span>
            </div>
            <span className="text-xs text-gray-500 cursor-pointer hover:underline">
              @sam.todler78
            </span>
          </div>
        </div>

        {/* Original Post Content */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg text-gray-900">
            Is anyone else struggling with character development?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            I feel like my main character's motivations are a bit flat. Any
            advice on making them feel more three-dimensional without relying on
            heavy exposition?
          </p>
        </div>

        {/* Action Stats / Buttons */}
        <div className="flex items-center justify-between text-gray-500 text-sm mt-1 border-y border-gray-200/60 py-2 px-2">
          <button className="flex items-center gap-2 hover:text-red-500 transition-colors group cursor-pointer">
            <svg
              className="w-5 h-5 group-hover:fill-red-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span className="font-medium">15.1K</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-500 transition-colors group cursor-pointer">
            <svg
              className="w-5 h-5 group-hover:fill-blue-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span className="font-medium">1288</span>
          </button>
          <button className="flex items-center gap-2 hover:text-green-500 transition-colors group cursor-pointer">
            <svg
              className="w-5 h-5 group-hover:fill-green-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
            <span className="font-medium">5.8K</span>
          </button>
        </div>
      </motion.div>

      {/* Post 3 (Slides in from the TOP, longest delay) */}
      <motion.div
        initial={{ opacity: 0, y: -100, rotate: -15 }}
        animate={{ opacity: 1, y: 0, x: -8, rotate: -1 }} // x: -8 replaces -translate-x-2
        whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
        className="relative z-30 w-full max-w-xl border border-white/40 p-5 rounded-2xl shadow-2xl flex flex-col gap-4 bg-white/95 backdrop-blur-md -mt-20 cursor-default"
      >
        {/* User Profile Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
            WH
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2 justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-gray-900 hover:underline cursor-pointer">
                  Walter Hart
                </span>
                <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Beginner
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold">
                <svg
                  className="w-3.5 h-3.5 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="bg-linear-to-r from-yellow-700 to-amber-600 bg-clip-text text-transparent">
                  2.8K Pages
                </span>
              </span>
            </div>
            <span className="text-xs text-gray-500 cursor-pointer hover:underline">
              @walterhartofficial
            </span>
          </div>
        </div>

        {/* Original Post Content */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg text-gray-900">
            Just hit 5,000 words today!
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The coffee is flowing and the keyboard is on fire. Might actually
            finish this draft by the end of the month.
          </p>
        </div>

        {/* Action Stats / Buttons */}
        <div className="flex items-center justify-between text-gray-500 text-sm mt-1 border-y border-gray-200/60 py-2 px-2">
          <button className="flex items-center gap-2 hover:text-red-500 transition-colors group cursor-pointer">
            <svg
              className="w-5 h-5 group-hover:fill-red-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span className="font-medium">45.2K</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-500 transition-colors group cursor-pointer">
            <svg
              className="w-5 h-5 group-hover:fill-blue-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span className="font-medium">890</span>
          </button>
          <button className="flex items-center gap-2 hover:text-green-500 transition-colors group cursor-pointer">
            <svg
              className="w-5 h-5 group-hover:fill-green-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
            <span className="font-medium">18.4K</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default DummyPosts;
