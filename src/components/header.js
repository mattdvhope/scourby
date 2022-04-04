import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Image from "~/components/image"
import AudioBibleLinks from "~/components/audio-bible-links"
import "~/styles/global.css";

const Header = ({ sitename, metadata }) => {
  const LogoImage = `https://imgix.cosmicjs.com/29d07b10-aa05-11ec-bd4d-d755cb3d1844-scourby-logo.jpg`;
  const [audioBibleLinks, setAudioBibleLinks] = useState(<AudioBibleLinks metadata={metadata}/>);

  useEffect(() => {
console.log(window.location.pathname)

    if (
      window.location.pathname === "/voiceonly" ||
      window.location.pathname === "/voiceonly/" ||
      window.location.pathname === "/dramatized" ||
      window.location.pathname === "/dramatized/" ||
      window.location.pathname === "/both" ||
      window.location.pathname === "/both/"
    ) {
      setAudioBibleLinks(null)
    }
  });

  return (
    <header className="p-8">
      <div className="flex flex-col items-center">
        <Link className="mx-2 text-lg w-40 mb-4" to="/">
          <img className="image-blurred-edge" src={LogoImage} alt="Scourby Audio"/>
        </Link>
      </div>
      <hr className="mt-1 m-auto w-24 border-t-4" />
      {audioBibleLinks}
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
