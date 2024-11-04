import "./Smartphone.less";
import phoneImg from '../../../assets/PHONE.svg'
import phoneMaskImg from '../../../assets/phone_mask.png'
export default function (props: { screenImage: string }) {
    return <div className="smartphone">
        <div className="screen" style={{ }}>
            <div className="inner" style={{backgroundImage:`url(${props.screenImage})`}}>
                {/* <img src={props.screenImage} alt="" /> */}
            </div>

        </div>
        <img className="mockup" src={phoneImg} alt="" />
    </div>
}