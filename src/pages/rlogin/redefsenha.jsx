import { Link } from 'react-router-dom'
import { useState } from 'react';
import { LayoutComponents } from '../../components/login';

export const NewPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title"> Redefinir senha </span>

                <div className="wrap-input">
                    <input
                        className={newPassword !== "" ? "has-val input" : "input"}
                        type="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nova senha"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={confirmPassword !== "" ? "has-val input" : "input"}
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Repita a nova senha"></span>
                </div>

                <div className="container-login-form-btn">
                    <Link className="login-form-btn" to="/login" >Redefinir senha</Link>
                </div>
            </form>
        </LayoutComponents>
    )
}