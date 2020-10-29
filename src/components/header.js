import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Col } from 'antd';

const Header = () => (
  <Col
    span={24}
    style={{
      background: `rebeccapurple`,
      marginBottom: 0,
    }}
  >
    <div
      style={{
        textAlign: 'left',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Anything
        </Link>
      </h1>
    </div>
  </Col>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
