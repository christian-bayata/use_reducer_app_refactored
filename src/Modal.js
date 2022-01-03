import React, {useEffect} from 'react'

const Modal = ({modalContent, closeModal}) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 3000)
    })
    
    return (
        <div>
            <p className="modal">{modalContent}</p>          
        </div>
    )
}

export default Modal
