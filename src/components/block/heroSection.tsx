import Image from "next/image";
import IntroImage from "@/assets/intro.png";

export default function HeroSection() {
  return (
    <div>
      <div className="py-10">
        <Image
          src={IntroImage}
          alt="Примеры работ Даны"
          width={1440}
          height={590}
          quality={90}
          priority={true}
        />
      </div>
      <div className="mx-auto px-4 flex flex-col py-10 gap-11 w-full">
        <div className="flex justify-start ">
          <h1 className="text-7xl font-bold mb-4 leading-tight">
            Встречают по одежке,
            <br /> провожают по уму
          </h1>
        </div>

        <div className="flex justify-end">
          <h2 className="text-2xl">
            В мире, где первое впечатление решает все, дизайн становится <br />
            вашим главным союзником. Это не просто картинки или цвета
            <br /> — это идентичность, которая отличает вас от тысяч других. 
          </h2>
        </div>
      </div>
    </div>
  );
}
