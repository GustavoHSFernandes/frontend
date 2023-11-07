import "./style.css"

export const Recommended = () => {
    return(
        <div>
            <h2 className="recommended-title">Recomendados</h2>
            <div className="recommended-flex">
                <button className="btns">Todos</button>
                <button className="btns">Mercado1</button>
                <button className="btns">Mercado2</button>
                <button className="btns">Mercado3</button>
                <button className="btns">Mercado4</button>
            </div>
        </div>
    )
}