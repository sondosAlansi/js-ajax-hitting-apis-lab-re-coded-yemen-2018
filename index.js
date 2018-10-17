function showRepositories() {
 var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(r => 
    '<li><a href="' + r.html_url + '">'
    + r.name + '</a> <a href="#" data-u="'+r.author+'" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">get Commits</a></li>')
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}
function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.full_name +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}
function getCommits(el) {
 const user=el.dataset.user;
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', 'https://api.github.com/repos/'+user+'/'+ name + '/commits');
  req.send();
}

function getRepositories(){
  let user=document.getElementById('user').value;
  
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/'+user+'/repos');
  req.send();
}