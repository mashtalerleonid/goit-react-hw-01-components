import styled from '@emotion/styled';

export const Item = styled.li`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: ${props => {
    return props.backgroundColor;
  }};
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;
