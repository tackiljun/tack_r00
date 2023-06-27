import ProductDetail from "./ProductDetail";

const ProductList = () => {

    const products = [
        {pno:1, pname:'상품1', price:1000, img:'k01.jpg'},
        {pno:2, pname:'상품2', price:3000, img:'k02.jpg'},
        {pno:3, pname:'상품3', price:5000, img:'k03.jpg'},
        {pno:4, pname:'상품4', price:7000, img:'k04.jpg'},
        {pno:5, pname:'상품5', price:9000, img:'k05.jpg'}
      ]

    return ( 
        <ul className="productList">
            {products.map( p => 
                <ProductDetail key={p.pno} product={p} /> 
            )}
        </ul>
     );
}
 
export default ProductList;