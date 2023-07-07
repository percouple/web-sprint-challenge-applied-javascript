import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // Doc Creations
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainerDiv = document.createElement("div");
  const imageDiv = document.createElement("img");
  const span = document.createElement("span")

  // Classlist changes/Other additions
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = article.headline;
  authorDiv.classList.add("author");
  imgContainerDiv.classList.add("img-container");
  imageDiv.setAttribute("src", article.authorPhoto);
  span.textContent = "By " + article.authorName;

  // Appendings
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainerDiv);
  imgContainerDiv.appendChild(imageDiv);
  authorDiv.appendChild(span);

  cardDiv.addEventListener("click", (event) => {
    console.log(article.headline)
  })
  return cardDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5001/api/articles`)
    .then((response) => {
      const getSelector = document.querySelector(selector);
      const articles = Object.entries(response.data.articles);

      // Loop for articles array
      articles.forEach((articleGroupWithTitle) => {
        let articleGroup = articleGroupWithTitle[1];
        console.log(articleGroupWithTitle);

        // Loop for each topic array
        for (let i = 0; i < articleGroup.length; i++) {
          console.log(articleGroup[i]);

          // articleGroup[i].forEach((element) => {
            getSelector.appendChild(Card(articleGroup[i]))
          // })
        }
      })
      return getSelector
    })
    .catch(err => {
      console.log(err)
      console.log("Whoops - a - Daisy");
    })
}

export { Card, cardAppender }
