const HelloWorld = ({product}) => {


    const {pno, pname, price} = product || {pno:-1, pname:'', price:0}

    //console.log(props)
    // 얘는 if else가 없어.

    return ( 
        <div>
            <div>{pno}</div>
            <div>{pname}</div>
            <div>{price}</div>
            {price > 5000 ? <div>비싸다</div> : <div>싸다</div>}
        </div> 
    );
}
 
export default HelloWorld;