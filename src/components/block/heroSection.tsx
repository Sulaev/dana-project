import Image from "next/image";
import IntroImage from "@/assets/intro.png";

export default function HeroSection() {
  return (
    <div>
      <div>
        <Image
          src={IntroImage} // Путь к изображению в папке `public`
          alt="Описание картинки"
          width={1440} // Оригинальная ширина
          height={590} // Оригинальная высота
          quality={90} // Качество (1-100), 75 по умолчанию
          priority={true}
        />
      </div>
      <div>Hero text</div>
    </div>
  );
}
