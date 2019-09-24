import React from 'react';
import { Scoped, k } from 'kremling';
import { Icon } from './components/icon.component';

export function Sidebar() {
  return (
    <Scoped css={css}>
      <div className="sidebar">
        <div className="sidebar-left">
          <div className="sidebar-left__top">
            <div className="logo">
              <Icon name="apple" fill="#fff" />
            </div>
            <a className="nav-btn">
              <Icon name="search" />
            </a>
            <a className="nav-btn">
              <Icon name="calendar-alt" />
            </a>
          </div>
          <div className="sidebar-left__bottom">
            <a className="nav-btn">
              <Icon name="cog" />
            </a>
          </div>
        </div>
        <div className="sidebar-right">
          hi
        </div>
      </div>
    </Scoped>
  );
}

Sidebar.propTypes = {};

const css = k`
  .sidebar {
    display: none;
    transition: width 200ms ease;
  }
  
  .sidebar-left {
    display: flex;
    width: 6rem;
    padding: 1rem;
    justify-content: space-between;
    height: 100%;
    flex-direction: column;
  }

  .sidebar-right {
    display: none;
    overflow: hidden;
  }
  
  .logo {
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    background-color: $color-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    
    svg {
      margin-top: -.1rem;
    }
  }
  
  .sidebar-left__top {
    flex-grow: 1;
  }
  
  .nav-btn {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    color: $color-grey-900;
    
    &:focus, &:active {
      box-shadow: none;
      outline: none;
    }
  }

  @media (min-width: $media1-width) {
    .sidebar {
      display: flex;
      width: 6rem;
    }
  }
  
  @media (min-width: $media5-width) {
    .sidebar {
      width: 28rem;
    }

    .sidebar-right {
      display: flex;
    }
  }
  
  
`;