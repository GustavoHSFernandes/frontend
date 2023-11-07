import { LayoutComponents } from "../../components/login"
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { DatePicker } from "react-date-picker";

export const AddProduct = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [expiration, setExpiration] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title"> Adicionar Produto </span>

                <div className="wrap-input">
                    <input
                        className={name !== "" ? "has-val input" : "input"}
                        type="email"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Produto"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={quantity !== "" ? "has-val input" : "input"}
                        type="email"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Quantidade"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={expiration !== "" ? "has-val input" : "input"}
                        type="date"
                        value={expiration}
                        onChange={(e) => setExpiration(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Validade"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={category !== "" ? "has-val input" : "input"}
                        type="email"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Categoria"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={price !== "" ? "has-val input" : "input"}
                        type="password"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Preço"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={discount !== "" ? "has-val input" : "input"}
                        type="password"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Desconto"></span>
                </div>

                <div className="container-login-form-btn">
                    <Link className="login-form-btn" to="/products" >Adicionar Produto</Link>
                </div>
            </form>
        </LayoutComponents>
    )
}