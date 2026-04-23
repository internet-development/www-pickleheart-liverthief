import styles from '@root/app/page.module.css';

import HeroCopy from '@components/HeroCopy';
import VideoClickWrapper from '@root/app/VideoClickWrapper';
import { createPageMetadata } from '@root/app/metadata';

const TITLE = 'Pickleheart Liverthief';
const DESCRIPTION = `“Hey people, the people, the people of the coin—
I'm feelin' current with the currency, goin' talk about systems: Who's the boss that gets wit' dem?”`;
const PAGE_URL = 'https://pickle.art';
const VIDEO_SRC = 'https://zora-dev.mypinata.cloud/ipfs/bafybeig4zsnkc6caqyoj277b3fa5syvevks2542qr2pxaw7kit36yom3gy';

export const metadata = createPageMetadata({ title: TITLE, description: DESCRIPTION, pageUrl: PAGE_URL });

export default function HomePage() {
  return (
    <>
      <HeroCopy>
        {DESCRIPTION}{' '}
        <a className={styles.emphasis} href="https://zora.co/collections/zora/5670">
          (Get the NFT)
        </a>
        <br />
        <br />— Pickleheart Liverthief
      </HeroCopy>

      <VideoClickWrapper src={VIDEO_SRC} />

      <div className={styles.spacer}>
        <a className={styles.footerItem} href="/attribution-non-commercial-share-alike">
          Attribution-NonCommercial-ShareAlike 4.0 International
        </a>
      </div>
      <div className={styles.spacerSmall}>
        <a className={styles.footerItem} href="https://zora.co/collections/zora/5670">
          OurZora — Gimme Proof
        </a>
      </div>
      <div className={styles.spacerSmall}>
        <a className={styles.footerItem} href="https://twitter.com/PLiverthief">
          Follow on Twitter
        </a>
      </div>
      <div className={styles.spacerBottom}>
        <a className={styles.footerItem} href="/episodes/1">
          Episode 1 — Intro
        </a>
      </div>
    </>
  );
}
