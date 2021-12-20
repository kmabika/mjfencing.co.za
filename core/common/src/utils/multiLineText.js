import React from 'react';
import isArray from 'lodash/isArray';
import reactStringReplace from 'react-string-replace';


const multiLineText = (text) => (
  reactStringReplace(isArray(text) ? text.join('') : text, '\n', (_, i) => <br key={i} />)
);

export default multiLineText;