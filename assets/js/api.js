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
  
        });
      }
    }).catch(function (err) {
      console.log(err);
    });
  }