import { MailingCard } from '@/components/Cards/MailingCard/MailingCard';
import Layout from '@/components/Layout/SiteLayout/Layout';
import styles from "@/styles/index.module.scss";
import { IHomeProps } from '@/types/home';
import { getHomePageData } from '@/utilities/services';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { ReactElement } from 'react';


const Page = async () => {
  // fetch('https://localhost:3000/api/abouts')
  //     .then(response => response.json())
  //     .then(json => console.log(json))

  const data = await getData();

  return (
    <div className={styles.main_section}>
    <header>
      <div className={styles.header}>

      </div>
      <Link href="about">

      </Link>
    </header>

    <section className={styles.content}>
      <div className={styles.list}>
        <>
        <div>

          {JSON.stringify(data)}
        </div>
        
        <MailingCard/>
        <MailingCard/>
        </>
      </div>
    </section>
  </div>
  );
};



export const getData = async () => {
  const content = await getHomePageData();
  return {
    props: {
      content,
    },
  };
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
