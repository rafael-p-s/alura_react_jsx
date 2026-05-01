import './index.css'
export default function GlobalButton({ type, text, id, cssBtn }) {
    return (
        <>
            <button type={type} id={id} className={cssBtn}>{text}</button>
        </>
    )
}