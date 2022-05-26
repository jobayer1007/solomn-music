import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

import homeBtnImg from "../assets/home-page/home-button-home-page.png";
import menuBtnImg from "../assets/home-page/menu-button-home-page.png";

import introductionBtnImg from "../assets/home-page/introduction-button-home-page.png";
import monthlyNewsBtnImg from "../assets/home-page/monthly-news-home-page.png";

import projectBtnImg from "../assets/home-page/project-button-home-page.png";
import crewBtnImg from "../assets/home-page/crew-button-home-page.png";
import contactUsBtnImg from "../assets/home-page/contact-us-button-home-page.png";
import musicBtnImg from "../assets/home-page/music-button_home-page.png";
import mediaBtnImg from "../assets/home-page/media-button-home-page.png";

import frameBtnImg from "../assets/home-page/frame-buttons-home-page.png";
import muteBtnImg from "../assets/home-page/mute-button-home-page.png";

const HomeBtnImgContainer = ({ layout = "fill", objectFit = "contain" }) => {
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
          // onClick={() => router.push("home")}
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
      <div
        className={`${styles.containerBtnImage} ${styles.btnImgHomeLayer3} ${styles.introductionBtnImg}`}
      >
        <Image
          src={introductionBtnImg}
          alt='introductionBtnImg'
          layout={layout}
          objectFit={objectFit}
          // onClick={() => router.push("home")}
        />
      </div>
      {/* Monthly News Button */}
      <div
        className={`${styles.containerBtnImage} ${styles.btnImgHomeLayer3} ${styles.monthlyNewsBtnImg}`}
      >
        <Image
          src={monthlyNewsBtnImg}
          alt='monthlyNewsBtnImg'
          layout={layout}
          objectFit={objectFit}
          // onClick={() => router.push("home")}
        />
      </div>

      {/* Solomon Speech */}
      {/* <div className={`${styles.solomon}`}>
        SOLOMON: IN SEARCH OF A SONG is the captivating.
      </div> */}

      {/* Frame Button */}
      <div className={`${styles.containerBtnImage} ${styles.frameBtnImg}`}>
        <Image
          src={frameBtnImg}
          alt='frameBtnImg'
          layout={layout}
          objectFit={objectFit}
        />
      </div>

      {/* Project Button */}
      <div
        className={`${styles.containerBtnImage} ${styles.btnImgHomeLayer4} ${styles.projectBtnImg}`}
      >
        <Image
          src={projectBtnImg}
          alt='projectBtnImg'
          layout='responsive'
          onClick={() => router.push("project1")}
          // style={{ cursor: "pointer" }}
        />
      </div>
      {/* Crew Button */}
      <div
        className={`${styles.containerBtnImage} ${styles.btnImgHomeLayer4} ${styles.crewBtnImg}`}
      >
        <Image
          src={crewBtnImg}
          alt='crewBtnImg'
          layout={layout}
          objectFit={objectFit}
          // onClick={() => router.push("home")}
        />
      </div>
      {/* Contact Us Button */}
      <div
        className={`${styles.containerBtnImage} ${styles.btnImgHomeLayer4} ${styles.contactUsBtnImg}`}
      >
        <Image
          src={contactUsBtnImg}
          alt='contactUsBtnImg'
          layout={layout}
          objectFit={objectFit}
          // onClick={() => router.push("home")}
        />
      </div>
      {/* Music Button */}
      <div
        className={`${styles.containerBtnImage} ${styles.btnImgHomeLayer4} ${styles.musicBtnImg}`}
      >
        <Image
          src={musicBtnImg}
          alt='musicBtnImg'
          layout={layout}
          objectFit={objectFit}
          // onClick={() => router.push("home")}
        />
      </div>
      {/* Media Button */}
      <div
        className={`${styles.containerBtnImage} ${styles.btnImgHomeLayer4} ${styles.mediaBtnImg}`}
      >
        <Image
          src={mediaBtnImg}
          alt='mediaBtnImg'
          layout={layout}
          objectFit={objectFit}
          // onClick={() => router.push("home")}
        />
      </div>
      {/* Media Button */}
      <div
        className={`${styles.containerBtnImage} ${styles.btnImgHomeLayer4} ${styles.muteBtnImg}`}
      >
        <Image
          src={muteBtnImg}
          alt='muteBtnImg'
          layout={layout}
          objectFit={objectFit}
          // onClick={() => router.push("home")}
        />
      </div>
    </div>
  );
};

export default HomeBtnImgContainer;
