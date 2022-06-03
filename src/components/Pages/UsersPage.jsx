import React from "react";
import { Table } from "antd";
const { Column } = Table;

const UsersPage = () => {
    const dataSource = [
      {
        key: '1',
        name: 'Sample1',
        username: 'Samplex',
        email: 'mail@mail.com'
      },
      {
        key: '2',
        name: 'Sample2',
        username: 'Samplex',
        email: 'mail@mail.com'
      },
    ];

    return (
        <div className="UsersPage">
           Users for company name
           <Table dataSource={dataSource}>
             <Column
                title="name"
                dataIndex="name"
                key="name"
             />
              <Column
                title="username"
                dataIndex="username"
                key="username"
             />
              <Column
                title="email"
                dataIndex="email"
                key="email"
             />
           </Table>

        </div>
    )
}

export default UsersPage