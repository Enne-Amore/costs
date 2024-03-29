import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjetosForm.module.css'

function ProjetosForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([])

  const [ project, setProject ] = useState(projectData || {})

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resposta) => resposta.json())
      .then((dado) => {
        setCategories(dado)
      })
      .catch((erro) => console.log(erro))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleCategory = (e) => {
    setProject({ 
      ...project, 
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
       type={"text"} 
       text={"Nome do projeto"} 
       name={"name"} 
       placeholder={"Insira o nome do projeto"}
       handleOnChange={handleChange}
       value={project.name ? project.name : ''}
      />
      
      <Input
       type={"number"} 
       text={"Orçamento do projeto"} 
       name={"budget"} 
       placeholder={"Insira o orçamento total"}
       handleOnChange={handleChange}
       value={project.budget ? project.budget : ''}
      />

      <Select
       text={"Selecione a categoria"}
       name={"categoria_id"}
       options={categories}
       handleOnChange={handleCategory}
       value={project.category ? project.category.id : ''}
      />
      
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjetosForm