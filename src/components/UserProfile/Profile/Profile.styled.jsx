import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  padding-top: 30px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 7px 5px 4px rgba(2, 12, 19, 0.15);
  background-color: white;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: grey;
  font-size: 16px;
`;

export const Avatar = styled.img`
  width: 30%;
  border-radius: 50%;
  border: 2px solid black;
`;

export const Name = styled.p`
  font-size: 20px;
  color: black;
  font-weight: bold;
  margin-bottom: 0;
`;

export const Tag = styled.p`
  margin-bottom: 0;
`;
