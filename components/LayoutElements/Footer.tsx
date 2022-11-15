import React from "react";
import Image from "next/image";
import styles from "../../styles/Layout.module.css";

const Footer = () => {
  return (
    <footer className="h-24 w-full flex flex-row items-center justify-center sticky bottom-0">
      <a href="https://theoz.dev" target="_blank" rel="noopener noreferrer">
        <span className={styles.logo}>
          <Image
            src="/img/theo.png"
            alt="Theo OZ in handwriting."
            width={72}
            height={33}
            priority
          />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
