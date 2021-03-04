let postDiv3 = document.querySelector('#posts')
const btn_search = document.querySelector("#search")
const searchQuery = document.querySelector("#search_query")
var url = 'http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=a862f33fff6545a994a4d8bce20be778';

async function fetchNews(url) {
    const response = await fetch(url, {
        mode: 'cors',
    });
    const news = await response.json()
    return news;

}

fetchNews(url).then(news => {
    console.log(news);
});

function load_news() {
    fetchNews(url).then((posts) => {
        if (posts.status === "ok") {
            let articles = posts.articles
            let output = '';
            articles.forEach(function (post) {


                let img_src = "";

                post?.urlToImage || "./assets/img/hero-bg.jpg";
                let desc = post?.description || "";

                output += `
            <div class = "container">
            <div class="col-md-10 form-group mt-3 mt-md-2">
            <div class="row">
            <div class="card-group">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${img_src}"  alt="Card image cap">
            <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">${desc}</p> 
      <button class="btn btn-primary"><a href="${post.url}" target="_blank" style="color: white; ">Read more</a> </button>
    </div>
  </div>
  </div>

  </div>
  </div>     
      `
            ;
            });
        
      postDiv3.innerHTML = output;
    }
    }).catch(function (err) {
        console.log(err);
    });
}
function search() {
    console.log("Search entered");
    postDiv3.innerHTML = "";
    fetchNews(url).then(function (posts) {
      if (posts.status === "ok") {
        let articles = posts.articles
        //iterate over each post [100 posts]
        let output = '';
        articles.forEach(function (post) {
          console.log(searchQuery.value)
          if (post.title.toLowerCase().includes(searchQuery.value)) {
            console.log("Post Found")
            let img_src = post?.urlToImage || "./assets/img/hero-bg.jpg";
            let desc = post?.description || "";
  
  
            output += `
            <div class = "container">
            <div class="col-md-10 form-group mt-3 mt-md-2">
            <div class="row">
            <div class="card-group">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${img_src}"  alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${desc}</p>
          <button class="btn btn-primary"><a href="${post.url}" target="_blank" style="color: white; ">Read more</a> </button>
        </div>
      </div>
      </div>
    
      </div>
      </div>
                    `;
          }
        });
        postDiv3.innerHTML = output;
    }
  })
    .catch(function (err) {
      console.log(err);
    });
}