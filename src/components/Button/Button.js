import './Button.css'
const ShowAlert = ({ label }) => {
    alert(`A label desse botão é ${label}`)
}
const Button = ({ label }) => {
    return <button onClick={() => ShowAlert({ label })} className='btn'>{label}</button>
}
export default Button