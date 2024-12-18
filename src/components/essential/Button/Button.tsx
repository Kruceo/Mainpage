import "./Button.less";

export default function (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    const { className, children, ...rest } = props
    return <button {...rest} className={`btn-s-1 ${className ?? ""}`}>
        <span>{children}</span></button>
}