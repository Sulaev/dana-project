import Link from "next/link";
import BehanceIcon from "@/assets/behance-Icon.svg";
import InstagramIcon from "@/assets/instagram-Icon.svg";
import TelegramIcon from "@/assets/telegram-Icon.svg";
import MailIcon from "@/assets/mail-Icon.svg";
import SubstractIcon from "@/assets/subtract-Icon.svg";

export default function Footer() {
  return (
    <div className="flex justify-between w-full h-40 items-center p-7 bg-secondary">
      <div className="text-7xl py-7">Перейдем на “мы”? ;)</div>
      <div className="flex text-xs gap-12 self-start opacity-40">
        <div>
          <Link href={"/"}>
            <div className="py-1.5">Обо мне</div>
          </Link>
          <Link href={"/"}>
            <div className="py-1.5">Проекты</div>
          </Link>
          <Link href={"/"}>
            <div className="py-1.5">Услуги</div>
          </Link>
          <Link href={"/"}>
            <div className="py-1.5">Блог</div>
          </Link>
          <Link href={"/"}>
            <div className="py-1.5">Контакты</div>
          </Link>
        </div>
        <div>
          <Link href={"/"}>
            <div className="py-1.5">Фирменный стиль</div>
          </Link>
          <Link href={"/"}>
            <div className="py-1.5">Нейминг</div>
          </Link>
          <Link href={"/"}>
            <div className="py-1.5">Логотип</div>
          </Link>
          <Link href={"/"}>
            <div className="py-1.5">Полиграфия</div>
          </Link>
        </div>
      </div>
      <div className="flex gap-1.5">
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
