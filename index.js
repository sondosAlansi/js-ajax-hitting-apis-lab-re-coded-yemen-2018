function getRepositories(){
  let user=document.getElementById('user').value;
  console.log(user);
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/:user/repos');
  req.send();
}