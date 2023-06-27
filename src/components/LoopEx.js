
const LoopEx = () => {

    const arr = [1,2,3,4,5,6]

    const result = arr.map((ele,idx) => {
        if(ele % 2 === 0) {
            return <li key={idx}>{ele}</li>
        }
        
    })

    //if(  ele%2 === 0 ? <div>짝수</div> : <div>홀수</div> )
    

    return ( 
        <>
        <ul>
            {result}
        </ul>
        <hr/>
        
        </>
        
        // 중괄호를 하면 리턴이라는 키워드를 써줘야는데 중괄호사용을 안하면 리턴값이다. 
     );
}
 
export default LoopEx;