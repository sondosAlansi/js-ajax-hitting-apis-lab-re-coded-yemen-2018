function getRepositories(){
  let user=document.getElementById('user').value;
  
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}