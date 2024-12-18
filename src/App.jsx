import { useState } from 'react'

import IMCCalculado from './Components/CalculaImc.jsx'

import './main.css'

function App() {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')

    return (
        <>
            <h1>Calculadora IMC</h1> 
            <br />
            <p>O Índice de Massa Corporal (IMC) é uma medida que relaciona peso e altura para avaliar se uma pessoa está abaixo do peso, no peso ideal, com sobrepeso ou obesidade. 
            É uma ferramenta simples usada na saúde, mas não considera fatores como idade ou composição corporal.
            </p> <br />
            <p>Insira sua altura e peso para saber seu IMC</p>

            <input type="number" placeholder='Insira a sua altura em cm' required onBlur={(e) => setAltura(e.target.value)}/>
            <input type="number" placeholder='Insira o seu peso em kg' required onBlur={(e) => setPeso(e.target.value)}/>

            <IMCCalculado altura={altura} peso={peso} ></IMCCalculado>
        </>
    )
}

export default App