import React from 'react'
import {Col} from 'antd';

export const Title = (children) => {

  return(
    <Col xs={24} sm={18} md={18} lg={21} xl={22}>
        <h1>
          {Object.keys(children).length !== 0 ? children.children : "Articles"}
        </h1>
    </Col>
  )
}