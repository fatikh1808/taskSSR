import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"

import { toggleMobilekMode } from "../state/app"
import "antd/dist/antd.css"
import { Layout, Menu, Col } from "antd"

const { Sider } = Layout

const LeftBar = ({ isMobileMode, isOpen, dispatch }) => {


  return (
    <Col xs={24} sm={isOpen ? 1 : 6} md={isOpen ? 1 : 6} lg={3} xl={2}
         style={{ height: isOpen ? "0" : "100%", padding: 0 }}
     >
      <StaticQuery
        query={graphql`
       {
        Blog {
          rubrics {
            id
            type_name

          }
        }
      }
    `}
        render={({ Blog: { rubrics } }) => (
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            width={isMobileMode ? "85%" : "100%"}
            onCollapse={(isType, type) => dispatch(toggleMobilekMode(isType, type))}
            style={isOpen ? { height: 0 } : { height: "100%" }}

          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              {rubrics.map(item => (
                <Menu.Item key={item.id}>
                  <a href={`/${item.type_name}`}>
                    {item.type_name}
                  </a>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
        )}
      />
    </Col>
  )
}

export default connect(state => ({
  isMobileMode: state.app.isMobileMode,
  isOpen: state.app.isOpen
}), null)(LeftBar)
