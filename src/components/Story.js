export default function Story(props){
    console.log(props)
    return(
        <div class="story">
            <div class="img">
              <img src={props.img} alt={props.nome}/>
            </div>
            <div class="usuario">
              {props.nome}
            </div>
          </div>
    )
}