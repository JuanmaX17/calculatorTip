import styled from 'styled-components';

function validateBg({ bg = 'primary' }) {
  if (bg === 'primary') return 'var(--Light-grayish-cyan)';
  if (bg === 'secondary') return 'var(--White)';
  if (bg === 'tertiary') return 'var(--Very-dark-cyan);';
  return 'var(--Strong-cyan)';
}

function validateRows({ rows = '15% 85%' }) {
  return rows;
}

function validateWidth({ width = '100%' }) {
  return width;
}
export const WrapperCenter = styled.div`
  width: ${validateWidth};
  height: 100%;
  display: grid;
  place-items: center;
  background-color: ${validateBg};
  grid-template-rows: ${validateRows};
  gap: ${({ gap }) => gap || '0'};
`;

function validateBorders({ radius = '10px' }) {
  return radius;
}

export const WrapperCard = styled(WrapperCenter)`
  border-radius: ${validateBorders}; 
`;
