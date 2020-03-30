import React ,{useState} from 'react'
import './style.css'
import logoimg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'


export default function NewIncident(params) {
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')
  const history = useHistory()

  if (ongName == null || ongId == null) {
    history.push(`/`)
  }


  const [title,setTitle] = useState('')
  const [description,SetDescription] = useState('')
  const [value,setValue] = useState()

async function newIncident(e) {
  e.preventDefault()
  const data={
    title,
    description,
    value,
  }
   try {
    await api.post('incidents',data,{
      headers: { Authorization: ongId },
    })
    history.push('/profile')
   } catch (error) {
    alert(`erro no cadastro, por favor reavalie os dados fornecidos e tente novamente...`)       
   }
  
}


    return(
        <div className="new-insident-container">
      <div className="content">
        <section>
          <img src={logoimg} alt="logo" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encomtrar um herói para resolver isso
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Profile
          </Link>
        </section>
        <form onSubmit={newIncident} >
            <input placeholder="Titulo do caso" 
            value={title}
            onChange={e=>{setTitle(e.target.value)}}
            />
            <textarea  placeholder="Descrição"
            value={description}
            onChange={e=>{SetDescription(e.target.value)}}
            
            />
            <input type="number" placeholder="Valor em reais"
              value={value}
              onChange={e=>{setValue(e.target.value)}}
            />
           
            <button className="button" type="submit" >Cadastrar</button>
        </form>
      </div>
    </div>

    )
}
