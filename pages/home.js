import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

import backgroundHomePage from '../assets/home-page/background-home-page.png';
import illustrationImgHome from '../assets/home-page/illustration-home-page.png';
import HomeBtnImgContainer from '@/components/HomeBtnImgContainer';

export default function HomePage() {
  const router = useRouter();

  return (
    <Layout>
      <Image
        src={backgroundHomePage}
        alt='backgroundHomePage'
        width={1000}
        height={455}
        layout='responsive'
      />

      <div className={styles.illustrationImgHome}>
        <Image
          src={illustrationImgHome}
          alt='illustrationImgHome'
          layout='fill'
        />
      </div>

      <HomeBtnImgContainer />
    </Layout>
  );
}
