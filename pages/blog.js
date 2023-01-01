import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Link href={"/blogposts/learn-javascript"}>
            <h2>How to learn JavaScript in 2022?</h2>
          </Link>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h2 className={styles.blogName}>How to learn JavaScript in 2022?</h2>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h2 className={styles.blogName}>How to learn JavaScript in 2022?</h2>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
