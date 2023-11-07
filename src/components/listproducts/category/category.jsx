import "./category.css";

export const Category = () => {
    return (
      <div>
        <h2 className="sidebar-title">Categorias</h2>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Todos
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Cereais, Pães e Tubérculos
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Hortaliças
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Frutas
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Leguminosas
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Carnes e ovos
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Leite e derivados
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Óleos e gorduras
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Açúcares
          </label>
      </div>
    )
  }