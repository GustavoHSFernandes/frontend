import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/header/navbar";
import { Footer } from "../../components/footer";
import "./cart.css"

export const Cart = () => {
    return (
        <section class="h-100 h-custom">
            <Navbar />
            <div class="container py-2 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12">
                        <div
                            class="card card-registration card-registration-2"
                            style={{ borderRadius: "15px" }}
                        >
                            <div class="card-body p-0">
                                <div class="row g-0">
                                    <div class="col-lg-12">
                                        <div class="p-5">
                                            <div class="d-flex justify-content-between align-items-center mb-5">
                                                <h1 class="fw-bold mb-0 text-black">Carrinho</h1>
                                                <h6 class="mb-0 text-muted">items</h6>
                                            </div>
                                            <hr class="my-4" />

                                            : (
                                            <h2 className="text-center">
                                                O carrinho está vazio.
                                            </h2>
                                            )

                                            <div class="pt-5 d-flex">
                                                <h6 class="mb-0">
                                                    <Link to={"/products"}>
                                                        <i class="fas fa-long-arrow-alt-left me-2"></i>
                                                        Voltar aos produtos.
                                                    </Link>
                                                </h6>
                                                <h6 className="mx-auto">
                                                    Valor total :
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}