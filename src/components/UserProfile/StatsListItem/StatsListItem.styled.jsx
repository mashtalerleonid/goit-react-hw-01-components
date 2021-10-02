import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 15px 0;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  :not(:last-child) {
  border-right: 1px solid gray};
}`;

export const Label = styled.span`
  color: grey;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
