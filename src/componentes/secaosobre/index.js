import './style.css';
export default function SecaoSobre(){
    return (
        <section id='sobre' className='secao-sobre'>
            <div className="limita-secao">
                    <div>
                        <h1 className="subtitulo">QUEM SOMOS NÓS?</h1>
                        <p>Fundada em 2001, em Nova Iguacu - Rio de Janeiro, a Ótica vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                    </div>
                    <div className='boxes-sobre'>
                        
                            <img src="./assets/loja.png"/>
                       
                        <div className='box-sobre'>
                            <h2>NOSSAS FILIAIS</h2>
                            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                        </div>

                        <div className='box-sobre'>
                            <h2>ATENDIMENTO FLEXIVEL</h2>
                            <p>Nossa equipe possui é treinada para te atender</p>
                        </div>

                        <img src="./assets/atendimento.png"/>

                    </div>
            </div>
        </section>
    )
}