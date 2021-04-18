(function() {
  'use strict';

  // Read a page's GET URL variables and return them as an associative array.
  // Source: https://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
  function getUrlParameters() {
    var vars = [];
    var hash;
    var location = window.location;
    var hashes = location.href.slice(location.href.indexOf('?') + 1).split('&');

    for (var i = 0, len = hashes.length; i < len; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }

    return vars;
  }

  function buildRepo(repoInfo, unorderedList)
  {
    let list         = document.createElement("li");
    let upperDiv     = document.createElement("div");
    let repoUrl      = document.createElement("a");
    let repoDesc     = document.createElement("p");
    let repoMetaInfo = document.createElement("div");

    let star = document.createElement("a");
    star.innerHTML = `stars ${repoInfo.stargazers_count}`;
    star.href = repoInfo.stargazers_url;
    star.target = "_blank";
    star.setAttribute("class","info-url");

    let fork = document.createElement("a");
    fork.innerHTML = `forks ${repoInfo.forks_count}`;
    fork.href = repoInfo.forks_url;
    fork.target = "_blank";
    fork.setAttribute("class","info-url");
  
    repoMetaInfo.setAttribute("class","meta-info");
    repoMetaInfo.appendChild(star);
    repoMetaInfo.appendChild(fork);

    list.setAttribute("class","align-items");
    list.appendChild(upperDiv);

    upperDiv.setAttribute("class","align-repo");
    upperDiv.appendChild(repoUrl);
    upperDiv.appendChild(repoDesc);
    upperDiv.appendChild(repoMetaInfo);

    repoDesc.textContent = repoInfo.description;
    repoDesc.setAttribute("font-size","12px");
    repoDesc.setAttribute("class","repo-desc");

    repoUrl.setAttribute("class","url-design");
    repoUrl.href=repoInfo.html_url;
    repoUrl.target = "_blank";
    repoUrl.textContent = repoInfo.name;

    unorderedList.appendChild(list);
  }



  function jsonp(path) {
    var head = document.head;
    var script = document.createElement('script');

    script.src = path + '?callback=callback';
    head.insertBefore(script, head.firstChild);
  }

  let parameters = getUrlParameters();

  // Parameters
  let user = parameters.user;
  let stars = parameters.stars;


  // Constants
  var API_URL = 'https://api.github.com/';
  var REPO = "users" + '/' + user + '/'+"repos";

  window.callback = function(obj) {
    if (obj.data.message === 'Not Found') {
      return;
    }
    let arr = obj.data.filter(elem => elem.stargazers_count >= stars);

    var unorderedList = document.createElement("ul");
    unorderedList.setAttribute("class","style-list");

    arr.forEach(function(repoInfo) {
      buildRepo(repoInfo,unorderedList);
    }); 
    document.getElementById("container").appendChild(unorderedList); 
  };
    jsonp(API_URL + REPO);
  
})();



