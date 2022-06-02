import React, { useState } from "react";
import { Card, Row, Col, Button, Space, Modal } from 'antd';

import CompanyCard from "../CompanyCard/CompanyCard"

const CompaniesPage = () => {
  return (
    <>
      <Row gutter={24} className="CompaniesPage">
        <Col>
          <CompanyCard />
        </Col>
        <Col>
          <CompanyCard />
        </Col>
        <Col>
          <CompanyCard />
        </Col>

      </Row>

    </>
  )
}

export default CompaniesPage