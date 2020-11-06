import React from "react"
import { Col, Row } from "antd"
import "antd/dist/antd.css"
import { connect } from "react-redux"

import Header from "./header"
import "./layout.css"
import { Footer } from "./footer"
import LeftBar from "./leftBar"
import { ArticleCard } from "./articleCard"

const Layout = ({ children, isOpen }) => {

  return (
    <Row
      gutter={[16, 24]}
      className={"layout_row"}>
      <Header/>
      <LeftBar/>
      <Col xs={24} sm={isOpen ? 23 : 18} md={isOpen ? 23 : 18} lg={21} xl={22}>
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

export default connect(state => ({
  isOpen: state.app.isOpen
}), null)(Layout)
