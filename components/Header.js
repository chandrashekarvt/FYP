import React, { useEffect, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';
import { Router } from '../routes'

export default () => {
  const [showLogout, setLogout] = useState(false);
  const onLogout = () => {
    localStorage.removeItem("is_tester");
    Router.pushRoute('/auth/login');
  }

  useEffect(() => {
    let lg = localStorage.getItem("is_tester") !== null;
    setLogout(lg);
  })


  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">Malware Detection</a>
      </Link>


      <Menu.Menu position="right">
        {showLogout &&
          <span onClick={onLogout} className="item">Logout</span>}
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
