import Modal from "../Modal/Modal"
import { useModalContext } from "../../../utils/context/ModalContext"

const ModalAddPost = () => {

    const { isModalOpen, closeModal } = useModalContext()
  return (
    <Modal
    isOpen={isModalOpen}
    onClose={closeModal}
    >Hello add</Modal>
  )
}

export default ModalAddPost
