import './App.css'
import {openModal, openModalAccount} from './components/openModal.jsx'

function App() {

  function handleOpenModal () {
    openModal()
  }  

  function handleOpenModal2 (){
    openModalAccount()
  }

  return (
    <>
      <div className='App'>
        <button onClick={handleOpenModal} >Abrir Modal</button>
        <button onClick={handleOpenModal2} >Abrir Modal</button>
      </div>
    </>
  )
}

export default App
