import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { fbq } from '@hutsoninc/gatsby-plugin-facebook-pixel';

import Image from "~/components/image"
import "~/styles/global.css";

const Header = ({ setOpenModal, sitename, metadata }) => {
  const LogoImage = `https://imgix.cosmicjs.com/29d07b10-aa05-11ec-bd4d-d755cb3d1844-scourby-logo.jpg`;
  return (
    <header className="p-8">
      <div className="flex flex-col items-center">
        <Link className="mx-2 text-lg w-40 mb-4" to="/">
          <img className="image-blurred-edge" src={LogoImage} alt="Scourby Audio"/>
        </Link>
      </div>
      <hr className="mt-1 m-auto w-24 border-t-4" />


      <div className="centered-div">
        <div className="app-links">
          <div className="apple-app-store-image">
            <Link
              to="/order"
              onClick={() => {
                console.log("clicked apple")
                fbq('track', 'PageView'); // you can add JSON params here too!! --> https://developers.facebook.com/docs/mediaguide/pixel-and-analytics
              }}
            >
              <Image
                alt="Apple App Store"
                image={metadata.apple_app_store}
              />
            </Link>
          </div>

          <div className="google-play-store-image">
            <a 
              href="https://order.shareit.com/cart/add?vendorid=200281724&PRODUCT%5B300918420%5D=1&currency=USD&languageid=1&affiliateid=200292863"
              onClick={() => {
                console.log("clicked google")
                fbq('track', 'PageView'); // you can add JSON params here too!! --> https://developers.facebook.com/docs/mediaguide/pixel-and-analytics
                // fbq('trackCustom', 'ClickedGooglePlayStore'); // you can add JSON params here too!! --> https://developers.facebook.com/docs/mediaguide/pixel-and-analytics
              }}
            >
              <Image
                alt="Google Play Store"
                image={metadata.google_play_store}
              />
            </a>
          </div>
        </div>
      </div>


    </header>
  )
}

Header.propTypes = {
  sitename: PropTypes.string,
}

Header.defaultProps = {
  sitename: ``,
}

export default Header
