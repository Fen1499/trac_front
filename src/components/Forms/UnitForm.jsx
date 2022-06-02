import React, {useState} from "react";
import { Modal } from 'antd';

const UnitForm = ({vis, setVis}) => {

    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setVis(false);
        setConfirmLoading(false);
      }, 2000);
    };

    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVis(false);
    };

    return (
      <Modal
      title="Create unit for company name"
      visible={vis}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      UnitsForm
    </Modal>
    )
}

export default UnitForm