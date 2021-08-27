import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import FriendList from 'components/FriendList';

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
    </div>
  );
}

export default App;
