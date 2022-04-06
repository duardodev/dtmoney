import Modal from 'react-modal'
import { Container } from './styles'

import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="modal-close"
      >  
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder="Título" 
        />

        <input 
          type="number" 
          placeholder="Preço" 
        />

        <input 
          type="text" 
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}