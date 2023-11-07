import "./price.css"

export const Price = () => {
    return(
        <div className="ml">
            <h2 className="sidebar-title price-title">Preço</h2>

            <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className="checkmark"></span>R$1 - R$10
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className="checkmark"></span>R$10 - R$20
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className="checkmark"></span>R$20 - R$35
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className="checkmark"></span>Mais de R$50
            </label>

        </div>
    )
}