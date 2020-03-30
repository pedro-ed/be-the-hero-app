import './style.css'
import React , {useState} from 'react'
import logoimg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'



export default function Registrer(params) {
  const history = useHistory()
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [whatsapp,setWhatsapp] = useState('')
  const [city,setCity] = useState('')
  const [uf,setUf] = useState('')


  async function hadleRegistrer(e) {
   
    e.preventDefault()
    const data={
      name,
      email,
      whatsapp,
      city,
      uf,
    }
    console.log(data)
     try {
      const responce = await api.post('ongs',data)
      alert(`Seu ID de acesso: ${responce.data.id}`)
      history.push('/')
     } catch (error) {
      alert(`erro no cadastro, por favor reavalie os dados fornecidos e tente novamente...`)       
     }
 
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoimg} alt="logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma que ajuda pessoas a
            encontrarem os casos da sua ong
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
           Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={hadleRegistrer} >
        <input 
          placeholder="Nome da ONG"
          value={name}
          onChange={e => setName(e.target.value)}
          />
        <input type="email" placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input placeholder="WhatsApp"
          value={whatsapp}
          onChange={e => setWhatsapp(e.target.value)}
        />
        <div className="input-group">
        <input placeholder="Cidade"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input placeholder="UF" style={{width:"80"}}
          value={uf}
          onChange={e => setUf(e.target.value)}
        
        />
        </div>
        <button className="button" type="submit" >Cadastrar</button>

        </form>
      </div>
    </div>
  )
}
