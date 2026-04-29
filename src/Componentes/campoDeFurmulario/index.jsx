import TituloFormulario from "../titulo_formulario";

export default function CampoDeFormulario({ htmlFor, labelText, type, id, placeholder }) {
    return (
        <>
            <fieldset>
                <TituloFormulario titulo="Preencha para criar um evento" />
                <label htmlFor={htmlFor}>{labelText}</label>
                <input type={type} id={id} placeholder={placeholder} />
            </fieldset>
        </>
    )
}