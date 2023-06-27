import styled from "styled-components";

const WhiteDiv = styled.div`
    background-color : white
`
const ImgT = styled.img`
    width: 150px;
    height: 150px;
`

const ProductDetail = ({product}) => {

    const {pno, pname, price, img} = product

    return ( 
        <li>
            <WhiteDiv>PNO {pno}</WhiteDiv>
            <div>NAME {pname}</div>
            <div>{price}</div>
            <div><ImgT src={ require(`../images/${img}`) } /></div>
            <button>BUY</button>
        </li>
     );
}
 
export default ProductDetail;