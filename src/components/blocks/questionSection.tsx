import PlusSign from "@/assets/plusSign-icon.svg";
import Link from "next/link";

const questionList = [
  {
    title: "Как формируется стоимость услуг?",
    link: "/",
  },
  {
    title: "Сколько времени займет разработка дизайна?",
    link: "/",
  },
  {
    title: "А если результат мне не понравится?",
    link: "/",
  },
  {
    title: "Какие этапы включает работа?",
    link: "/",
  },
  {
    title: "Сколько правок можно внести?",
    link: "/",
  },
  {
    title: "Вы работаете официально?",
    link: "/",
  },
];

export default function QuestionSection() {
  return (
    <div className="flex flex-col w-full gap-20 py-20">
      <div>
        <h1 className="text-7xl">Вопросы</h1>
      </div>
      <div className="flex flex-col flex-wrap gap-3.5 max-h-[304px]">
        {questionList.map((question) => {
          return (
            <Link
              href={question.link}
              key={question.title}
              className="flex bg-accent w-2xl h-22 justify-between items-center p-8"
            >
              <div className="text-xl font-medium">{question.title}</div>
              <PlusSign />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
