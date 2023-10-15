import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Friend_List_Item.module.css';

export const FriendListItem = ({ isOnline, imgSrc, friendName }) => {
  return (
    <li className={css.item}>
      <span
        className={clsx([css.status], {
          [css.online]: isOnline,
        })}
      ></span>
      <img className={css.avatar} src={imgSrc} alt="User avatar" width="48" />
      <p className={css.name}>{friendName}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
};