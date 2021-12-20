import styled from 'styled-components';
import { base, theme } from '@utils';
import { grid } from 'styled-system';

export const GridWrapper = styled.div`
  ${theme('Grid')}
  ${base}

  display: grid;
  ${grid}
`;
