import './style.css';

export default function SecaoContato(){
    return(
        <section id='contato' className='secao-contato'>
            <div className="limita-secao">
            <div >
                <h2 className="subtitulo">FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>
            <div className='boxes-contato'>
                <div className='box-contato'>
                    <h3>Contato</h3>
                    <div>
                        <div className='box-contato-cont'>
                            <img src="./assets/local.png"/><span>Nova Iguacu, RJ</span>
                        </div>
                        <div className='box-contato-cont'>
                            <img src="./assets/telefone.png"/><span>(21) 9999-9999</span>
                        </div>
                        <div className='box-contato-cont'>
                            <img src="./assets/email.png"/><span>contato@oticavida.com</span>
                        </div>
                    </div>
                </div>
                <div className='box-contato'>
                    <h3>Nossas Redes Sociais</h3>
                    <div className='box-contato-cont'>
                        <img src="./assets/fb.png"/><span>/OticaVida</span>
                    </div>
                    <div className='box-contato-cont'>
                        <img src="./assets/ig.png"/><span>@oticavidarj</span>
                    </div>
                    <div className='box-contato-cont'>
                        <img src="./assets/tt.png"/><span>@oticavidarj</span>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}