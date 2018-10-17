function showRepositories() {
 var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(r => 
    '<li><a href="' + r.html_url + '">'
    + r.name + '</a> <a href="#"  data-repo="' +
        r.full_name +
        '" onclick="getCommits(this)">get Commits</a>  <a href="#" data-b="'+r.branches+'" onclick="getBranches()">get Branches</a></li>')
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}
function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.login +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}
function displayBranches () {
  const branches = JSON.parse(this.responseText);
  const branchList = `<ul>${branches
    .map(
      commit =>
        '<li><strong>' +
        commit.name +
        '</strong>  </li>'
       
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = branchList;
}

function getBranches (el) {
 
  const name ='branches';
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', 'https://api.github.com/repos/'+ name + '/branches');
  req.send();
}
function getCommits(el) {
 const user=el.dataset.user;
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', 'https://api.github.com/repos/'+ name + '/commits');
  req.send();
}

function getRepositories(){
  let user=document.getElementById('user').value;
  
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/'+user+'/repos');
  req.send();
}