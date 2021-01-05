import React from 'react'
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import "./RegisterForm.scss";

export default function RegisterForm(props) {
    const { setShowLogin } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: null,
        onSubmit: (formValue) => {
            console.log('Estoy en el form de formik');
            console.log(formValue);
        }
    });

    return (
        <>
            <h2 className="register-form-title">Registrate para ver fotos y vídeos de tus amigos</h2>
            <Form className="register-form" onSubmit={formik.handleSubmit}>
                <Form.Input type="text" placeholder="Nombre y apellidos" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                <Form.Input type="text" placeholder="Nombre de usuario" name="username" onChange={formik.handleChange} value={formik.values.username}/>
                <Form.Input type="text" placeholder="Correo electronico" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                <Form.Input type="password" placeholder="Contraseña" name="password" onChange={formik.handleChange} value={formik.values.password}/>
                <Form.Input type="password" placeholder="Repite contraseña" name="repeatPassword" onChange={formik.handleChange} value={formik.values.repeatPassword}/>

                <Button type="submit" className="btn-submit">Registrarse</Button>
                <Button type="button" onClick={formik.handleReset}>Limpiar formulario</Button>
            </Form>
        </>
    )
}

function initialValues() {
    return {
        name: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    };
}

// <!-- Para limpiar datos, se requiere agregar el value al input -->