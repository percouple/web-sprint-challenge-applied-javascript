const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // Declarations
  const div = document.createElement("div");
  const dateDoc = document.createElement("span");
  const h1 = document.createElement("h1");
  const tempDoc = document.createElement("span");

  // Class declarations
  div.classList.add("header");
  dateDoc.classList.add("date");
  tempDoc.classList.add("temp");

  // TextContet
  dateDoc.textContent = date;
  h1.textContent = title;
  tempDoc.textContent = temp;

  // Order appends
  div.appendChild(dateDoc);
  div.appendChild(h1);
  div.appendChild(tempDoc);

  return div;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.

  const qSelector = document.querySelector(selector);
  
  const newHeader = Header("Bloom Stuff", "02/03/2003", "46");

  qSelector.appendChild(newHeader);

  return newHeader;

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }
