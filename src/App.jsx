import './App.css'
import FormularioDeEvento from './Componentes/formulario/formularioDeEventos'
// No react componentes são FUNÇÕES



export default function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

