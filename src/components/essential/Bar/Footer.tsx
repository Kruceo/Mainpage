import { locale } from "../../../lib/lang"
import "./Footer.less"
export default function Footer(){
    return <div id="footer">
        <p>&copy; {locale.footer.copyright}</p>
    </div>
}