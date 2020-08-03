import React from 'react';
import classNames from 'classnames';
import Branding from './Branding';
import FooterEnd from './FooterEnd';
import { assetUrl, getItemPageNames, isMobileViewport } from '../../common/config';

export default function Footer({ items, pageName }) {
  return (
    <div className={classNames('footer', {'is-hidden': !isMobileViewport() && getItemPageNames(items).includes(pageName)})}>
      <Branding
        modifier="footer"
        logoContent={<img src={assetUrl('TVDLogo_weiss-transparent_2019.png')} width="200px" height="50px" />}
      >
        <span className="footnote">
      Trivadis is a leading global provider of services for [TBD].
        </span>
      </Branding>
      <FooterEnd/>
    </div>
  );
}
