import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">Malware Detection</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Malware Files</a>
        </Link>

        <Link route="/campaigns/indexTest">
          <a className="item">Testing Nodes</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
