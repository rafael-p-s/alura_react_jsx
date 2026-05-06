import GlobalButton from "../button";
import CampoDeFormulario from "../campoDeFurmulario";
import ListaSuspensa from "../ListaSuspensa";
import TituloFormulario from "../titulo_formulario";
import './index.css'
export default function FormularioDeEvento({ temas, aoSubmeter }) {

    function aoFormSubmetido(formData) {
        console.log("Form: ", formData)
        const evento = {

            capa: formData.get('capa_evento'),
            tema: temas.find((item) => {
                return item.id == formData.get('tema')
            }),
            data: new Date(formData.get('data_evento')),
            titulo: formData.get('titulo_evento')
        }
        aoSubmeter(evento)
    }

    return (
        <>
            <form className='form-evento' action={aoFormSubmetido}>
                <TituloFormulario titulo="Preencha para criar um evento" />
                <CampoDeFormulario
                    name="titulo_evento"
                    labelText="Qual o nome do evento?"
                    type="text"
                    placeholder="Summer dev hits"
                />
                <CampoDeFormulario
                    name="capa_evento"
                    labelText="Qual endereço da imagem de capa?"
                    type="text"
                    placeholder="http://..."
                />
                <CampoDeFormulario
                    name="data_evento"
                    labelText="Data do evento"
                    type="date"
                />
                <ListaSuspensa id="tema" labelText="Data do Evento" name="tema" itens={temas} />
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