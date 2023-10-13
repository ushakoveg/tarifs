import './Users.scss'

export default function Users(props) {
  const cl = props.color
  return (
    <div className={cl}>
      <h2 className='name'>{props.name}</h2>
      <div className='period' >
      <h3 className='period__subtitle'>{props.valey}</h3>
      <h1 className='period__main'>{props.number}</h1>
      </div>
      <div className='long__background'>
      <h3 className='period__long'>{props.long}</h3>
      </div>
      <div className='details'>
        <div className='title__background'>
       <p className='details__title'>{props.speed}</p>
       </div>
       <div className='text__background'>
       <p className='details__text'>{props.text}</p>
       </div>
      </div>
    </div>
    
  )
}
