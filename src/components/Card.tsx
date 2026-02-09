import './cards.css'

function Card({ children, theme = 'light' }) {
  return <div className={`cartao ${theme}`}>{children}</div>
}

export default Card
