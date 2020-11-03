import React from 'react'
import {Col} from 'antd';

export const Title = (children) => {

  return(
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <h1>
          {Object.keys(children).length !== 0 ? children.children : "Articles"}
        </h1>
    </Col>
  )
}