import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transaction.json';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

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
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

export default App;
