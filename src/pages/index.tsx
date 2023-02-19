import { MailingCard } from '@/components/Cards/MailingCard/MailingCard';
import Layout from '@/components/Layout/SiteLayout/Layout';
import styles from "@/styles/index.module.scss";
import { THomeProps } from '@/types/home';
import { getHomePageData } from '@/utilities/services';
import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

type Props = {
  content?: THomeProps;
};

const Page = ({content} : Props) => {

  return (
    <div className={styles.main_section}>
    <header>
      <div className={styles.header}>

      </div>
    </header>

    <section className={styles.content}>
      <div className={styles.list}>
        <>
        
        <span>{content?.attributes}</span>
        <MailingCard/>
        <MailingCard/>
        <MailingCard/>
        </>
      </div>
    </section>
  </div>
  );
};



export const getServerSideProps: GetServerSideProps = async () => {
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
