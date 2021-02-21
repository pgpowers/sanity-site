import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './portfolioItem.module.css';

const PortfolioItem = ({_id, title, image, description}) => {
  return (
    <div key={_id} className={styles.portfolioItem}>
        <h2>{title}</h2>
        <img src={image.asset.url} alt={title} width="500" height="400" />
        <ReactMarkdown children={description} />
    </div>
  );
};

export default PortfolioItem;