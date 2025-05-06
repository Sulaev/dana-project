import BlogPlaceHolder from "@/assets/blogPlaceHolder.png";
import Image from "next/image";
import Link from "next/link";
import BigArrow from "@/assets/bigArrow.svg";

const BlogList = [
  {
    title: "Почему дешевый дизайн обходится дороже?",
    description:
      "Популярные кейсы, где отчаянные попытки сэкономить привели к потере клиентов или репутации.",
    publishDate: "20.01.2020",
    baner: BlogPlaceHolder,
    link: "/",
    category: "about-project",
  },
  {
    title: "Почему дешевый дизайн обходится дешевле?",
    description:
      "Популярные кейсы, где отчаянные попытки сэкономить привели к потере клиентов или репутации.",
    publishDate: "20.01.2020",
    baner: BlogPlaceHolder,
    link: "/",
    category: "Wiki-disign",
  },
];

export default function BlogSection() {
  return (
    <div className="flex flex-col w-full py-28 gap-16">
      <div>
        <h1 className="text-7xl font-medium">Блог</h1>
      </div>
      <div className="flex gap-5">
        {BlogList.map((blog) => (
          <Link
            href={blog.link}
            key={blog.title}
            className="flex flex-col max-w-[420px] gap-5"
          >
            <Image
              src={blog.baner}
              alt={`${blog.title} - ${blog.description}`}
              width={420}
              height={315}
              quality={90}
              priority={true}
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-medium">{blog.title}</h1>
              <h2 className="text-sm opacity-60">{blog.description}</h2>
              <h3 className="text-xs opacity-60">{blog.publishDate}</h3>
            </div>
          </Link>
        ))}
        <div className="bg-accent w-[420px] h-[315px] p-4 rounded flex items-center justify-center">
          <BigArrow />
        </div>
      </div>
    </div>
  );
}
