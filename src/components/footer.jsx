import React from "react"
import { Col } from "antd"

export const Footer = () => {
  return (
    <Col span={24}
      style={{
        paddingTop: `2rem`,
        paddingBottom: `2rem`,
        textAlign: "center",
      }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </Col>
  )
}