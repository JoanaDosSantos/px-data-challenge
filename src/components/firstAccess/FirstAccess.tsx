import { useCard } from '@/hooks/Card';
import './FirstAccess.css';

interface IProps {
    closeModal: () => void
}
export function FirstAccessContent({ closeModal }: IProps) {
    const { loadMockedData } = useCard()

    function handleLoadAction(){
        loadMockedData()
        closeModal()
    }

    return (
        <section className='modal-content'>
            <div className='modal-content-info'>
                <h3 className='Title'>Bem vindo</h3>
                <span>Parece que essa é a sua primeira visita, para ajuda-lo preparei um carregamento de cards genérico, para que possa visualizar uma página populada de dados.</span>
                <span>Caso queria utilizar o carregamento selecione <strong className='confirm-text'>Carregar</strong>, caso contrário selecione <strong className='cancel-text'>Fechar</strong> e desfrute do projeto.</span>
            </div>

            <div className='modal-buttons-section'>
                <button onClick={handleLoadAction}>Carregar</button>
                <button onClick={closeModal}>Fechar</button>
            </div>
        </section>
    );
}