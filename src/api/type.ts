export type Ttestimonials = {
  name: string;
  testimonial: string;
  image: string;
  ratings: string;
};
export type TBlogMeta = {
  title: string | null;
  description: string | null;
  keywords: string | null;
};



export type TAllBlog = {
  recent_blogs:TBlogs[]
  all_blogs:TBlogs[]
}
export type TBlogs = {
  
  slug: string;
  title: string;
  description: string; 
  image: string;
  short_description: string;
  author: string;
  author_description: string;
  linked_in: string | null;
  min_of_reading: string;
  date: string;
  meta: TBlogMeta;
  other_popular_blogs: TBlogs[];
};


export type THomeData = {
  testimonials: Ttestimonials[];
};
