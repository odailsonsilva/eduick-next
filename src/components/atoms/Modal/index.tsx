import ReactModal from 'react-modal'
import { FiX } from 'react-icons/fi'

import * as S from './styles'
import MediaMatch from 'components/molecules/MediaMatch'

interface ModalProps {
  isOpen: boolean
  onRequestClose?: () => void
  children: React.ReactNode
}

ReactModal.setAppElement('#__next')

const Modal = ({ isOpen, onRequestClose, children }: ModalProps) => {
  return (
    <S.Wrapper>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <MediaMatch greaterThan="medium">
          <S.ButtonClose onClick={onRequestClose}>
            <FiX size="24px" color="#fff" />
          </S.ButtonClose>
        </MediaMatch>
        {children}
      </ReactModal>
    </S.Wrapper>
  )
}

export default Modal
