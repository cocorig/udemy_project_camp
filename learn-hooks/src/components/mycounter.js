//커스텀 훅 이용!
import useCounter from "../hooks/counterHook";

function Mycounter() {
//count 상태와 increment 함수를 가져와서 렌더링
    const [cnt, increment] =  useCounter(100);//useCounter 훅을 사용
    return (
        <div>
            <p>카운트 : {cnt} </p>
            <button onClick={increment}>증가</button>
        </div>
    )
}
export default Mycounter;
 