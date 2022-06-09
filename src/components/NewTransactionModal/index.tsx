import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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
      <Container>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="titulo"
        />

        <input
          type="numero"
          placeholder="valor"
        />

        <input
          type="text"
          placeholder="categoria"
        />

        <button type="submit"> Cadastrar</button>
      </Container>
    </Modal>
  )
}