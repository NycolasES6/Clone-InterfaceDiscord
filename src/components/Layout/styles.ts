import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns:71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas: 
  'Sl Sn Ci Ci'
  'Sl Cl Cd Ul'
  'Sl Ui Cd Ul';
  height:100vh;
`;
