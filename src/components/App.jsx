import user from '../json/user.json';
import { Profile } from './Profile/Profile';

import data from '../json/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../json/friends.json';
import { FriendList } from './Friend_List/Friend_List';

import transactions from '../json/transactions.json';
import { TransactionHistory } from './Transaction_History/Transaction_History';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '15px',
        fontSize: 40,
        color: '#010101',
        background: 'linear-gradient(45deg, red, blue)',
      }}
    >
      <Profile
        userName={user.username}
        tagName={user.tag}
        location={user.location}
        imgUrl={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
