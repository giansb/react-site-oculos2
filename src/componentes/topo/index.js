import './style.css';
export default function Topo(){
    return(
        <header>
            <div className="limita-secao estilo-cab">
                <img src='./assets/logo.png'/>
                <nav>
                    <a link href="#produtos">PRODUTOS</a>
                    <a link href="#sobre">SOBRE</a>
                    <a link href="#contato">CONTATO</a>
                </nav>
            </div>
        </header>
    )
}