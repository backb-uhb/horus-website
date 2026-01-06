"use client"
import React, { useMemo, useEffect, useState } from "react";
import Contents from "./Contents";
import AuthorDetails from "./AuthorDetails";

type Props = {
  author: string | undefined
  author_description: string | undefined
  linked_in: string | null | undefined
  description: string | undefined
}

const BlogDetails = ({ author, author_description, linked_in, description }: Props) => {
  const [activeId, setActiveId] = useState<string>("");
  const [processedDescription, setProcessedDescription] = useState<string>("");

  const headings = useMemo(() => {
    if (!description) return [];

    const parser = new DOMParser();
    const doc = parser.parseFromString(description, "text/html");

    return Array.from(doc.querySelectorAll("h3")).map((heading, index) => ({
      id: `section-${index}`,
      text: heading.textContent || "",
    }));
  }, [description]);

  // Process description to add IDs directly to the HTML
  useEffect(() => {
    if (!description) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(description, "text/html");
    const h3Elements = doc.querySelectorAll("h3");

    h3Elements.forEach((heading, index) => {
      heading.id = `section-${index}`;
    });

    setProcessedDescription(doc.body.innerHTML);
    
    if (headings.length > 0) {
      setActiveId(headings[0].id);
    }
  }, [description, headings]);

  // Handle scroll detection
  useEffect(() => {
    if (!processedDescription || headings.length === 0) return;

    const handleScroll = () => {
      const h3Elements = document.querySelectorAll(".new-description h3");
      if (!h3Elements || h3Elements.length === 0) return;

      const scrollY = window.scrollY;
      const offset = 250;
      let newActiveId = headings[0].id;

      h3Elements.forEach((heading, index) => {
        const rect = heading.getBoundingClientRect();
        const headingTop = rect.top + scrollY;

        if (scrollY + offset >= headingTop) {
          newActiveId = `section-${index}`;
        }
      });

      setActiveId(newActiveId);
    };

    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", scrollListener);
    };
  }, [processedDescription, headings]);

  return (
    <div className="flex md:flex-row flex-col ~gap-[0.5rem]/[2rem] relative ~px-[1.325rem]/[6.25rem] ~pt-[2rem]/[3.5rem]">
      <div className="flex-1">
        <div 
          dangerouslySetInnerHTML={{ __html: processedDescription }} 
          className="font-normal new-description font-satoshi ~text-[0.75rem]/[1.25rem] leading-[150%] text-[#fff] ~py-[1rem]/[2.5rem]"
        />

 
        <AuthorDetails author={author} author_description={author_description} linked_in={linked_in} />
      </div>
      <Contents headings={headings} activeId={activeId} />
    </div>
  );
};

export default BlogDetails;