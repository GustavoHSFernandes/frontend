import React from "react";
import './styles.css';

export const Footer = () => {
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>Sobre</h4>
                        <a href="/empty">
                            <p>Food Market</p>
                        </a>
                        <a href="/empty">
                            <p>Blog</p>
                        </a>
                        <a href="/empty">
                            <p>FAQ</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Contato</h4>
                        <a href="/empty">
                            <p>Solução de problemas</p>
                        </a>
                        <a href="/empty">
                            <p>Segurança</p>
                        </a>
                        <a href="/empty">
                            <p>Compras</p>
                        </a>
                        <a href="/empty">
                            <p>Vendas</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Minha conta</h4>
                        <a href="/profile">
                            <p>Resumo</p>
                        </a>
                        <a href="/empty">
                            <p>Favoritos</p>
                        </a>
                        <a href="/empty">
                            <p>Vender</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Em breve</h4>
                        <a href="/empty">
                            <p>Twitter</p>
                        </a>
                        <a href="/empty">
                            <p>Facebook</p>
                        </a>
                        <a href="/empty">
                            <p>Instagram</p>
                        </a>
                    </div>
                </div>

            <hr></hr>
            
            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} FoodMarket
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/empty"><div><p>Termos e Condições</p></div></a>
                    <a href="/empty"><div><p>Privacidade</p></div></a>
                    <a href="/empty"><div><p>Segurança</p></div></a>
                    <a href="/empty"><div><p>Contato</p></div></a>
                </div>
            </div>
            </div>
        </div>
    )
}