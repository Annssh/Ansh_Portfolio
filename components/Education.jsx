const Education = () => {
  return (
    <section className="pt-4 pb-12 md:pt-2 md:pb-0">
      <div className="container mx-auto flex flex-col gap-[30px]">
        <h1 className="text-3xl font-semibold">
          Education<span className="text-[#f79500]">.</span>
        </h1>
        <div className="flex flex-col gap-10 ">
          <div className=" text-lg md:text-2xl space-y-2">
            <div className="flex gap-11 items-center justify-between">
              <p className="font-extrabold text-xl md:text-3xl hover:text-[#f79500] transition-all duration-500">
                Madhav Institute of Technology and Science
              </p>{" "}
              <p className=" text-sm md:text-xl">2021 - 2025</p>
            </div>
            <div>Bachelor of Technology, Information Technology</div>
            <div>CGPA - 8.33</div>
          </div>
          <div className=" text-lg md:text-2xl flex items-center justify-between">
            <div className="flex gap-11 items-center font-bold hover:text-[#f79500] transition-all duration-500">
              Intermediate (Class XII) Percentage – 86.2%
            </div>
            <p className=" text-sm md:text-xl">2021</p>
          </div>
          <div className=" text-lg md:text-2xl flex items-center justify-between">
            <div className="flex gap-11 items-center font-bold hover:text-[#f79500] transition-all duration-500">
              Matriculate (Class X) Percentage – 83%
            </div>
            <p className=" text-sm md:text-xl">2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
