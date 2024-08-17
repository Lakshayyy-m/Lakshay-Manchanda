import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/projects";
import { ArrowLeftSquareIcon } from "lucide-react";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <main className="h-svh overflow-y-scroll snap-y snap-mandatory items-center justify-center">
      <div className="w-full h-svh flex justify-center items-center snap-start">
        <h1 className=" md:text-5xl max-md:text-4xl font-bold">Projects.</h1>
      </div>
      {projects.map((project) => (
        <section className="h-svh w-full snap-start" key={project.title}>
          <ProjectCard
            title={project.title}
            images={project.images}
            description={project.description}
            link={project.link}
            skills={project.skills}
          />
        </section>
      ))}
      <section className="h-svh w-full snap-start flex flex-col gap-5 justify-center items-center">
        <h1 className="md:text-5xl max-md:text-3xl font-bold text-center px-3">
          Well this is not everything I have created.
        </h1>
        <p className="text-center leading-loose px-3">
          There are a lot of projects which I do not post, upload, host or
          share. I&apos;m sure a lot of developers do it.
          <br /> These are only the ones I&apos;d like to share.
          <br />I learn a lot of things each day, I don&apos;t post it all
          <br />
          You can head back home if you wanna know more
        </p>
        <Link
          href="/"
          replace
          className="gap-5 hover:bg-white hover:text-black py-6 px-4 rounded-xl transition-colors w-[100px] flex justify-center items-center"
        >
          <ArrowLeftSquareIcon />
        </Link>
      </section>
    </main>
  );
};

export default ProjectsPage;
