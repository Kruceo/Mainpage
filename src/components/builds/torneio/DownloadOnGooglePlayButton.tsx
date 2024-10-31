import { useEffect, useState } from "react";
import "./DownloadOnGooglePlayButton.less";

export default function (props: { href?: string, classname?: string, topText?: string, bottomText?: string }) {
    const [fontSize, setFontSize] = useState(120)
    const [classID] = useState("play-" + Math.round(Math.random() * 2000).toString(16))
    useEffect(() => {
        const el = document.querySelector("." + classID);

        if (!el) return

        setFontSize(el.getBoundingClientRect().width * 0.75)
    }, [])
    return <>
        <a href={props.href} className={`${classID} google-play-button ${props.classname}`}>
            <div>
                <p style={{ fontSize: fontSize * 0.65 + "%" }}>
                    {props.topText ?? "Disponível no"}
                </p>
                <p style={{ fontSize: fontSize + "%" }}>{props.bottomText ?? "Google Play"}</p>
            </div>
        </a>
    </>
}