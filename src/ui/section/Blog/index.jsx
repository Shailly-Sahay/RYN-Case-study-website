import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { Link } from "react-router-dom";
import { blogPosts } from "../../../data/data";
import Button from "../../components/Button";
import Tag from "../../components/Tag";

const Blog = () => {
  return (
    <section className="section-pd">
      <div className="flex justify-between">
        <SectionHeader text="Blog" />
        <Link to="#" className="underline">
          view all
        </Link>
      </div>

      <div className="flex flex-col">
        {blogPosts.map((blogPost) => (
          <div className="flex justify-between">
            <div className="flex">
              <div className="w-[40%]">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <p>{blogPost.date}</p>
                <h3>{blogPost.title}</h3>
                <Tag tags={blogPost.tags} />
              </div>
            </div>
            <Button text="Read" variant="secondary" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
