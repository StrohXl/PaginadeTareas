import { Modal,Form, Input } from "antd";
import { useEffect, useState } from "react";
const formulario = ({open, onCancel, array, tarea}) => {
    const [form] = Form.useForm()
    const [data,setData] = useState(null)
    const onOk = async ()=>{
       form.validateFields().then((values)=>{
        array(values)
        setData(null)
       })
    }
    const onChange=(valor)=>{
        setData(valor)
    }
    useEffect(()=>{
        if(open){
            if(tarea === null){
                setData(null)
                form.resetFields()
            }
            else{
                setData({...tarea})
                form.setFieldsValue({...tarea})
            }
        }
        else{
            setData(null)
            form.resetFields()
        }

    },[open])

    return (
        <Modal open={open} onCancel={onCancel} onOk={onOk}>
            <Form form={form} layout='vertical' initialValues={data} onValuesChange={onChange} >
            <Form.Item 
            name='name' 
            hasFeedback 
            label='Nombre de la tarea'
            rules={[
                { required: true, message: "Seleccione almenos una opción" },
            ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item 
            name='description' 
            hasFeedback 
            label='coloca cualquier vaina' 
            rules={[
                { required: true, message: "Seleccione almenos una opción" },
            ]}
            >
                <Input/>
            </Form.Item>
            </Form>
        </Modal>
    );
};

export default formulario;