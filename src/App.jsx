import './App.css'
import { CardEvento } from './Componentes/CardEvento'
import FormularioDeEvento from './Componentes/formulario/formularioDeEventos'
import Tema from './Componentes/Temas'
// No react componentes são FUNÇÕES

const temas = [
  {
    id: 1,
    nome: "Front-End"
  },
  {
    id: 2,
    nome: "Back-End"
  },
  {
    id: 3,
    nome: "I.A"
  },
  {
    id: 4,
    nome: "Cloud"
  },
]

const eventos = [
  {
    capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
    tema: temas[0],
    data: new Date(),
    titulo: 'Mulheres no Front'
  }
]

function adicionarEvento(e) {
  eventos.push(e)
  console.log("eventos => ", eventos)
}

export default function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section className='section_banner'>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento}/>
      {temas.map((tema) => (
        <section className="section_temas" key={tema.id}>
          <Tema tema={tema} />

          {eventos.map((item,index) => {
            return (
              <CardEvento key={index} evento={item} />
            )
          })}
        </section>
      ))}
    </main>
  )
}

