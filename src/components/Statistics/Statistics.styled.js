import styled from 'styled-components';
export const List = styled.ul`
  list-style: none;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
`;
export const Item = styled.li`
margin-bottom: 10px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  &:first-child {
    color: #55d904;
  }
  &:nth-child(3) {
    color: red;
  }
  &:nth-child(2) {
    color: #4c43cd;
  }
  &:nth-child(4) {
    color: black;
  }
  &:last-child {
    color: #045426;
  }
`;
