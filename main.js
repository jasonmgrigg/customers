// console.log("Howdy!");

fetch('https://randomuser.me/api/?results=12&nat=us')
  .then(
    function(response) {
      if(response.status !== 200) {
        console.log("looks like there is a problem, fix it!" + response.status);
        return
      }


// for (i = 0, i < data.length, i++) {
//   if
// }


    response.json().then(function(data){
      console.log(data.results);
    for (i = 0; i < data.results.length; i++) {

    let name = ((data.results[i].name.first) + " " + (data.results[i].name.last));
    let emailAddress = data.results[i].email;
    let street = data.results[i].location.street;
    let cityInfo = ((data.results[i].location.city) + " " + (data.results[i].location.state) + " " + (data.results[0].location.postcode))
    let picture = data.results[i].picture.medium;

        console.log(name);
        console.log(emailAddress);
        console.log(street);
        console.log(cityInfo);
        console.log(picture);



function renderName(){
  return `
  <ul>
    ${name.map(name => `<li>${name}`).join('')}
    </ul>
    `;
}

let markup = `
  <div class="customers">
    <p>${name}</p>

    ${renderName(data.results)}

    </div>
    `

document.body.innerHTML = markup;

}

  })
});


// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
  // Your Code Goes Here
