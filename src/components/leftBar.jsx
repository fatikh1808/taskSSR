import React from "react"
import { graphql, StaticQuery } from "gatsby"

import "antd/dist/antd.css"
import { Layout, Menu, Col } from "antd"

const { Sider } = Layout

export const LeftBar = () => {

  return (
    <Col xs={24} sm={6} md={6} lg={3} xl={2} style={{padding: 0}}>
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
            width={"100%"}
            style={{height: "100%"}}
          >
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              {rubrics.map(item => (
                <Menu.Item key={item.id}>
                  <a href={`/rubric/${item.id}`}>
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
