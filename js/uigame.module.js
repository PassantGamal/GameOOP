export class gameUi{
    displayGame(game){
     let cartona=''
     for(let i=0;i<game.length;i++){
        cartona+=` <div class="col-md-3 item">
            <div
              data-id="${game[i].id}"
              class="card h-100 bg-transparent"
              role="button"
            >
            <div class="inner card-body p-3">
            <img class="w-100" src="${game[i].thumbnail}" />
            <div class="text-white mt-2 d-flex justify-content-between">
            <h6 class="small">${game[i].title}</h6>
            <span class="badge text-bg-primary p-2">Free</span></div>
           <div class="card-text small text-center opacity-50 mt-3"> <p>${game[i].short_description.split(" ", 8)}</p>
            </div>
            </div>
            
            <div class="card-footer d-flex small-box justify-content-between">
            <span>${game[i].genre}</span>
            <span>${game[i].platform}</span>
            </div>
          </div>
          </div>`
                document.getElementById('cards').innerHTML=cartona;
     }
    }
    displayDetails(data){
      let cartonaDet=''
        cartonaDet+=`<div class="overlay position-absolute">
        <div class="container">
          <header class="hstack justify-content-between">
             <h1 class="text-center h3 py-4 text-white">Details Game</h1>
             <button class="btn-close btn-close-white" id="btnClose"></button>
          </header>
          <div class="row g-4" id="detailsContent">
    <div class="col-md-4">
    <img src="${data.thumbnail}" class="w-100" alt="image details">
  </div>
  <div class="col-md-8">
    <h3 class="text-white">Title:${data.title}</h3>
    <p>Category: <span class="badge text-bg-info">${data.genre}</span> </p>
    <p>Platform: <span class="badge text-bg-info">${data.platform}</span> </p>
    <p>Status: <span class="badge text-bg-info">${data.status}</span> </p>
    <p class="small">${data.description}</p>
    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}" >Show Game</a>
  </div>
    </div>
       </div>
      </div>`
      document.getElementById("over").innerHTML=cartonaDet
    }
}