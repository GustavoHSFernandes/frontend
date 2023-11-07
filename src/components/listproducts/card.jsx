import { AiFillStar } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

export const Card = () => {
    return (
        <section className="card">
            <img src="https://diafoodservice.agilecdn.com.br/9522_1.jpg"
                alt="Food"
                className="card-img"
            />
            <div className="card-details">
                <h3 className="card-title">Arroz</h3>
                <section className="card-reviews">
                    <AiFillStar className="rating-star" />
                    <AiFillStar className="rating-star" />
                    <AiFillStar className="rating-star" />
                    <AiFillStar className="rating-star" />
                    <span className="total-reviews">4</span>
                </section>
                <section className="card-price">
                    <div className="price">
                        <del>R$20</del> 15
                    </div>

                    <div className="bag">
                        <BsFillCartPlusFill className="bag-icon" />
                    </div>
                </section>
            </div>
        </section>
    )
}