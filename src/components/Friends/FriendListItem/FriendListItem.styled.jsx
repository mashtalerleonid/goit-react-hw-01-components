import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 30px;
  box-shadow: 0px 2px 5px 3px rgba(34, 60, 80, 0.4);
  background-color: white;
`;

export const Status = styled.span`
  display: block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-right: 15px;
  border: 1px solid black;
  border-radius: 5px;
`;
