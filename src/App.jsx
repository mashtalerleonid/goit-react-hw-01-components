import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transaction.json';
import Profile from 'components/UserProfile/Profile';
import StatisticsList from 'components/Statistics/StatisticsList';
import Section from 'components/Section';
import FriendList from 'components/Friends/FriendList';
import TransactionTable from 'components/TransactionHistory/TransactionTable';

function App() {
  return (
    <div>
      <Section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <StatisticsList title="Upload stats" stats={statisticalData} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionTable items={transactions} />
      </Section>
    </div>
  );
}

export default App;
