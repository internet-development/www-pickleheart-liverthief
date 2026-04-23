import styles from '@root/app/page.module.css';

import HeroCopy from '@components/HeroCopy';
import VideoClickWrapper from '@root/app/VideoClickWrapper';
import { createPageMetadata } from '@root/app/metadata';

const TITLE = 'Pickleheart Liverthief — Episode 1';
const DESCRIPTION = '“Hey, quick update everyone, I had a meeting with the record company, and I think it went pretty well!”';
const PAGE_URL = 'https://pickle.art/episodes/1';
const VIDEO_SRC = 'https://next-s3-public.s3.us-west-2.amazonaws.com/pickleheart-genesis.mp4';

export const metadata = createPageMetadata({ title: TITLE, description: DESCRIPTION, pageUrl: PAGE_URL });

export default function EpisodeOnePage() {
  return (
    <>
      <HeroCopy>
        {DESCRIPTION}
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
        <a className={styles.footerItem} href="/">
          Episode 2 — Gimme Proof NFT
        </a>
      </div>
      <div className={styles.spacerSmall}>
        <a className={styles.footerItem} href="https://zora.co/collections/zora/5670">
          OurZora — Gimme Proof
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
