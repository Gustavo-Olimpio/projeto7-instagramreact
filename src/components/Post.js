import { useState } from "react"

export default function Post(props){
    const [nome,setNome]= useState("bookmark-outline")
    const [coracao,setCoracao]= useState("heart-outline")
    const [cor,setCor]= useState("color:#FF0000")
    const [num,setNum]= useState(0)
    
    return(
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.img} alt={props.nome} />
                        {props.nome}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img onClick={heart2} src={props.imgpost} alt="gato-telefone" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon class={cor} onClick={heart} name={coracao}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon onClick={bookmark} name={nome}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.pcurtimg} alt="respondeai" />
                        <div class="texto">
                            Curtido por <strong>{props.pcurt}</strong> e <strong>outras {Number(props.qtdcut)+num} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
    function bookmark(){
        if (nome==="bookmark-outline"){
            setNome("bookmark")
        } else {
            setNome("bookmark-outline")
        }
    }
    function heart(){
        if (coracao==="heart-outline"){
            setCoracao("heart")
            setCor("vermelho")
            setNum(1)
        } else {
            setCoracao("heart-outline")
            setCor("")
            setNum(0)
        }
    }
    function heart2(){
        if (coracao==="heart-outline"){
            setCoracao("heart")
            setCor("vermelho")
            setNum(1)
        } else {
            setCoracao("heart")
            setCor("vermelho")
            setNum(1)
        }
    }
}