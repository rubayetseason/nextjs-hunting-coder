import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.mainNav}>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <div className={styles.center}>
          <style jsx global>
            {`
              .hunting {
                font-size: 45px;
              }
              .popular {
                font-size: 30px;
              }
            `}
          </style>
          <h1 className="hunting">Hunting Coder</h1>
          <img
            className={styles.pic}
            src="laptop1.jpg"
            width={200}
            height={132}
            alt="hello"
          />
          <p>A website for hunting coders, made by a hunted coder.</p>
        </div>
        <div className="blogs">
          <h2 className="popular">Popular Blogs</h2>
          <br />
          <div className="blogItem">
            <h3>How to learn javascript in 2023?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              maxime!
            </p>
          </div>
          <br />
          <div className="blogItem">
            <h3>How to learn javascript in 2023?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              maxime!
            </p>
          </div>
          <br />
          <div className="blogItem">
            <h3>How to learn javascript in 2023?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              maxime!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
