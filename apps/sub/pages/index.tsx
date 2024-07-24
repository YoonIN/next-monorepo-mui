import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Main.module.css";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

interface HomeProps {
  message: string;
}

export default function Home({
  message,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App - SUB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Welcome to Sub Page! (basePath: /sub)</h2>
        <p>getStaticProps message: {message}</p>
        <Link href="/my">Link to my page</Link>
      </main>
    </>
  );
}

export const getStaticProps = (async () => {
  return {
    props: {
      message: "Hello from getStaticProps!",
    },
  };
}) satisfies GetStaticProps<HomeProps>;