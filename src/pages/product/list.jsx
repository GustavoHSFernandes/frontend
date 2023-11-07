import React from "react";


import '../../components/listproducts/style.css'
import { Navbar } from "../../components/header/navbar";
import { Recommended } from "../../components/listproducts/recommended";
import { Sidebar } from "../../components/listproducts/sidebar";
import { Footer } from "../../components/footer";
import { Card } from "../../components/listproducts/card";
import { Layout } from "../../components/listproducts/layout";


export const ListProducts = () => {
    return (
        <Layout>
            <section className="card-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </Layout>
    )
}