import Story from './Story'
const arraystories=[
        {nome: "9gag", img: "assets/img/9gag.svg"},
        {nome: "meowed", img: "assets/img/meowed.svg"},
        {nome: "barked", img: "assets/img/barked.svg"},
        {nome: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg"},
        {nome: "wawawicomics", img: "assets/img/wawawicomics.svg"},
        {nome: "respondeai", img: "assets/img/respondeai.svg"},
        {nome: "filomoderna", img: "assets/img/filomoderna.svg"},
        {nome: "memeriagourmet", img: "assets/img/memeriagourmet.svg"}
]


export default function Stories(){
return (
        <div class="stories">
          {arraystories.map((f) => <Story nome={f.nome} img={f.img}/>)}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
)
}