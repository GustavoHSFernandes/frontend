import { Link } from 'react-router-dom'
import { useState } from 'react';
import { LayoutComponents } from '../../components/login';
import { Navbar } from '../../components/header/navbar';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <LayoutComponents>
            
            <form className="login-form">
                <span className="login-form-title"> Bem Vindo! </span>

                <div className="wrap-input">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Senha"></span>
                </div>

                <div className="container-login-form-btn">
                    <Link className="login-form-btn" to="/" >Login</Link>
                </div>

                <div className="text-center">
                    <span className="txt1">Não possui conta? </span>
                    <Link className="txt2" to="/register">
                        Criar conta
                    </Link>
                </div>

                <div className="text-center">
                    <span className="txt1">Esqueceu a senha? </span>
                    <Link className="txt2" to="/rlogin">
                        Recuperar senha
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    )
}