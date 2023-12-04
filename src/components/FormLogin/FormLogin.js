import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './FormLogin.module.css';
import { useState } from 'react';
import Swal from 'sweetalert2'

export function FormLogin() {

    const rightEmail = 'email@email.com';
    const rightPassword = '1234';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function validateUserCredentials() {

        if (email !== rightEmail || password !== rightPassword) {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email ou senha incorreta!",
            footer: '<a href="#">esqueceu sua senha?</a>'
          });;
        }
        return Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Conta logada com sucesso!",
            showConfirmButton: false,
            timer: 1000,
            background: "#fff"
          });
}

    function isButtonDisabled() {
        return !!(email === '' || password === '')
    }

  return (
        <>
            <Form className={style.containerForm}>
                <div className={style.loginTitle}>
                    <h3 className={style.textLogin}>Login</h3>
                </div>
                <p className={style.textP}>Entre em sua conta.</p>
                <Form.Group className={style.containerFormDiv}>
                    <Form.Label>Email </Form.Label>
                    <Form.Control 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className={style.containerFormDiv}>
                    <Form.Label >Password</Form.Label>
                    <Form.Control 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group  className={style.containerFormDiv}>
                    <Form.Check type="checkbox" label="Matenha-me conectado"/> 
                </Form.Group>
                <Button className={style.containerFormButton} variant="primary" disabled={isButtonDisabled}  onClick={validateUserCredentials}>
                    Entrar
                </Button>
            </Form>
            <div>
                <Form className={style.containerFormAccount}>
                    <p>Ainda não tem conta Seekup? Crie sua conta grátis</p>
                </Form>
            </div>
        </>
        );
}

