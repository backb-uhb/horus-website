"use client";
import { Ttestimonials } from "@/api/type";
import ButtonBrown from "@/components/svg/ButtonBrown";
import { Marquee } from "@/components/ui/Marquee";
import { StorageUrl } from "@/utils/BaseUrl";
import Image from "next/image";

const ReviewCard = ({
  image,
  name,
  testimonial,
  ratings,
}: {
  image: string;
  name: string;
  testimonial: string;
  ratings: string;
}) => {
  const rating = Math.round(Number(ratings));
  return (
    <div className="relative  p-[1px] bg-gradient-to-br w-fit rounded-[1rem] from-[#333333] h-full to-[#111111] ">
      <div className="~max-w-[15.75rem]/[31.3953495026rem] ~p-[0.75rem]/[1.5rem]   rounded-[1rem] bg-gradient-to-t from-[#1a1a19] to-[#201f1c]">
        <div className="flex items-center ~gap-[0.625rem]/[1rem]">
          <div className="relative ~size-[1.3722555637rem]/[2.8779070377rem] overflow-hidden rounded-full">
            <Image
              src={StorageUrl + image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-[#F4F0FF] font-medium md:font-bold leading-[120%] ~text-[0.49875rem]/[1.04625rem]">
              {name}
            </h3>
            <p className="text-[#FFD38D] pt-1 leading-[120%] text-start ~text-[0.436875rem]/[0.915625rem]">
              {"★".repeat(rating) + "☆".repeat(5 - rating)}
            </p>
          </div>
        </div>
        <p className="~text-[0.75rem]/[1.04625rem] text-white ~pt-[0.8125rem]/[1.5rem] text-start md:font-bold leading-[120%]">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

type Props = {
  testimonials: Ttestimonials[];
};
const Testimonials = ({ testimonials }: Props) => {
  console.log("testimonials", testimonials);
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);
  return (
    <section>
      <div className=" mx-auto text-center bg-black relative z-[100] ~pt-[0]/[2.375rem]">
        <div className=" px-[47.57px]">
          <ButtonBrown content="Real stories. Real growth" />
          <div className="font-merriweather text-[#FFFFFF] md:font-bold font-normal ~text-[1.375rem]/[3.5rem] leading-[120%] tracking-[-0.07rem] text-center ~pt-[0.625rem]/[1.5rem]">
            {" "}
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
              {" "}
              Thousands.{" "}
            </span>{" "}
          </div>{" "}
          <div className="font-merriweather text-[#FFFFFF] md:font-bold font-normal ~text-[1.375rem]/[3.5rem] leading-[120%] tracking-[-0.07rem] text-center">
            {" "}
            Proven in the{" "}
            <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
              {" "}
              Markets.{" "}
            </span>{" "}
          </div>{" "}
          <p className="font-inter font-normal md:font-bold ~text-[0.75rem]/[1rem] leading-[1.5rem] tracking-[0%] text-center text-[#FFFFFF] ~mt-[0.625rem]/[1.5rem] ">
            {" "}
            See why top performers rely on us.{" "}
          </p>
        </div>
        <div className="~pt-[2.5rem]/[3rem]">
          <Marquee className="[--duration:50s]">
            {firstRow.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:50s]">
            {secondRow.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
