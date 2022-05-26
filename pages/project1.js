import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

import backgroundProject1Page from "../assets/project-page-1/background-project-1.png";
import illustration1ImgProject1 from "../assets/project-page-1/illustration-1-project-1.png";
import illustration2ImgProject1 from "../assets/project-page-1/illustration-2-project-1.png";
import Project1BtnImgContainer from "@/components/Project1BtnImgContainer";
// import HomeBtnImgContainer from "@/components/HomeBtnImgContainer";

export default function ProjectPage1() {
  const router = useRouter();

  return (
    <Layout>
      <Image
        src={backgroundProject1Page}
        alt='backgroundProject1Page'
        width={1000}
        height={455}
        layout='responsive'
      />

      <div className={styles.illustration2ImgProject1}>
        <Image
          src={illustration2ImgProject1}
          alt='illustration2ImgProject1'
          layout='fill'
        />
      </div>

      <div className={styles.illustration1ImgProject1}>
        <Image
          src={illustration1ImgProject1}
          alt='illustration1ImgProject1'
          layout='fill'
        />
      </div>

      <Project1BtnImgContainer />
    </Layout>
  );
}
