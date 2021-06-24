// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const p = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve("The modal gets displayed");
    }, 2000)
    
}).then((result) => { 
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "modal__content" :
        case "close" :
            modal.style.display = "none";
            break;
        };
    })
    console.log("done", result)
}).finally(() => { console.log("Done finally!") });