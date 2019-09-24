import React from 'react';
import { Scoped, k } from 'kremling';
import { Sidebar } from './sidebar.component';
import { Content } from './content.component';

export function Responsive() {
  return (
    <Scoped css={css}>
      <div className="responsive">
        <Sidebar/>
        <Content/>
      </div>
    </Scoped>
  );
}

Responsive.propTypes = {};

const css = k`
  .responsive {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;