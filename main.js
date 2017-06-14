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
    // for (i = 0; i < data.results.length; i++) {
    //
    // let name = ((data.results[i].name.first) + " " + (data.results[i].name.last));
    // let emailAddress = data.results[i].email;
    // let street = data.results[i].location.street;
    // let cityInfo = ((data.results[i].location.city) + " " + (data.results[i].location.state) + " " + (data.results[0].location.postcode))
    // let picture = data.results[i].picture.medium;
    //
    //     return name;
    //     return emailAddress;
    //     return street;
    //     return cityInfo;
    //     return picture;
    //
    //



    let persons = data.results;
    // console.log(persons);

      function renderPeople(){
        return `
            ${persons.map(person => `
              <ul>
              <li>${person.picture.medium}</li>
              <li>${person.name.first + " " + person.name.last}</li>
              <li>${person.email}</li>
              <li>${person.location.street}</li>
              <li>${person.location.city + " " + person.location.state + " " + person.location.postcode}</li>
              <li>${person.phone}</li>
              </ul>
              
              `).join('')}
                `;

        }


          let markup = `
            <div class="customers">
                ${renderPeople(data.results)}
            </div>
              `

        document.body.innerHTML = markup;









// }

  })
});


// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
  // Your Code Goes Here
