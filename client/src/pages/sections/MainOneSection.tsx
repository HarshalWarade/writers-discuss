import { Calendar, Check, Stars, Verified } from "lucide-react";
import { COMMON_SPAN_CLASS } from "../../constants";

const MainOneSection = () => {
  return (
    <div className="h-[80vh] flex flex-col py-8 gap-16">
      <h2 className="text-4xl lg:text-6xl w-full text-center">
        The <span className={COMMON_SPAN_CLASS}>reward</span> system
      </h2>
      <div className="flex flex-1 justify-between w-full">
        <div className="flex-1 flex flex-col justify-center gap-8 px-8">
          <div className="flex justify-start">
            <div className="bg-red-label/10 border flex items-center rounded-lg p-4 border-red-label/30 w-[97%]">
              <div className="shrink-0">
                <div className="bg-red-label/40 text-white p-3 rounded-full w-min">
                  <Stars />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-1 px-4">
                <h2 className="text-xl font-semibold">Some Heading Two</h2>
                <p className="text-text-supporting text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="font-bold text-red-label whitespace-nowrap">
                +500 Pages
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-red-label/10 border flex items-center rounded-lg p-4 border-red-label/30 w-[97%]">
              <div className="shrink-0">
                <div className="bg-red-label/40 text-white p-3 rounded-full w-min">
                  <Calendar />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-1 px-4">
                <h2 className="text-xl font-semibold">Some Heading Two</h2>
                <p className="text-text-supporting text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="font-bold text-red-label whitespace-nowrap">
                Level-10
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-red-label/10 border flex items-center rounded-lg p-4 border-red-label/30 w-[97%]">
              <div className="shrink-0">
                <div className="bg-red-label/40 text-white p-3 rounded-full w-min">
                  <Verified />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-1 px-4">
                <h2 className="text-xl font-semibold">Some Heading Three</h2>
                <p className="text-text-supporting text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="font-bold text-red-label whitespace-nowrap">
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
            <div className="flex items-center rounded-lg gap-4 p-4 border border-red-label/30">
              <span className="bg-red-label/50 p-2 rounded-full">
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
            <div className="flex items-center rounded-lg gap-4 p-4 border border-red-label/30">
              <span className="bg-red-label/50 p-2 rounded-full">
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
            <div className="flex items-center rounded-lg gap-4 p-4 border border-red-label/30">
              <span className="bg-red-label/50 p-2 rounded-full">
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
            <div className="flex items-center rounded-lg gap-4 p-4 border border-red-label/30">
              <span className="bg-red-label/50 p-2 rounded-full">
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
