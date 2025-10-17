const form = document.getElementById('contact-form');
const result = document.getElementById('result');

form.onsubmit = (event) => {
  event.preventDefault(); // prevent page reload

  const formData = new FormData(event.currentTarget);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
    .then(async (response) => {
      const jsonResponse = await response.json();

      if (response.ok) {
        result.style.display = "block";
        result.innerHTML = "<h4>Successfully Submitted!</h4>";
      } else {
        result.style.display = "block";
        result.innerHTML = `<h4>${jsonResponse.message}</h4>`;
      }
    })
    .catch(error => {
      result.style.display = "block";
      result.innerHTML = "<h4>Something went wrong. Please try again.</h4>";
      console.error(error);
    })
    .finally(() => {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
};


// document.getElementById("contact-form").onsubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const result = document.getElementById('result');
//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     console.log(json);
//     fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: json
//     })
//         .then(async (response) => {
//             let json = await response.json();
//             if (response.status == 200) {
//                 // result.innerHTML = "Form submitted successfully";
//             } else {
//                 console.log(response);
//                 result.innerHTML = json.message;
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             result.innerHTML = "Something went wrong!";
//         })
//         .then(function () {
//             form.reset();
//             setTimeout(() => {
//                 result.style.display = "none";
//             }, 3000);
//         });

// };

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const object = Object.fromEntries(formData);
//   const json = JSON.stringify(object);
//   result.innerHTML = "Please wait..."

//     fetch('https://api.web3forms.com/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: json
//         })
//         .then(async (response) => {
//             let json = await response.json();
//             if (response.status == 200) {
//                 result.innerHTML = "Form submitted successfully";
//             } else {
//                 console.log(response);
//                 result.innerHTML = json.message;
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             result.innerHTML = "Something went wrong!";
//         })
//         .then(function() {
//             form.reset();
//             setTimeout(() => {
//                 result.style.display = "none";
//             }, 3000);
//         });
// });