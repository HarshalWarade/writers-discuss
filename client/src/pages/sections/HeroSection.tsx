import { toast } from "react-toastify";
import { COMMON_SPAN_CLASS } from "../../constants";
import { Maximize } from "lucide-react";

const HeroSection = () => {
  const handleMaximizeCard = () => {
    toast.success("Feature will be added soon...");
  };

  return (
    <section className="h-full flex items-center">
      <div className="w-full grid md:grid-cols-2 gap-15 items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            <span className={COMMON_SPAN_CLASS}>Everything</span> a{" "}
            <span className={COMMON_SPAN_CLASS}>Writer</span> needs in one
            place.
          </h2>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem cum
            fuga, est aliquid corporis possimus aut recusandae nobis repellendus
            natus!
          </p>
        </div>

        <div className="relative flex justify-center rounded-lg">
          <div
            className="absolute -top-6 right-10 bg-red-label text-white px-4 py-2 rounded-full text-sm shadow-lg"
            style={{
              boxShadow: "0 0 100px 40px #ff040428, 0 0 10px #ff040428",
            }}
          >
            Live Editor
          </div>

          <div className="w-full bg-mist-extra rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-mist px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full cursor-pointer" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer" />
              <div className="w-3 h-3 bg-green-400 rounded-full cursor-pointer" />
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-12">
                <h3 className="text-lg font-semibold text-text font-mono col-span-11">
                  How can you create tension without conflict?
                </h3>
                <button
                  className="col-span-1 flex items-center justify-end cursor-pointer hover:text-red-label"
                  onClick={handleMaximizeCard}
                >
                  <Maximize size={16} />
                </button>
              </div>

              <p className="text-sm text-text-supporting text-justify">
                Conflict means two forces opposing each other. Tension means the
                reader doesn't know what's coming — or knows exactly what's
                coming and is dreading it...
              </p>

              <div className="bg-red-label/10 rounded-lg p-4 w-full">
                <p className="text-sm font-medium text-red-label">
                  Draft saved • 2 mins ago
                </p>
              </div>

              <div className="flex justify-between text-xs text-gray-400 pt-4 border-t">
                <span>1,245 words</span>
                <div className="flex gap-2 items-center">
                  <span>8 mins read</span>
                  <span>10 mins ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
