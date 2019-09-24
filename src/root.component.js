import React, { Component } from 'react';
import { Scoped, k } from 'kremling';
import { BrowserRouter, Route } from 'react-router-dom';

import { Calendar } from './calendar/calendar.component';
import { Responsive } from './responsive/responsive.component';

export class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Scoped css={css}>
          <div className="page">
            <Route
              path="/calendar"
              component={Calendar}
            />
            <Route
              path="/responsive"
              component={Responsive}
            />
          </div>
        </Scoped>
      </BrowserRouter>
    );
  }
}

const css = k`  
  .page {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
