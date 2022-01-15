import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
        <h1 className="pl-title">پروژه های من</h1>
        <p className="pl-desc">
          میتونی پروژه های من و به همراه سورس کدام ببینی ، خوشحال میشم تو گیت هاب بهم ستاره بدی :)
        </p>
      </div>
      <div className="pl-list">
      {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
        </div>
    )
}

export default ProductList
