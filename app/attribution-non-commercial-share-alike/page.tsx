import styles from '@root/app/page.module.css';

import LegalFooter from '@components/LegalFooter';
import { createPageMetadata } from '@root/app/metadata';

const TITLE = 'Pickleheart Liverthief — License';
const DESCRIPTION = 'Attribution-NonCommercial-ShareAlike 4.0 International License';
const PAGE_URL = 'https://pickle.art/attribution-non-commercial-share-alike';

export const metadata = createPageMetadata({ title: TITLE, description: DESCRIPTION, pageUrl: PAGE_URL });

export default function AttributionPage() {
  return (
    <>
      <LegalFooter />
      <div className={styles.spacer}>
        <a className={styles.footerItem} href="https://zora.co/collections/zora/5670">
          OurZora — Gimme Proof
        </a>
      </div>
      <div className={styles.spacerSmall}>
        <a className={styles.footerItem} href="/">
          Return Home
        </a>
      </div>
      <div className={styles.spacerBottom}>
        <a className={styles.footerItem} href="https://twitter.com/PLiverthief">
          Follow on Twitter
        </a>
      </div>
    </>
  );
}
