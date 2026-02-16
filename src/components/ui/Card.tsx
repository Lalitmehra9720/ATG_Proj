// const Card = ({
//   icon,
//   title,
//   description,
// }: {
//   icon: string;
//   title: string;
//   description: string;
// }) => {
//   return (
//     <div className="transform hover:scale-105 w-85 h-90 bg-[#18181c] rounded-3xl p-12 hover:border-indigo-500">
//       <div className="mb-6 flex justify-center">
//         <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center">
//           <img src={icon} alt={title} className="w-8 h-8" />
//         </div>
//       </div>
//       <h3 className="text-xl font-semibold text-white mb-3 text-center">
//         {title}
//       </h3>
//       <p className="text-gray-400 text-sm leading-relaxed text-center">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default Card;


"use client";

import { motion } from "framer-motion";

const Card = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-85 h-90 bg-[#18181c] rounded-3xl p-12 
                 hover:border-indigo-500 
                 transition-transform duration-300 
                 hover:scale-105"
    >
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center">
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 text-center">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed text-center">
        {description}
      </p>
    </motion.div>
  );
};

export default Card;
