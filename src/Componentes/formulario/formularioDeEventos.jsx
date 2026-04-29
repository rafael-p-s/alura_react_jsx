import CampoDeFormulario from "../campoDeFurmulario";
import TituloFormulario from "../titulo_formulario";

export default function FormularioDeEvento() {
    return (
        <>
            <form className='form-evento'>
                <CampoDeFormulario
                    htmlFor="nome"
                    labelText="Qual o nome do evento?"
                    type="text"
                    id="nome"
                    placeholder="Summer dev hits"
                />
                <CampoDeFormulario
                    htmlFor="idade"
                    labelText="Qual a idade para participara?"
                    type="number"
                    id="idade"
                    placeholder="18"
                />
            </form>
        </>
    )
}