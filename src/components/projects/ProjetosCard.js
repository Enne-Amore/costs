import { Link } from 'react-router-dom'
import style from './ProjetosCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjetosCard({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={style.projeto_card}>
      <h4> {name} </h4>
      
      <p>
        <span>Orçamento:</span> R${budget}
      </p>

      <p className={style.categoria_texto}>
        <span className={`${style[category]}`}> {/* Bolinha */} </span> {category}
      </p>
      <div className={style.projeto_card_actions}>
        <Link to={`/projeto/${id}`}> 
          <BsPencil /> Editar 
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  )
}

export default ProjetosCard