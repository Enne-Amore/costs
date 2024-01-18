import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
          <h1>
            Boas-Vindas ao <span>Costs</span>
          </h1>

          <p>
            Comece a gerenciar projetos agora mesmo!
          </p>
          
          {/* Botão de criar projeto */}
          <LinkButton to={"/NovoProjeto"} text={"Criar Projeto"} />

          {/* Imagem representativa */}
          <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home
