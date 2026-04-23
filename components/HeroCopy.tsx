import styles from '@components/HeroCopy.module.css';

import * as React from 'react';
import Image from 'next/image';

export interface HeroCopyProps {
  children?: React.ReactNode;
}

export default function HeroCopy(props: HeroCopyProps) {
  return (
    <div className={styles.body}>
      <figure className={styles.left}>
        <Image
          src="https://next-s3-public.s3.us-west-2.amazonaws.com/pickle-avatar.png"
          alt=""
          width={256}
          height={256}
          sizes="(max-width: 768px) 72px, 128px"
          className={styles.image}
          priority
        />
      </figure>
      <h1 className={styles.right}>{props.children}</h1>
    </div>
  );
}
