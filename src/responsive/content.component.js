import React from 'react';
import { Scoped, k } from 'kremling';

export function Content() {
  return (
    <Scoped css={css}>
      <div className="content">
        content
      </div>
    </Scoped>
  );
}

Content.propTypes = {};

const css = k`
  .content {
    background-color: $color-grey-25;
    flex-grow: 1;
  }
`;