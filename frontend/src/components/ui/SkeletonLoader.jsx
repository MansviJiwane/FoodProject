import React from "react";
import styles from "./SkeletonLoader.module.css";

const SkeletonCard = () => (
  <div className={styles.card}>
    <div className={styles.image} />
    <div className={styles.body}>
      <div className={styles.lineMedium} />
      <div className={styles.lineShort} />
      <div className={styles.line} />
    </div>
  </div>
);

const SkeletonLoader = ({ count = 6 }) => (
  <div className={styles.grid}>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default SkeletonLoader;
