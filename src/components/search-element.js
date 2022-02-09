import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const SearchElement = ({ setOpenModal }) => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <button
        className="mx-2 mb-2 md:mb-0 text-lg"
        onClick={() => setOpenModal(true)}
      >
        Search
      </button>
    </div>
  )
}

SearchElement.propTypes = {
  siteName: PropTypes.string,
}

SearchElement.defaultProps = {
  siteName: ``,
}

export default SearchElement
