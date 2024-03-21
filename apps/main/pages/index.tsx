import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Main.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>
          Welcome to Main Page!
        </h2>
        <Link href="/sub">
          Link to sub
        </Link>
      </main>
    </>
  );
}
