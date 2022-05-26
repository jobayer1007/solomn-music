import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

import homeBtnImg from "../assets/project-page-1/home-project-1.png";
import menuBtnImg from "../assets/project-page-1/menu-project-1.png";

import titleBtnImg from "../assets/project-page-1/title-project-1.png";
import nextBtnImg from "../assets/project-page-1/next-button-project-1.png";

import textBox1Img from "../assets/project-page-1/text-1-project-1.png";
import textBox2Img from "../assets/project-page-1/text-2-project-1.png";

const Project1BtnImgContainer = ({
  layout = "fill",
  objectFit = "contain",
}) => {
  const router = useRouter();

  return (
    <div>
      {/* Home Button */}
      <div
        className={`${styles.containerBtnImage} ${styles.btnImgHomeLayer1} ${styles.homeBtnImg}`}
      >
        <Image
          src={homeBtnImg}
          alt='homeBtnImg'
          layout={layout}
          objectFit={objectFit}
          onClick={() => router.push("home")}
          style={{ cursor: "pointer" }}
        />
      </div>
      {/* Menu Button */}
      <div
        className={`${styles.containerBtnImage} ${styles.btnImgHomeLayer1} ${styles.menuBtnImg}`}
      >
        <Image
          src={menuBtnImg}
          alt='menuBtnImg'
          layout={layout}
          objectFit={objectFit}
          // onClick={() => router.push("home")}
        />
      </div>

      {/* Introduction Button */}
      <div className={`${styles.containerBtnImage} ${styles.titleBtnImg}`}>
        <Image
          src={titleBtnImg}
          alt='titleBtnImg'
          layout={layout}
          objectFit={objectFit}
        />
      </div>
    </div>
  );
};

export default Project1BtnImgContainer;
