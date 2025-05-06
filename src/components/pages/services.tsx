import ServicesSection from "../blocks/servicesSection";

export default function Services() {
  return (
    <>
      <div className="flex flex-col w-full gap-14 py-10">
        <p className="opacity-60">Главная / Услуги</p>
        <h1 className="text-4xl font-medium max-w-[824px]">
          Мы создаём единое смысловое поле вокруг бренда. Не угадываем, а
          проектируем опыт взаимодействия с компанией и знаем как
        </h1>
      </div>
      <ServicesSection />
    </>
  );
}
