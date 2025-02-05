import "server-only";

import Image from "next/image";
import styles from "./page.module.css";

// import { cache } from "react";
import { after } from "next/server";
import { revalidateTag } from "next/cache";

const fetchResultFabric = async (URL: string) => {
  return fetch(URL, {
    method: "GET",
    // cache: 'force-cache',
    next: {
      revalidate: 0.0000001,
      // tags: ['all']
    },
    // headers: {},
    // cache: "reload",
    // cache:'force-cache',
    // next: {
    //   revalidate: 1,
    // },
  });
}

async function fetchTopFive() {
  const URL = `https://api.restful-api.dev/objects`;
  try {


    const fetchResult = fetchResultFabric(URL);
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
    } else {
    }
  } catch (e) {}
}
export default async function Home() {
  // unstable_after(() => {
  //   revalidateTag('all')
  // })
  await fetchTopFive();
  await fetchTopFive();
  await fetchTopFive();
  await fetchTopFive();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

export const dynamic = "force-dynamic";
