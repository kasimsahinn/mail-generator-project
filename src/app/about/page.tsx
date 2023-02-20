import { MailingCard } from '@/components/Cards/MailingCard/MailingCard';
import styles from "@/styles/index.module.scss";
import { IHomeProps } from '@/types/home';
import { getHomePageData } from '@/utilities/services';


const Page = async () => {
  const data = await getData();

  return (
    <div className={styles.main_section}>
    <header>
      <div className={styles.header}>

      </div>
    </header>

    <section className={styles.content}>
      <div className={styles.list}>
        <>
        <div>

        {JSON.stringify(data.data.map((a) => (a.attributes.title)))}
        </div>
        
        <MailingCard/>
        <MailingCard/>
        </>
      </div>
    </section>
  </div>
  );
};



export const getData = async ():Promise<IHomeProps> => {
  const content = await getHomePageData();
  console.log(content)
  return content
  
};



export default Page;
