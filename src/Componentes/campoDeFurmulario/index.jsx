import "./index.css"
export default function CampoDeFormulario({ name, labelText, ...inputProps }) {
    return (
        <>
            <fieldset className="campo-form">
                <label htmlFor={name} className="label">{labelText}</label>
                <input id={name} {...inputProps} className="campo-input" />
            </fieldset>
        </>
    )
}