import { TMailingCard } from './MailingCard.types';
import styles from "./MailingCard.module.scss"

export const MailingCard = (props: TMailingCard) => {
  return (
    <div className={styles.list_item}>
    <div className={styles.item_title}>
      <div className={styles.left}>
        <p>THY - Mailing Name</p>
        <span>Detayları görmek için Tıklayınız</span>
      </div>
      <div className={styles.right}>
        <div className={styles.open_btn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
    </div>
    <div className={styles.item_temp}>
      <picture>
        <img src="/image/thy-mail.png" alt="" />
      </picture>
    </div>
  </div>
  );
};
