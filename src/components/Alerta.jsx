import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import '../styles/Alert.css'

const Alerta = () => {
		
	const handleClick = () => {
		document.querySelector('.toast').classList.remove('active')
		setTimeout(() => {
			document.querySelector('.progress').classList.remove('active')
		}, 300)
	}

	return (
		<div className='toast'>
			<div className="toast-content">
				<FaCheck className="check" />
				<div className="message">
					<span className="text text-1">Success</span>
					<span className="text text-2">Your message has been sent successfully</span>
				</div>
			</div>
			<MdCancel className="close" onClick={handleClick}/>
			<div className="progress"></div>
		</div>
	)
}

export default Alerta