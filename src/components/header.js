import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{

    }}
  >
    <div
      style={{
        margin: `0 auto`,

        padding: `1rem 1.1875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            fontFamily: 'Work Sans',
            fontSize: `2rem`,
            fontWeight: `500`,
            lineHeight: `5px`,
            textDecoration: `none`,
          }}
        >

        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
