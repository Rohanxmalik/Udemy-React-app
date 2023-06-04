const transaction = fetch("http://localhost:5000/") //get
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fetch("http://localhost:5000/", {
  //post
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => console.log(res.status))
  .catch((error) => console.log(error));
