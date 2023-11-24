import styles from './UserCard.module.css';
import { User2, Mail, Globe, BookUser } from 'lucide-react';

const UserCard = ({ user }) => {
  console.log(user);
  const { name, email, username, website } = user;
  const { city, street } = user.address;
  return (
    <div className={styles.card}>
      <div className={styles.card__avatar}>{name.charAt(0).toUpperCase()}</div>
      <h3>{name}</h3>
      <div className={styles.container}>
        <User2 />
        <p>@{username}</p>
      </div>
      <div className={styles.container}>
        <Mail />
        <span>{email}</span>
      </div>
      <div className={styles.container}>
        <BookUser />
        <p>
          {city}, {street} st.
        </p>
      </div>
      <div className={styles.container}>
        <Globe />
        <p>{website}</p>
      </div>
    </div>
  );
};

export default UserCard;
