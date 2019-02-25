import React from 'react'
import { Markup } from 'interweave';

export default props => {
    // const limpa = (caminho) => {
    //     let str = caminho
    //     return "http://testephp.itec.al.gov.br/" + str.substring(str.search("imgNoticias"));
    // }

    const renderRows = () => {
        const list = props.list || []
        return list.map(item => (
            <div className="noticia" key={item.id}>
            {/* <img className="noticia-destaque" src={ limpa(item.imagemCapa) }  alt="destaque" /> */}
            {/* <img className="noticia-destaque" src={ item.imagemCapa }  alt="destaque" /> */}

            <div className="noticia-info">
                <p className="noticia-chapeu">{item.chapeu}</p>
                <p className="noticia-titulo">{item.titulo}</p>
                <p className="noticia-bigode">{item.intro}</p>
                {/* <p className="">{item.texto}</p> */}
                <Markup content={item.texto} /> 
            </div>
        </div>
        ))
    }

    return (
        <div>
            {renderRows()}
        </div>
        
    );
}