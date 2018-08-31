const token = '69a7284a02f1d0ac02134c679f9ea756f3efdbc8'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
