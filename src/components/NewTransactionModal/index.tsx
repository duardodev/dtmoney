import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

import closeIcon from '../../assets/close.svg'
import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'

import { api } from '../../services/api'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type
    }
    
    api.post('/transactions', data)
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor" 
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => { setType('deposit') }}
            isActive={type == 'deposit'}
            activeColor="green"
          >
            <img src={incomeIcon} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button" 
            onClick={() => { setType('withdraw') }}
            isActive={type == 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeIcon} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}