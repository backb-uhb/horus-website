import LinkedinLogo2 from "@/components/svg/LinkedinLogo2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props={
author:string | undefined
 author_description:string  | undefined
 linked_in: string  | null | undefined
}


const AuthorDetails = ({author,author_description}:Props) => {
  return (
 <>
      <div className="md:flex ~gap-[0.75rem]/[1.5rem] pt-[4.125rem] hidden ">
        <div className="~size-[3.375rem]/[5.625rem] relative shrink-0">
          <Image
            src={"/images/author.png"}
            alt="img"
            fill
            className="object-cover object-top rounded-full "
          />
        </div>
        <div>
          <div className="flex gap-[0.75rem] items-center ">
            <h4 className="font-satoshi font-bold ~text-[0.75rem]/[0.8625rem] leading-[1.25rem] text-[#fff] ">
         {author}
            </h4>
            <div className="bg-[#F6F7F8] p-[0.25rem] flex items-center justify-center rounded-[0.375rem] size-[1.5rem]">
              <LinkedinLogo2  className="size-[1rem]"/>
            </div>
          </div>
          <p className="font-satoshi ~text-[0.75rem]/[1rem] leading-[120%] text-[#fff]  ">
           {author_description}
          </p>
        </div>
      </div>
      <div className="flex flex-col ~gap-[0.75rem]/[1.5rem] ~pt-[2rem]/[4.125rem] md:hidden">
      <div className="flex max-md:items-center ~gap-[0.625rem]/[1rem]">
        <div className="~size-[3.375rem]/[5.625rem] relative shrink-0">
          <Image
            src={"/images/author.png"}
            alt="img"
            fill
            className="object-cover object-right rounded-full "
          />
        </div>
        <div className="flex gap-[0.75rem] items-center ">
          <h4 className="font-satoshi font-bold ~text-[0.875rem]/[0.8625rem] leading-[120%] text-[#fff] ">
          {author}
          </h4>
          <Link href={"/"} className="bg-[#F6F7F8] p-[0.25rem] flex items-center justify-center rounded-[0.375rem] size-[1.5rem]">
            <LinkedinLogo2 className="size-[1rem]" />
          </Link>
        </div>
      </div>
      <p className="font-satoshi ~text-[0.75rem]/[1rem] leading-[120%] text-[#fff]  ">
{author_description}
      </p>
    </div>
 </>
  );
};

export default AuthorDetails;
