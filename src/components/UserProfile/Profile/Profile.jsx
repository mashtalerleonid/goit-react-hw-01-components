import StatsList from 'components/UserProfile/StatsList';
import PropTypes from 'prop-types';
import { Card, Description, Avatar, Name, Tag } from './Profile.styled';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="Аватар пользователя"></Avatar>
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <p>{location}</p>
      </Description>

      <StatsList stats={stats} />
    </Card>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
