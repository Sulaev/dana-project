import Link from "next/link";
import BehanceIcon from "@/assets/behance-Icon.svg";
import InstagramIcon from "@/assets/instagram-Icon.svg";
import TelegramIcon from "@/assets/telegram-Icon.svg";
import MailIcon from "@/assets/mail-Icon.svg";
import SubstractIcon from "@/assets/subtract-Icon.svg";

const NavigationLink = [
  {
    tittle: "Обо мне",
    link: "/",
  },
  {
    tittle: "Проекты",
    link: "/",
  },
  {
    tittle: "Услуги",
    link: "/",
  },
  {
    tittle: "Блог",
    link: "/",
  },
  {
    tittle: "Контакты",
    link: "/",
  },
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

export default function Footer() {
  return (
    <div className="flex justify-between w-full h-40 items-center p-7 bg-secondary">
      <div className="flex self-start text-7xl">Перейдем на “мы”? ;)</div>
      <div className="flex text-xs gap-12 self-start opacity-40">
        <div className=" grid grid-cols-2 gap-1.5">
          {NavigationLink.map((tag) => {
            return (
              <Link href={tag.link} key={tag.tittle}>
                <div>{tag.tittle}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex gap-1.5 self-start">
        <Link href={"/"}>
          <BehanceIcon />
        </Link>
        <Link href={"/"}>
          <TelegramIcon />
        </Link>
        <Link href={"/"}>
          <SubstractIcon />
        </Link>
        <Link href={"/"}>
          <InstagramIcon />
        </Link>
        <Link href={"/"}>
          <MailIcon />
        </Link>
      </div>
    </div>
  );
}
