import profile from './user.json';
import Profile from 'components/profile/Profile.jsx';
import Section from 'components/section/Section.jsx';
console.log(Profile);

function App() {
  return (
    <div>
      <Section>
        <Profile
          name={profile.name}
          tag={profile.tag}
          location={profile.location}
          avatar={profile.avatar}
          stats={profile.stats}
        />
      </Section>
    </div>
  );
}

export default App;
