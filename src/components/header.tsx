import { ROUTES } from "@/config/routes";
import Logo from "@/assets/logo.svg";
import LogoText from "@/assets/logoText.svg";
import Link from "next/link";

const Navbar = [
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
    link: ROUTES.services,
  },
  {
    tittle: "Блог",
    link: "/",
  },
  {
    tittle: "Контакты",
    link: "/",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between w-full h-20">
      <Link href={ROUTES.home}>
        <div className="flex gap-3 items-center p-7">
          <Logo />
          <LogoText />
        </div>
      </Link>
      <div className="flex items-center gap-12">
        <div className="flex justify-between items-center gap-2">
          {Navbar.map((tag) => {
            return (
              <Link href={tag.link} key={tag.tittle}>
                <div className="px-2.5">{tag.tittle}</div>
              </Link>
            );
          })}
        </div>
        <div className="p-7">EN</div>
      </div>
    </header>
  );
}
