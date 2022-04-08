import React from "react"
import { Link } from "gatsby"

import facebook from "~/images/facebook.svg"

const Footer = () => {
  return (
    <footer className="flex justify-between pb-4">
      <Link to="/">
        <p className="text-sm font-semibold text-gray-600">
          Scourby Audio
        </p>
      </Link>
      <div className="flex gap-3 ml-4">
        <a href="https://www.facebook.com/scourbyaudiobible/" className="ml-3">
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
