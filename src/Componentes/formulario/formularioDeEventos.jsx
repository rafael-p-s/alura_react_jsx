import GlobalButton from "../button";
import CampoDeFormulario from "../campoDeFurmulario";
import ListaSuspensa from "../ListaSuspensa";
import TituloFormulario from "../titulo_formulario";
import './index.css'
export default function FormularioDeEvento() {
    return (
        <>
            <form className='form-evento'>
                <TituloFormulario titulo="Preencha para criar um evento" />
                <CampoDeFormulario
                    name="nome"
                    labelText="Qual o nome do evento?"
                    type="text"
                    placeholder="Summer dev hits"
                />
                <CampoDeFormulario
                    name="date"
                    labelText="Data do evento"
                    type="date"
                />
                <ListaSuspensa labelText="Data do Evento" name="evento"/>
                <GlobalButton
                    type="submit"
                    text="Criar Evento"
                    id="btn_submit"
                    cssBtn="form_btn"
                />
            </form>
        </>
    )
}