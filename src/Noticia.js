import React from 'react'

export default props => {
    const limpa = (caminho) => {
        let str = caminho
        return "http://10.1.15.86:8000/" + str.substring(str.search("imgNoticias"));
    }

    const renderRows = () => {
        const list = props.list || []
        return list.map(item => (
            <div className="noticia" key={item.id}>
            <img className="noticia-destaque" src={ limpa(item.imagemCapa) }  alt="destaque" />
            <div className="noticia-info">
                <p className="noticia-chapeu">{item.chapeu}</p>
                <p className="noticia-titulo">{item.titulo}</p>
                <p className="noticia-bigode">{item.intro}</p>
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