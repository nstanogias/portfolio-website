"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projects as projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Category } from "@/lib/types";
import ProjectNavbar from "./ProjectNavbar";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("All");

  const [showDetail, setShowDetail] = useState<null | Number>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newArray);
    setActive(category);
  };
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 px-4 md:max-w-[53rem]"
    >
      <SectionHeading>My projects</SectionHeading>
      {/* <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div> */}
      <>
        <ProjectNavbar
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
        <div className="relative grid grid-cols-12 gap-4 my-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-[#1D2432] sm:col-span-6 lg:col-span-4"
            >
              <ProjectCard
                project={project}
                key={project.id}
                setShowDetail={setShowDetail}
                showDetail={showDetail}
              />
            </div>
          ))}
        </div>
      </>
    </section>
  );
}
