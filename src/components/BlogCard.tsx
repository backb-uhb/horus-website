import { StorageUrl } from "@/utils/BaseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  minutesOfReading: string;
  title: string;
  description: string;
  author: string;
  date: string;
  slug:string
};

const BlogCard = ({
  image,
  minutesOfReading,
  title,
  description,
  author,
  date,
  slug
}: Props) => {
  return (
    <Link href={`/blog/${slug}`}>
 <div className="flex flex-col justify-between ~min-h-[19.4375rem]/[32.6875rem]">
          <div className=" w-full ~h-[9.8125rem]/[17.9375rem] relative">
            <Image
              src={StorageUrl+image}
              alt="img"
              fill
              className="object-cover ~rounded-[0.5938rem]/[1rem]"
            />
          </div>
          <p className="font-inter ~text-[0.625rem]/[0.875rem] leading-[1.25rem] text-[#ffffff] pt-[2.12rem] ~pb-[0rem]/[1rem] lg:pl-[0.75rem]">
            {minutesOfReading} min read
          </p>
          <h3 className="font-satoshi font-bold min-h-[3.5ch]  ~text-[1rem]/[1.3625rem] lg:leading-[1.75rem] leading-[120%] line-clamp-2   text-[#fff]">
            {title}
          </h3>
          <p className="font-satoshi ~text-[0.625rem]/[1rem] leading-[140%] text-[#ffffff] pt-[0.5rem] line-clamp-3 ">
            {description}
          </p>
          <div className="text-[#ffffff] ~text-[0.625rem]/[0.875rem] ~leading-[0.7431rem]/[1.25rem] font-satoshi flex gap-[0.75rem] ~pt-[0.725rem]/[1rem]">
            <p>{author}</p>
            <p>{date}</p>
          </div>
 </div>
    </Link>
  );
};

export default BlogCard;
