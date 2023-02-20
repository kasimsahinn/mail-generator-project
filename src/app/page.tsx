import { MailingCard } from '@/components/Cards/MailingCard/MailingCard';
import styles from "@/styles/index.module.scss";
import Link from 'next/link';

const Page =  () => {

  return (
    <div className={styles.main_section}>
    <header>
      <div className={styles.header}>
      </div>
      <Link href="about">About</Link>
    </header>

    <section className={styles.content}>
      <div className={styles.list}>
        <MailingCard/>
        <MailingCard/>
      </div>
    </section>
  </div>
  );
};


export default Page;
