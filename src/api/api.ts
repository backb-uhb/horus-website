import axiosClient from "./config/axiosClient";
import { TAllBlog, TBlogs } from "./type";

export const frontendApi = {
  getHomeTestimonials: async () => {
    try {
      const response = await axiosClient.get("all-testimonials");

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getCourseTestimonials: async () => {
    try {
      const response = await axiosClient.get("all-courses-testimonials");

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getTechnicalTestimonials: async () => {
    try {
      const response = await axiosClient.get("courses-testimonials/Course1");

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getAdvancedTestimonials: async () => {
    try {
      const response = await axiosClient.get("courses-testimonials/Course2");

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  EnquiryForm: async (formData: object) => {
    try {
      const response = await axiosClient.post("forms/create", formData);

      console.log("resp==",response)
      return response;
    } catch (error) {
      console.log(error);

      return null;
    }
  },
    getBlogs: async ():Promise<TAllBlog | null> => {
    try {
      const response = await axiosClient.get("blogs");

      return response.data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  getBlogsInner: async (slug: string): Promise<TBlogs | null> => {
    try {
      const response = await axiosClient.get(`/blogs/${slug}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

};

