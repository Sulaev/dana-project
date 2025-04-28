import Link from "next/link";
import BehanceIcon from "@/assets/behance-Icon.svg";
import InstagramIcon from "@/assets/instagram-Icon.svg";
import TelegramIcon from "@/assets/telegram-Icon.svg";
import MailIcon from "@/assets/mail-Icon.svg";
import SubstractIcon from "@/assets/subtract-Icon.svg";

export default function Footer() {
  return (
    <div className="flex justify-between w-full h-40 items-center p-7 bg-secondary">
      <div className="flex self-start text-7xl">Перейдем на “мы”? ;)</div>
      <div className="flex text-xs gap-12 self-start opacity-40">
        <div className="flex flex-col gap-1.5">
          <Link href={"/"}>
            <div>Обо мне</div>
          </Link>
          <Link href={"/"}>
            <div>Проекты</div>
          </Link>
          <Link href={"/"}>
            <div>Услуги</div>
          </Link>
          <Link href={"/"}>
            <div>Блог</div>
          </Link>
          <Link href={"/"}>
            <div>Контакты</div>
          </Link>
        </div>
        <div className="flex flex-col gap-1.5">
          <Link href={"/"}>
            <div>Фирменный стиль</div>
          </Link>
          <Link href={"/"}>
            <div>Нейминг</div>
          </Link>
          <Link href={"/"}>
            <div>Логотип</div>
          </Link>
          <Link href={"/"}>
            <div>Полиграфия</div>
          </Link>
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
