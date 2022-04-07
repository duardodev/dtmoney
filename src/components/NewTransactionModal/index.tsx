import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'

import closeIcon from '../../assets/close.svg'
import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'

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
        <img src={closeIcon} alt="Fechar modal" />
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

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeIcon} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outcomeIcon} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

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