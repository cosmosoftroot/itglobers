/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import logo from './assets/logo.png'
import M from 'materialize-css'
import './styles/main.css'

function App() {

  const [menu] = useState([
    {id: 1,
      name: "Viva Air"
    },
    {id: 2,
      name: "Avianca"
    },
    {id: 3,
      name: "Satena"
    },
    {id: 4,
      name: "Wingo"
    },
    {id: 5,
      name: "Latam"
    },
  ])

  const[company, setCompany] = useState(null)
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[phone, setPhone] = useState('')
  const[age, setAge] = useState('')
  const[modalI, setModalI] = useState(null)
 
  let sidenav = null;
  let modal = null;

  useEffect(()=>{
    M.Sidenav.init(sidenav);
    let instanceModal = M.Modal.init(modal);
    setModalI(instanceModal)   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function handleClick(name, sidenav){
    setCompany(name)
  }  
 
  function sendForm(e){
    e.preventDefault()
    
    console.log('-- Send data --')
    console.log({name,email,phone,age})
    
    modalI.open()
    setTimeout(()=>{
      modalI.close()
      resetForm()
    },5000)
  }

  function resetForm(){
    setName('')
    setPhone('')
    setEmail('')
    setAge('')
  }
  
  return (
  <>
    <header>
      <nav className="container purple lighten-1 z-depth-2 ">
        <a href="index.html" className="brand-logo valign-wrapper">
          <img src={logo} alt="Blog logo" className="responsive-img " />
        </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right valign-wrapper hide-on-med-and-down">
          {menu.map((item, key)=>(
            <li key={key}>
              <a href="#" onClick={()=>handleClick(item.name)}>
              {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <ul ref={(menu => sidenav = menu)} className="sidenav sidenav-close" id="mobile-demo">
      {menu.map((item, key)=>(
        <li key={key}>
          <a href="#" onClick={()=>handleClick(item.name)}>
          {item.name}
          </a>
        </li>
      ))}
    </ul>
    <main className="container">
      <div className="card-panel">
        <section className="container">
          <div className="row title-register">
            <div className="col s12">
              <h3 className="center-align">Hola Bienvenido!</h3>
            </div>
            {company!==null && (
            <div className="col s12">
              <h5 className="center-align">Sabemos que quieres viajar por {company}</h5>
            </div>
            )}
          </div>
        </section>
        <form onSubmit={sendForm}>
          <div className="row section">
            <div className="input-field col s12 m6 ">
              <input id='name' value={name} onChange={(e)=>setName(e.target.value)} type="text" className="validate" required/>
              <label htmlFor='name'>Nombre Completo</label>
              <span className="helper-text" data-error="Campo requerido" />
            </div>    
            <div className="input-field col s12 m6 ">
              <input id='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="validate" required/>
              <label htmlFor='email'>Email</label>
              <span className="helper-text" data-error="Ingrese un email válido" />
            </div>           
          </div>
          <div className="row section">
            <div className="input-field col s12 m6 ">
              <input id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" className="validate" required/>
              <label htmlFor='phone'>Celular</label>
              <span className="helper-text" data-error="Campo requerido" />
            </div>    
            <div className="input-field col s12 m6 ">
              <input id='age' value={age} onChange={(e)=>setAge(e.target.value)} type="number" className="validate" required min={18} max={100} />
              <label htmlFor='age'>Edad</label>
              <span className="helper-text" data-error="La edad debe estar entre los 18 y 100 años" />
            </div>           
          </div>
          <div className="section">
            <div className="row">
              <div className="col s12">
                <div className="center-align">
                  <button type='submit' className="btn waves-effect waves-light">Enviar
                      <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
    <div id="modal1" className="modal" ref={(modalBox => modal = modalBox)}>
      <div style={{textAlign: 'center'}}>
        <i  className="material-icons medium" style={{color:'green'}}>check</i>
      </div>
      <div className="modal-content">
        <h5 className='center'>Tu información fue enviada con éxito<br/> Estaremos en contacto contigo</h5>
      </div>
    </div>
   
    <footer className="page-footer container purple  lighten-1 valign-wrapper">
      <div className="row">
        <div className="col s12">
          <h6 className='center'>
            Desarrollado por Iván Darío Sánchez Jiménez
          </h6>
        </div>
      </div>                    
    </footer>
  </>
  )
}

export default App;
