import {  gameUi} from "./uigame.module.js";
export class Details{
    constructor(id){
        this.gameUi=new gameUi()
        this.apiDelails(id)
    }
    async apiDelails(id){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '37ac52ad1amshcb46db9bb4603bdp1cd7c5jsne1fef65d68bb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const apiDet=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
         const responseDet=await apiDet.json();
         this.gameUi.displayDetails(responseDet);
         loading.classList.add("d-none");
         this.closeBtn()
    }
    closeBtn() {
        const closeButton = document.getElementById("btnClose");
        const gamesElements = document.querySelector(".inner2");
        const detailsElement = document.querySelector(".overlay");
            closeButton.addEventListener("click", () => {
                gamesElements.classList.remove("d-none");
                detailsElement.classList.add("d-none");
            });
    }
    
}
