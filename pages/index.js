import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

import backgroundEnterPage from '../assets/enter-page/background-enter-page.png';
import illustrationImgEnter from '../assets/enter-page/illustration-enter-page.png';
import btnImageEnter from '../assets/enter-page/enter-button-with-hand.png';

export default function EnterPage() {
  const router = useRouter();

  return (
    <Layout>
      <Image
        src={backgroundEnterPage}
        alt='backgroundEnterPage'
        width={1000}
        height={455}
        layout='responsive'
      />

      <div className={styles.illustrationImgEnter}>
        <Image
          src={illustrationImgEnter}
          alt='illustrationImgEnter'
          layout='fill'
        />
      </div>

      <div className={styles.btnImageEnter}>
        <Image
          src={btnImageEnter}
          alt='btnImageEnter'
          layout='responsive'
          onClick={() => router.push('home')}
        />
      </div>
    </Layout>
  );
}
