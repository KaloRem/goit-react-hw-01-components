import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  imgUrl,
  userName,
  tagName,
  location,
  stats: { followers, views, likes },
}) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={imgUrl} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{userName}</p>
      <p className={css.tag}>@{tagName}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};