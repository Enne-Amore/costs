import { v4 as uuidv4 } from 'uuid'

import style from './Projeto.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from "../layout/Loading"
import Container from '../layout/Container'
import ProjetosForm from '../projects/ProjetosForm'
import Mensagem from '../layout/Mensagem'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Projeto() {
  // Id
  const { id } = useParams()
  
  // Projeto específico
  const [project, setProject] = useState([])

  // Form de edição
  const [showProjetoForm, setShowProjetoForm] = useState(false)

  // Mensagens
  const [message, setMessage] = useState()

  // Tipo de mensagem
  const [type, setType] = useState()

  // Form de serviços
  const [showServiceForm, setShowServiceForm] = useState(false)

  // Serviços
  const [services, setServices] = useState([])

  // Chamada da API
  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProject(data)
      setServices(data.services)
    })
    .catch((err) => console.log(err))
  }, [id])

  // Salvar alterações
  function editPost(project) {
    setMessage('')

    // Validação do orçamento total
    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor que o custo do projeto!')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProject(data)
      setShowProjetoForm(false)
      setMessage('Edição realizada com sucesso!')
      setType('success')
    })
    .catch((err) => console.log(err))
  }

  function createService() {
    setMessage('')

    // Último serviço
    const lastService = project.services[project.services.length - 1]
    
    // Gerar ID
    lastService.id = uuidv4()

    // Valor de custo
    const lastServiceCost = lastService.cost

    // Soma de custos sendo o novo valor
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    // Máximo valor de validação
    if (newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado. Verifique o valor do serviço!')
      setType('error')
      project.services.pop()
      return false
    }

    // Adicionar service cost até project total cost
    project.cost = newCost

    // Atualizar project da API
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
      // Exibir os serviços
      console.table(data)
      console.table(data.services)
      setShowServiceForm(false)
    })
    .catch((err) => console.log(err))
  }

  // Remoção de serviços
  function removeService(id, cost) {
    setMessage('')
    
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id
    )

    const projectUpdated = project

    projectUpdated.services = servicesUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    // Atualizar project da API
    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectUpdated),
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProject(projectUpdated)
      setServices(servicesUpdated)
      setMessage('Serviço removido com sucesso!')
      setType('success')
    })
    .catch((err) => console.log(err))
  }

  // Mostrar form de edição
  function toggleProjetoForm() {
    setShowProjetoForm(!showProjetoForm)
  }
  
  // Mostrar form de serviço
  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  return (
    <>
      {project.name ? (
        <div className={style.project_details}>
          <Container customClass={"column"}>
            {message && <Mensagem type={type} msg={message} />}
            <div className={style.details_container}>
              <h1>Projeto: {project.name}</h1>

              {/* Botão de mostrar form de edição */}
              <button className={style.btn} onClick={toggleProjetoForm}>
                {!showProjetoForm ? 'Editar Projeto' : 'Fechar Edição'}
              </button>

              {/* Detalhes + Form de edição */}
              {!showProjetoForm ? (
                <div className={style.project_info}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  
                  <p>
                    <span>Total De Orçamento:</span> R${project.budget}
                  </p>

                  <p>
                    <span>Total Utilizado:</span> R${project.cost}
                  </p>
                </div>
              ): (
                <div className={style.project_info}>
                  <ProjetosForm
                    handleSubmit={editPost}
                    btnText={"Salvar Alterações"} 
                    projectData={project} 
                  />
                </div>
              )}
            </div>

            <div className={style.service_form_container}>
              <h2>Adicione um serviço:</h2>

              {/* Botão de mostrar serviços */}
              <button className={style.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
              </button>

              <div className={style.project_info}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText={"Adicionar Serviço"}
                    projectData={project}
                  />
                )}
              </div>
            </div>

            <h2>Serviços</h2>
            
            <Container customClass="start">
              {services.length > 0 ? (
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))
              ): (
                <p>Não há serviços cadastrados!</p>
              )}
            </Container>
          </Container>
        </div>
      ): (
        <Loading />
      )}
    </>
  )
}

export default Projeto
