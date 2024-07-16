"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Year of Experience",
  },
  {
    num: 4,
    text: "Projects completed",
  },
  {
    num: 7,
    text: "Technologies Mastered",
  },
  {
    num: 100,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 md:pt-0 md:pb-0">
      <div className="container mx-auto">
        <di className="flex flex-wrap gap-6 max-w-[80vw] max-auto md:max-w-none mt-6">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center md:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl md:text-5xl font-extrabold text-[#f79500]"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </di>
      </div>
    </section>
  );
};

export default Stats;
