import { useNavigate } from 'react-router-dom'
import ProjetosForm from '../projects/ProjetosForm'
import styles from './NovoProjeto.module.css'

function NovoProjeto() {
  const navigate = useNavigate()

  function createPost(project) {
    // Inicialização de cost e de serviço
    project.cost = 0
    project.services = []

    // Conexão com a API
    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project),
    })
      // Pegar as respostas da API
      .then((resposta) => resposta.json())
      .then((dado) => {
        console.table(dado)

        // Redirecionamento para a outra página
        navigate('/projetos', {state: {message: 'Projeto criado com sucesso!'}})
      })
      // Prevenção de erro
      .catch((erro) => console.log(erro))
  }

  return (
    <div className={styles.novoprojeto_container}>
      <h1>Criar Projeto</h1>

      <p>
        Inicie o projeto para depois adicionar os serviços
      </p>
      
      {/* Formulário de criação de projeto */}
      <ProjetosForm handleSubmit={createPost} btnText={"Criar Projeto"} />
    </div>
  )
}

export default NovoProjeto
