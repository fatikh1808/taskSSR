import React from "react"
import { Col, Row } from "antd"
import "antd/dist/antd.css"

import Header from "./header"
import "./layout.css"
import { Footer } from "./footer"
import { LeftBar } from "./leftBar"

const Layout = ({ children }) => {

  return (
    <Row
      gutter={[16, 24]}
      className={"layout_row"}>
      <Header/>
      <LeftBar/>
      <Col xs={24} sm={18} md={18} lg={21} xl={22}>
        <Row
          gutter={[16, 16]}
          className={"layout_center_row"}
        >
          {children}
        </Row>
        <Footer/>
      </Col>
    </Row>
  )
}

export default Layout
