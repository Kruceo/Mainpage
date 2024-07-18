import "./OptionsButton.less"

export default function OptionsButton() {
    const barCount = 3
    return <div className="options-button">
        {
            "1 ".repeat(barCount).trim().split(" ").map(() => {
                return <div className="bar"></div>
            }
            )}
    </div>
}