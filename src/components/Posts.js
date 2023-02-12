import Post from './Post'

const arr = [
    {nome:"Gi",img:"https://i.imgur.com/8bRSi66.jpg",imgpost:"https://i.imgur.com/ZZp25hL.png",pcurt:"9gag",pcurtimg:"assets/img/9gag.svg",qtdcut:"1059"},
    {nome:"Elton John",img:"https://people.com/thmb/XgdWexQFqC1OcaZXuKeiyTDihTQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(782x0:784x2)/elton-john-3-7dcdaa4c80164da8908910828536f7ab.jpg",imgpost:"https://www.otempo.com.br/image/contentid/policy:1.1994323:1530738891/image-image-jpg.jpg?f=3x2&w=1224",pcurt:"animal",pcurtimg:"assets/img/barked.svg",qtdcut:"23"},
    {nome:"Ranger",img:"https://www.esports24horas.com.br/wp-content/uploads/2020/05/49511964367_efa9a5a6f2_c.jpg", imgpost:"https://pbs.twimg.com/media/FoKTpCsX0AA2cR_?format=jpg&name=small",pcurt:"dog",pcurtimg:"assets/img/meowed.svg",qtdcut:"78"}
]

export default function Posts() {
    return (
        <div  class="posts">
            
        {arr.map((f) => <Post nome={f.nome} img={f.img} imgpost={f.imgpost} pcurt={f.pcurt} pcurtimg={f.pcurtimg} qtdcut={f.qtdcut}/>)}
           
        </div>
    )

}

