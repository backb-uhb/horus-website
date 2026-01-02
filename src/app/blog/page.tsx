import React from 'react'
import HeroSection from './_components/HeroSection'
import RecentBlogs from './_components/RecentBlogs'
import EnrollSection from './_components/EnrollSection'
import AllBlogs from './_components/AllBlogs'
import { frontendApi } from '@/api/api'
import { TAllBlog } from '@/api/type'


export const dynamic = "force-dynamic";

const getBlogsPage = async (): Promise<TAllBlog | null > => {
  return await frontendApi.getBlogs();
};

const page = async () => {
const response = await getBlogsPage()
  return (


    <div className=' '>
        <HeroSection />
        <RecentBlogs blogs = {response?.recent_blogs ?? []} />
        <EnrollSection/>
        <AllBlogs blogs = {response?.all_blogs ??[]} />
    </div>
  )
}

export default page