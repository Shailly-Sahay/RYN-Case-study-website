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
        <Link to="#" className="underline">
          view all
        </Link>
      </div>

      <div className="flex flex-col gap-12">
        {blogPosts.map((blogPost) => (
          <div key={blogPost.id} className="flex justify-between">
            <div className="overflow-hidden relative !p-12  rounded-3xl flex flex-col items-center xl:flex-row gap-24 bg-[var(--color-gray)]/60 ">
              <div className="w-[100%] xl:w-[60%]">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>

              {/* Blog Details */}
              <div className="flex flex-col justify-center">
                <p className="large-font !mb-8">{blogPost.date}</p>
                <h3>{blogPost.title}</h3>
                <Tag tags={blogPost.tags} />
              </div>
              {/* Read Button */}
              <span>
                <Button text="Read" variant="secondary" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
