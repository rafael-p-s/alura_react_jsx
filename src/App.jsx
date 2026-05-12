import { useState } from 'react'
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


function adicionarEvento(evento) {
  /* eventos.push(e)
  console.log("eventos => ", eventos) */
  setEventos([...eventos, evento])
}

export default function App() {
  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]);

  function adicionarEvento(evento) {
    /* eventos.push(e)
    console.log("eventos => ", eventos) */
    setEventos([...eventos, evento])
  }
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section className='section_banner'>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      <section className="container">
        {temas.map((tema) => {
          const eventosDoTema = eventos.filter(
            evento => evento.tema.id === tema.id
          )

          if (eventosDoTema.length === 0) {
            return null
          }

          return (
            <section className="section_temas" key={tema.id}>
              <Tema tema={tema} />

              <div className="eventos">
                {eventosDoTema.map((item, index) => (
                  <CardEvento
                    key={index}
                    evento={item}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

