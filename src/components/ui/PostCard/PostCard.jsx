import React from 'react';
import styles from './PostCard.module.css';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import { postIcons } from '../../../utils/constants';

const PostCard = ({ post, variant }) => {
  const { id, title, body } = post;

  const SELECTED = 'selected';

  const dynamicClassRender = () => {
    if (variant === SELECTED) {
      return styles.card__selected;
    } else {
      return styles.card__body;
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <input type='checkbox' />
        <h3 className={styles.card__title}>{title}</h3>
      </div>
      <p>{body}</p>
      <ul className={styles.card__icons}>
        {postIcons.map((item) => (
          <li key={item.id}>
            <ButtonWithIcon children={item.icon} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PostCard;
