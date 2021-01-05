import React from 'react'
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./RegisterForm.scss";

export default function RegisterForm(props) {
    const { setShowLogin } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            name: Yup.string().required("Tu nombre es obligatorio"),
            username: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "El nombre del usuario no puede tener espacio").required("El username es obligatorio"),
            email: Yup.string().email("El email no es valido").required("El email es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son iguales"),
            repeatPassword: Yup.string().required("Por favor, repite la contraseña").oneOf([Yup.ref("password")], "Las contraseñas no son iguales")
        }),
        onSubmit: (formValue) => {
            console.log('Estoy en el form de formik');
            console.log(formValue);
        }
    });

    return (
        <>
            <h2 className="register-form-title">Registrate para ver fotos y vídeos de tus amigos</h2>
            <Form className="register-form" onSubmit={formik.handleSubmit}>
                <Form.Input error={formik.errors.name} type="text" placeholder="Nombre y apellidos" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                <Form.Input error={formik.errors.username} type="text" placeholder="Nombre de usuario" name="username" onChange={formik.handleChange} value={formik.values.username}/>
                <Form.Input error={formik.errors.email} type="text" placeholder="Correo electronico" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                <Form.Input error={formik.errors.password} type="password" placeholder="Contraseña" name="password" onChange={formik.handleChange} value={formik.values.password}/>
                <Form.Input error={formik.errors.repeatPassword} type="password" placeholder="Repite contraseña" name="repeatPassword" onChange={formik.handleChange} value={formik.values.repeatPassword}/>

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