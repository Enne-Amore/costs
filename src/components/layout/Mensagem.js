import { useState, useEffect } from "react"
import style from './Mensagem.module.css'

function Mensagem({ type, msg }) {
  const [visible, setVisible] = useState(false)

    useEffect(() => {
    
      if (!msg) {
        setVisible(false)
        return
      }

      setVisible(true)

      const timer = setTimeout(() => {
        setVisible(false)
      }, 3000)

      return () => clearTimeout(timer)
    
    }, [msg])

  return (
    <>
      {visible && (
        <div className={`${style.mensagem} ${style[type]}`}> {msg} </div>
      )}
    </>
  )
}

export default Mensagem
