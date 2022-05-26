import Head from "next/head";
import styles from "@/styles/Layout.module.css";

export default function Layout({
  title = "test",
  keywords = "test",
  description = "test",
  children,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.bgImagePage}>{children}</div>
        </main>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Solomon World",
  description: "Welcome to Solomns world",
  keywords: "music, solomon",
};
