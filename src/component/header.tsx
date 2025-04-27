import { ROUTES } from "@/config/routes";
import Logo from "@/assets/logo.svg";
import LogoText from "@/assets/logoText.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between w-full h-20">
      <Link href={ROUTES.home}>
        <div className="flex gap-3 items-center p-7">
          <Logo />
          <LogoText />
        </div>
      </Link>
      <div className="flex justify-between items-center gap-2">
        <div className="px-2.5">Обо мне</div>
        <div className="px-2.5">Проекты</div>
        <div className="px-2.5">Услуги</div>
        <div className="px-2.5">Блог</div>
        <div className="px-2.5">Контакты</div>
      </div>
    </header>
  );
}
