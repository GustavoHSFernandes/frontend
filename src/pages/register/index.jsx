import { LayoutComponents } from "../../components/login"
import { useState } from 'react';
import { Link } from 'react-router-dom'

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title"> Cadastre-se </span>

                <div className="wrap-input">
                    <input
                        className={name !== "" ? "has-val input" : "input"}
                        type="email"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={phone !== "" ? "has-val input" : "input"}
                        type="email"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Telefone"></span>
                </div>

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
                    <Link className="login-form-btn" to="/login" >Cadastre-se</Link>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui conta? </span>
                    <Link className="txt2" to="/login">
                        Faça login
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    )
}