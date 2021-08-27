import user from './user.json';
import Profile from 'components/Profile';
import Section from 'components/Section';

function App() {
  return (
    <div>
      <Section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>
    </div>
  );
}

export default App;
