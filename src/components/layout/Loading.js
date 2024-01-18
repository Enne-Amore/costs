import loading from '../../img/loading.svg'
import style from './Loading.module.css'

function Loading() {
  return (
    <div className={style.loader_container}>
      <img src={loading} alt="Tela De Carregamento" className={style.loader} />
    </div>
  )
}

export default Loading