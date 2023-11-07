import { Link } from 'react-router-dom'
import { LayoutComponents } from '../../components/login';

export const EmailEnviado = () => {
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title"> Esqueceu a senha? </span>
                <div className="text-center">
                    <h1>Enviamos um email para @email com um link para você poder entrar novamente na sua conta.</h1>
                </div>

                <div className="text-center">
                    <Link className="txt2" to="/login">
                        Voltar a tela de login
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    )
}