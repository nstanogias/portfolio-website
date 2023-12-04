"use client";

import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { type TProject } from "@/lib/types";
import { fadeInUp, stagger } from "@/lib/animations";

type ProjectCardProps = {
  project: TProject;
  showDetail: null | Number;
  setShowDetail: (id: Number | null) => void;
};

export default function ProjectCard({
  project: {
    name,
    image_path,
    deployed_url,
    github_url,
    description,
    key_techs,
    id,
  },
  setShowDetail,
  showDetail,
}: ProjectCardProps) {
  return (
    <>
      <Image
        width="300"
        height="150"
        src={image_path}
        alt={name}
        onClick={() => setShowDetail(id)}
        className="cursor-pointer w-full h-40"
        quality={10}
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 dark:bg-[#1D2432] dark:text-gray-100 md:grid-cols-2 gap-x-12 ">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <Image
              src={image_path}
              alt={name}
              className="overflow-hidden"
              width={300}
              height={150}
              priority
            />
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
              {github_url && (
                <a
                  href={github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-[#29303D] "
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
              )}
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-[#29303D]"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl "
            >
              {name}
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="my-3 text-base font-medium"
            >
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((value, i) => (
                <span
                  key={i}
                  className="p-1 px-2 my-1 bg-gray-300 rounded-sm dark:bg-[#29303D]"
                >
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-[#29303D]"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </>
  );
}
