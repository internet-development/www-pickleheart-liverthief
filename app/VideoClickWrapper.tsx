'use client';

import styles from '@root/app/page.module.css';

import * as React from 'react';

export interface VideoClickWrapperProps {
  src: string;
}

export default function VideoClickWrapper({ src }: VideoClickWrapperProps) {
  const [clicked, setClicked] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, []);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) {
      setClicked(true);
      return;
    }
    video.muted = false;
    void video.play().catch(() => {});
    setClicked(true);
  };

  return (
    <>
      <video ref={videoRef} className={styles.video} controls={clicked} width="100%" autoPlay muted loop playsInline>
        <source src={src} type="video/mp4" />
      </video>
      {!clicked ? (
        <button type="button" className={styles.overlay} onClick={handleClick}>
          !! CLICK FOR SOUND ♫ !!
        </button>
      ) : null}
    </>
  );
}
