import React from 'react';

import ExternalLink from './ExternalLink';

const Footer = () => (
  <footer>
    <div>
      <p>© 2015 Harvard T.H. Chan School of Public Health</p>
      <p>
        <ExternalLink to="https://hsph.harvard.edu/nutritionsource/kids-healthy-eating-plate">
          Kid’s Healthy Eating Plate
        </ExternalLink>
      </p>
      <p>
        <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/">
          Healthy Eating Plate
        </ExternalLink>
      </p>
      <p>
        <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/healthy-drinks/">
          Healthy Drinks
        </ExternalLink>
      </p>
    </div>
    <img
      alt="Water Glass from Kid’s Healthy Eating Plate"
      src="https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2015/12/Kids_Water_longer-300x313.jpg"
    />
  </footer>
);

export default Footer;
