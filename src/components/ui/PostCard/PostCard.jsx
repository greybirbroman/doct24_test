import { useState } from 'react';
import styles from './PostCard.module.css';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';

import { USERS } from '../../../utils/routes';
import PrimaryLink from '../PrimaryLink/PrimaryLink';
import { Edit, MessagesSquare, Star, Trash } from 'lucide-react';
import { useGetPostCommentsByIdQuery } from '../../../lib/redux/posts/postsSlice';
import Loader from '../Loader/Loader';
// import usePosts from '../../../utils/hooks/usePosts';

const PostCard = ({ post, isDeleting, deletePost }) => {
  const [showComments, setShowComments] = useState(false);
  const [postCommentsId, setPostCommentsId] = useState(null);
  const [selected, setSelected] = useState(false);
  const { id, author, title, body } = post;
  const { data: comments, isLoading: isCommentsLoading } =
    useGetPostCommentsByIdQuery(postCommentsId, {
      skip: !postCommentsId,
    });
  // const { handleDeletePost, isDeleting } = usePosts();

  const handleSelectPost = () => {
    setSelected((prev) => !prev);
  };

  const handleShowComments = (id) => {
    setShowComments((prev) => !prev);
    setPostCommentsId(id);
  };

  return (
    <article className={`${styles.card} ${selected && styles.card__selected}`}>
      <div className={styles.container}>
        <input type='checkbox' checked={selected} onChange={handleSelectPost} />
        <h3 className={styles.card__title}>{title}</h3>
      </div>

      <p className={styles.card__body}>{body}</p>

      <div className={styles.container}>
        <PrimaryLink to={`/${USERS}/${author.id}`} title={author.name} />
        <ul className={styles.card__icons}>
          <li>
            <ButtonWithIcon
              id='comments'
              children={<MessagesSquare />}
              onClick={() => handleShowComments(id)}
              isActive={showComments}
            />
          </li>
          <li>
            <ButtonWithIcon
              id='delete'
              children={<Trash />}
              onClick={() => deletePost(id)}
              disabled={isDeleting}
            />
          </li>
        </ul>
      </div>
      {isCommentsLoading ? (
        <Loader size='small' />
      ) : (
        comments &&
        showComments && (
          <div className={styles.commentsContainer}>
            <ul className={styles.commentsList}>
              Comments:
              {comments.map((comment) => (
                <li key={comment.id} className={styles.commentsListItem}>
                  <span className={styles.email}>{comment.email}</span>
                  <p className={styles.name}>{comment.name}</p>
                  <p className={styles.comment}>{comment.body}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </article>
  );
};

export default PostCard;
