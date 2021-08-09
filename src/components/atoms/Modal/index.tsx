import ReactModal from 'react-modal'
import { FiX } from 'react-icons/fi'

import * as S from './styles'

interface ModalProps {
  isOpen: boolean
  onRequestClose?: () => void
  children: React.ReactNode
}

ReactModal.setAppElement('#root')

const Modal = ({ isOpen, onRequestClose, children }: ModalProps) => {
  return (
    <S.Wrapper>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <S.ButtonClose onClick={onRequestClose}>
          <FiX size="24px" color="#fff" />
        </S.ButtonClose>
        {children}
      </ReactModal>
    </S.Wrapper>
  )
}

export default Modal
