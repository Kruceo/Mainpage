import "./Smartphone.less";
import phoneImg from '../../../assets/phone.png'
import phoneMaskImg from '../../../assets/phone_mask.png'
export default function (props: { screenImage: string }) {
    return <div className="smartphone">
        <div className="screen" style={{ maskImage: `url(${phoneMaskImg})` }}>
            <div className="inner" style={{backgroundImage:`url(${props.screenImage})`}}>
                {/* <img src={props.screenImage} alt="" /> */}
            </div>

        </div>
        <img className="mockup" src={phoneImg} alt="" />
    </div>
}