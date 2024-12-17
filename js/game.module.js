import { gameUi } from "./uigame.module.js";
import {  Details} from "./gameDetails.js";
export  class Game{
    constructor(){
        this.getApi("mmorpg")
        document.querySelectorAll(".nav-item a").forEach((anchor_link)=>{
            anchor_link.addEventListener("click",(e)=>{
                document.querySelector(".nav-item .active").classList.remove("active");
                e.target.classList.add("active");
                this.getApi(e.target.getAttribute("data-category"))
                
            })
        })
        this.gameUi=new gameUi()
    }
    async getApi(cat) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '37ac52ad1amshcb46db9bb4603bdp1cd7c5jsne1fef65d68bb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }}
        const api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options)
    const response=await api.json();
   this.gameUi.displayGame(response)
   this.gteItemId();
   loading.classList.add("d-none");
    }
    gteItemId() {
        document.querySelectorAll(".card").forEach((item) => {
           item.addEventListener("click", () => {
              this.Details(item.dataset.id);
           });
        });
     }
  
     Details(idGame){
        const det= new Details(idGame);
        document.querySelector(".inner2").classList.add("d-none");
        document.getElementById("over").classList.remove("d-none");
     }
    
}


