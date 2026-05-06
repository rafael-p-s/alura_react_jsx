import './index.css'

export default function ListaSuspensa({ name, labelText, itens}) {
    return (<>
        <label htmlFor={name} className="label_lista">{labelText}</label>
        <select
            id={name}
            name={name}
            className='lista_suspensa'
            defaultValue=""
        >
            <option value="" disabled>Selecione uma opção</option>
            {itens.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.nome}
                </option>
            ))}
        </select>
    </>)
}