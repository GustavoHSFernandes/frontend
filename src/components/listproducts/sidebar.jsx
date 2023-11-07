import { Category } from "./category/category"
import { Price } from "./price/price"

export const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>


        <Category/>
        <Price/>
        <div className="search-input">
            <input
             type="text" 
             className="searchbar" 
             placeholder="Pesquisar"/>
        </div>

        </section>
    )
}