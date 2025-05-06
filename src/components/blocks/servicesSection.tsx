import Link from "next/link";
import Arrow from "@/assets/arrow.svg";

const ServicesList = [
  {
    title: "Фирменный стиль",
    link: "/",
  },
  {
    title: "Нейминг",
    link: "/",
  },
  {
    title: "Логотип",
    link: "/",
  },
  {
    title: "Полиграфия",
    link: "/",
  },
];

export default function ServicesSection() {
  return (
    <div className="flex flex-col gap-16 w-full px-4 py-20">
      <div className="flex justify-start">
        <h1 className="text-7xl font-medium">Услуги</h1>
      </div>
      <div className="flex flex-col gap-14">
        {ServicesList.map((tag) => {
          return (
            <Link href={tag.link} key={tag.title}>
              <div className="text-4xl border-b-3 border-accent pb-7 flex justify-between items-center">
                {tag.title}
                <Arrow />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
