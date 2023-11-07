import "./style.css"

export const pImage = () => {
    return (
        <section className="p-options">
            <img
                className="p-img-icon"
                alt=""
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
            <button className="p-btns">
                <div className="p-btns-1">Editar Perfil</div>
            </button>
            <button className="p-btns">
                <div className="p-btns-1">Sair</div>
            </button>
        </section>
    )
}