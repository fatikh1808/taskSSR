import React from "react"
import { Col, Pagination } from "antd"
import s from './paginator.module.css'

const Paginator = ({ totalItems, itemsLimit, onChange }) => {

  return (
    <Col span={24} className={s.paginator_col}>
      <Pagination
        total={totalItems}
        showTotal={total => `Total ${total} items`}
        defaultPageSize={itemsLimit}
        defaultCurrent={1}
        onChange={onChange}
      />
    </Col>
  )
}

export default Paginator