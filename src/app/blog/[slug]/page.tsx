import React from 'react'
import HeroSection from './_components/HeroSection'
import BlogDetails from './_components/BlogDetails'
import OtherBlogs from './_components/OtherBlogs'
import { TBlogs } from '@/api/type';
import { frontendApi } from '@/api/api';

export const dynamic = "force-dynamic";

const getBlogsInnerPage = async (
  slug: string
): Promise<TBlogs | null> => {
  const response = await frontendApi.getBlogsInner(slug);
  return response;
};


const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const response = await getBlogsInnerPage (slug)
  return (

    <div className=' '>
        <HeroSection title={response?.title} image={response?.image} author={response?.author} minutesOfReading={response?.min_of_reading} date={response?.date}/>
        <BlogDetails author={response?.author} description={response?.description} author_description={response?.author_description} linked_in={response?.linked_in}/>
        <OtherBlogs otherBlogs = {response?.other_popular_blogs ?? []}/>
    </div>
  )
}

export default page