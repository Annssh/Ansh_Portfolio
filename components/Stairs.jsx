import { animate, motion } from "framer-motion";

//variants
const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 1;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(1)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-gray-400 relative"
          >
            <div className="border-b-8 border-[#f79500] w-full"></div>

            {/* <img src="/myimg.jpg"/> */}
          </motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
