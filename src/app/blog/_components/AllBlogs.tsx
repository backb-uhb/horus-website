"use client"
import React, { useState } from "react";
import BlogCard from "@/components/BlogCard";
import ArrowSvg from "@/components/svg/ArrowSvg";
import { TBlogs } from "@/api/type";

type Props = {
  blogs : TBlogs[
  ]
}

const AllBlogs = ({blogs} : Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);
  
  const scrollToTop = () => {
    setTimeout(() => {
      const element = document.getElementById('all-blogs-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
  };
  };

  return (
    <div className=" ~px-[1.3125rem]/[6.25rem]  max-w-[1440px] mx-auto  " id="all-blogs-section">
      <h3 className="text-transparent bg-gradient-to-r from-[#DFAB60] to-[#613D09] bg-clip-text  ~text-[1.25rem]/[2.25rem] font-merriweather font-medium leading-[120%] tracking-[-0.01em]">
        All Blogs
      </h3>
      
      <div className="">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-[1.5rem] py-[2.5rem] ~gap-y-[1.25rem]/[2.6875rem]">
          {currentItems.map((item, i) => (
            <div key={i}>
              <BlogCard
                image={item.image}
                minutesOfReading={item.min_of_reading}
                title={item.title}
                description={item.short_description}
                author={item.author}
                date={item.date}
                slug={item.slug}

              />
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`rounded-[1.5rem] bg-[#DFAB60] ~size-[1.375rem]/[3rem] flex items-center justify-center transition-opacity ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ' cursor-pointer'
            }`}
            aria-label="Previous page"
          >
            <ArrowSvg className="text-[#fff] ~w-[0.1781rem]/[0.3856rem] ~h-[0.2881rem]/[0.625rem] rotate-180" />
          </button>
          
          <div className="~px-[1.25rem]/[3.875rem] text-[0.875rem] leading-[1.25rem] font-montserrat flex">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`min-w-[2rem] h-8 px-2 flex items-center justify-center transition-colors ${
                  currentPage === page
                    ? 'text-[#fff] font-semibold'
                    : 'text-[#B9B9B9] '
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`rounded-[1.5rem] bg-[#DFAB60] ~size-[1.375rem]/[3rem] flex items-center justify-center transition-opacity ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ' cursor-pointer'
            }`}
            aria-label="Next page"
          >
            <ArrowSvg className="text-[#fff] ~w-[0.1781rem]/[0.3856rem] ~h-[0.2881rem]/[0.625rem]" />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default AllBlogs;