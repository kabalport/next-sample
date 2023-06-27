
export default function About() {
    let 이름 = '개발자';
    return (
        <div>
            <h4 className="title">hi {이름}</h4>

        </div>
    )
}

function CartItem(props){
    return(
        <div className="cart-item">
            <p>{props.상품}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Banner(props){
    return(
        <h5>{props.content} 결제 행사중</h5>
    )
}

function Btn(props){
    return <button style={{background: props.color}}>버튼임</button>
}