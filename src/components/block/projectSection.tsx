import PlaceHolder from "@/assets/placeholder.png";
import BigArrow from "@/assets/bigArrow.svg";
import Image from "next/image";
import Link from "next/link";

const ProjectList = [
  {
    title: "Miaria",
    description: "Креативное агенство в Италии",
    baner: PlaceHolder,
    link: "/",
  },
  {
    title: "Ikigai",
    description: "Креативное агенство в Италии",
    baner: PlaceHolder,
    link: "/",
  },
  {
    title: "Caza",
    description: "Креативное агенство в Италии",
    baner: PlaceHolder,
    link: "/",
  },
  {
    title: "Miko",
    description: "Креативное агенство в Италии",
    baner: PlaceHolder,
    link: "/",
  },
  {
    title: "VsemStretching",
    description: "Креативное агенство в Италии",
    baner: PlaceHolder,
    link: "/",
  },
];

export default function ProjecctSection() {
  return (
    <div className="py-10 flex flex-col gap-16">
      <div className="text-7xl font-medium">Проекты</div>
      <div className="flex flex-wrap w-full gap-14">
        {ProjectList.map((project) => (
          <Link href={project.link} key={project.title}>
            <Image
              src={project.baner}
              alt={`${project.title} - ${project.description}`}
              width={620}
              height={465}
              quality={90}
              priority={true}
            />
            <div className="flex justify-between text-2xl">
              <h1 className="font-bold underline decoration-1 underline-offset-4 decoration-black">
                {project.title}
              </h1>
              <h2>{project.description}</h2>
            </div>
          </Link>
        ))}
        <div className="bg-accent w-[620px] h-[465px] p-4 rounded flex items-center justify-center">
          <BigArrow />
        </div>
      </div>
    </div>
  );
}
