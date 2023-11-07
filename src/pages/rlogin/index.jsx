import { Link } from 'react-router-dom'
import { useState } from 'react';
import { LayoutComponents } from '../../components/login';

export const RLogin = () => {
    const [email, setEmail] = useState("");
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title"> Esqueceu a senha? </span>
                <div className="text-center">
                    <h1>Informe um email e enviaremos um link para recuperação da sua senha.</h1>
                </div>
                <div className="wrap-input">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Digite seu Email"></span>
                </div>

                <div className="container-login-form-btn">
                    <Link className="login-form-btn" to="/mailsend">Enviar email</Link>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui uma conta? </span>
                    <Link className="txt2" to="/login">
                        Faça login
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    )
}