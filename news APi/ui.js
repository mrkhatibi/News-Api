class UI{
    //show
    showmessage(message , className){
        //access to div
            const showmessages = document.querySelector('.showmessages')
        //create div
            const div = document.createElement('div')
        //add class and textcontent to div
            div.classList = className
            div.textContent = message
        //append div to show div
            showmessages.appendChild(div)
        //set time out to remove div
            setTimeout(() => {
                div.remove()
            }, 5000);
    }
    //show news method
     shownews(news){
        //access to result Div
        const result = document.querySelector('.result')

        const spinner = document.querySelector('#spinner')
        spinner.style.display = "block"
        setTimeout(() => {
            
            spinner.style.display = "none"
            
        }, 3000);
        
           setTimeout(() => {
            //create card for each news
        news.forEach(newsinfo => {
            result.innerHTML += `
           
        <div class="card col-4" >
            <img src="${newsinfo.urlToImage}" class="card-img-top" alt="image not found">
            <div class="card-body ">
              <h5 class="card-title">${newsinfo.title}<span class="badge badge-warning">${newsinfo.source.name}</span></h5>
              <p class="card-text">${newsinfo.description}</p>
              <a href="${newsinfo.url}" target = "_blank"class="btn btn-primary text-center col-md-8">Read</a>
            </div>
        </div>
        
            `});
           }, 3001);

    }
}