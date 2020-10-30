import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import "antd/dist/antd.css"
import { Layout, Menu, Col } from "antd"

const { Sider } = Layout

export const LeftBar = () => {

  const [collapse, setCollapse] = useState(true)


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
            width={collapse ? "100%" : "85%"}
            onCollapse={(collapsed, type) => {
              setCollapse(collapsed)
            }}
            style={{height: "100%"}}
          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              {rubrics.map(item => (
                <Menu.Item key={item.id} style={{ height: collapse ? "2px" : "auto"}}>
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
