import { useState } from "react"


export default function Usuario(){
  
  const [nome,setNome]= useState("catanacomics")
  const [img,setImg]= useState("assets/img/catanacomics.svg")   

  return(
    
        <div class="usuario">
          <img data-test="profile-image" onClick={mudavalorimg} src={img} alt="imagem de perfil"/>
          <div class="texto">
            <span>
              <strong data-test="name" >{nome}</strong>
              <ion-icon data-test="edit-name" onClick={mudavalor} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
    function mudavalor(){
      let n = prompt("Digite o nome alterado")
      if (n === null || n === "" || n === undefined){
        setNome(nome)
      } else {
        setNome(n)
      }
    }
    function mudavalorimg(){
      let imagem = prompt("Digite a imagem alterada")
      if ( imagem === null || imagem === "" || imagem === undefined || !new URL(imagem)){
        setImg(img)
      } else {
        setImg(imagem)
      }
    }
    
}
