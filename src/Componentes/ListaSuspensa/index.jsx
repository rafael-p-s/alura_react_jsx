import './index.css'

export default function ListaSuspensa({ name, labelText }) {
    return (<>
        <label htmlFor={name} className="label_lista">{labelText}</label>
        <select className='lista_suspensa'>
            <option value=""></option>
        </select>
    </>)
}