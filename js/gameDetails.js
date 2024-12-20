import {  gameUi} from "./uigame.module.js";
export class Details{
    constructor(id){
        this.gameUi=new gameUi()
        this.apiDelails(id)
    }
    async apiDelails(id){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const apiDet=await fetch(`https://www.freetogame.com/api/game?id=${id}`)
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
