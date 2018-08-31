// const app = "I don't do much.";
//
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';
//
// xhr.onload = function () {
//   console.log(xhr.response);
// }
//
// xhr.onerror = function () {
//   console.log('Booo');
// }
//
// xhr.send();

const token = 0b01478c58a25613b257221f9d05854cca6e1562;
fetch('https://api.github.com/john-raber/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
