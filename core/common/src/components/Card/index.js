import styled from 'styled-components';

import { base, theme } from '@utils';

const Card = styled.div`
  ${theme('Card')}
  ${base}

  page-break-inside: avoid;
  break-inside: avoid;
`;

export default Card;
