import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';


interface HeaderProps {
  onOpentransactionModal: () => void
}
export function Header({ onOpentransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button type="button" onClick={onOpentransactionModal}>
          Nova Transação
        </button>


      </Content>
    </Container>
  )
}