import { useLocation } from "react-router-dom"
import Mensagem from "../layout/Mensagem"
import style from './Projetos.module.css'
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProjetosCard from "../projects/ProjetosCard"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"

function Projetos() {
  // Projetos
  const [projetos, setProjetos] = useState([])
  
  // Tela de carregamento
  const [removeLoading, setRemoveLoading] = useState(false)

  // Mensagem
  const [projectMessage, setProjectMessage] = useState('')

  useEffect(() => {
    // Chamada da API
    fetch('http://localhost:5000/projects', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(resposta => resposta.json())
    .then(data => {
      console.table(data)
      setProjetos(data)

      // Mostrar tela de carregamento
      setRemoveLoading(true)
    })
    // Prevenção de erro
    .catch(err => console.log(err))
  }, [])

  // Mensagem de conclusão sucedida
  const location = useLocation()
  let message = ''

  if (location.state) {
    message = location.state.message
  }

  // Remoção de projeto
  function removerProjeto(id) {
    setProjectMessage('')

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(resp => resp.json())
    .then(() => {
      // Remoção de projeto
      setProjetos(projetos.filter((projeto) => projeto.id !== id))

      // Mensagem de remoção
      setProjectMessage('Projeto removido com sucesso!')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={style.projeto_container}>
      {/* Em cima dos projetos */}
      <div className={style.titulo_container}>
        <h1>Projetos Criados</h1>

        <LinkButton to={"/NovoProjeto"} text={"Criar Projeto"} />
      </div>

      {/* Mensagem de projeto criado */}
      {message && <Mensagem type={"success"} msg={message} />}

      {/* Mensagem de projeto removido */}
      {projectMessage && <Mensagem type={"success"} msg={projectMessage} />}

      {/* Os projetos em si */}
      <Container customClass="start">
        {/* Consulta de dados de cada projeto */}
        {projetos.length > 0 && 
          projetos.map((projeto) => (
            <ProjetosCard
              id={projeto.id}
              name={projeto.name} 
              budget={projeto.budget}
              // category={projeto.category.name}
              key={projeto.id}
              handleRemove={removerProjeto}
            />
          ))
        }

        {/* Tela de carregamento de projetos */}
        {!removeLoading && <Loading />}

        {/* Tela de nenhum projeto cadastrado */}
        {removeLoading && projetos.length === 0 && (
          <p> Não há projetos cadastrados. </p>
        )}
      </Container>
    </div>
  )
}

export default Projetos
