import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

Modal.setAppElement('*');
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    }
    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="titulo"
        />

        <input
          type="number"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
          placeholder="valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            // className={type === 'deposit' ? 'active' : ''}
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => { setType('deposit') }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => { setType('withdraw') }}
          >
            <img src={outcomeImg} alt="Saida" />
            <span>
              Saida
            </span>

          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          value={category}
          onChange={event => setCategory(event.target.value)}
          placeholder="categoria"
        />

        <button type="submit"> Cadastrar</button>
      </Container>
    </Modal>
  )
}