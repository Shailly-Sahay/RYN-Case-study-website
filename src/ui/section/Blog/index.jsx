import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { Link } from "react-router-dom";
import { blogPosts } from "../../../data/data";
import Button from "../../components/Button";
import Tag from "../../components/Tag";

const Blog = () => {
  return (
    <section className="section-pd">
      <div className="flex justify-between items-center">
        <SectionHeader text="Blogs" />
        <div className=" !mb-12">
          <Link to="#" className="underline">
            view all
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-0 lg:gap-4">
        {blogPosts.map((blogPost) => (
          <div key={blogPost.id} className="flex justify-between w-full">
            <div className="overflow-hidden relative !p-12 rounded-3xl flex flex-col lg:flex-row gap-12 items-center w-full">
              <div className="w-full h-[40%] lg:w-[40%] lg:h-[300px] overflow-hidden rounded-3xl">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              <div className="flex w-full lg:w-[60%] flex-col justify-between">
                <div className="flex flex-col gap-2 2xl:gap-4 !mb-6">
                  <p className="large-font !mb-8">{blogPost.date}</p>
                  <h3 className="!font-semibold">{blogPost.title}</h3>
                  <Tag tags={blogPost.tags} />
                </div>
              </div>
              <div className="flex w-full lg:w-auto !items-start lg:items-center">
                <Button text="Read" variant="secondary" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
