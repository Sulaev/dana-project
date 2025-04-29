import Link from "next/link";
import Arrow from "@/assets/arrow.svg";

const ServicesList = [
  {
    tittle: "Фирменный стиль",
    link: "/",
  },
  {
    tittle: "Нейминг",
    link: "/",
  },
  {
    tittle: "Логотип",
    link: "/",
  },
  {
    tittle: "Полиграфия",
    link: "/",
  },
];

export default function ServicesSection() {
  return (
    <div className="flex flex-col gap-16 w-full px-4 py-20">
      <div className="flex justify-start">
        <h1 className="text-7xl">Услуги</h1>
      </div>
      <div className="flex flex-col gap-14">
        {ServicesList.map((tag) => {
          return (
            <Link href={tag.link} key={tag.tittle}>
              <div className="text-4xl border-b border-accent pb-7 flex justify-between items-center">
                {tag.tittle}
                <Arrow />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
