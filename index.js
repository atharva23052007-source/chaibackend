require('dotenv').config();

const express = require('express');
const app = express();
const port = 4000;
const githubData = {
  "login": "atharva23052007-source",
  "id": 266713529,
  "node_id": "U_kgDOD-W5uQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/266713529?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/atharva23052007-source",
  "html_url": "https://github.com/atharva23052007-source",
  "followers_url": "https://api.github.com/users/atharva23052007-source/followers",
  "following_url": "https://api.github.com/users/atharva23052007-source/following{/other_user}",
  "gists_url": "https://api.github.com/users/atharva23052007-source/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/atharva23052007-source/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/atharva23052007-source/subscriptions",
  "organizations_url": "https://api.github.com/users/atharva23052007-source/orgs",
  "repos_url": "https://api.github.com/users/atharva23052007-source/repos",
  "events_url": "https://api.github.com/users/atharva23052007-source/events{/privacy}",
  "received_events_url": "https://api.github.com/users/atharva23052007-source/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Atharva Amol Pawar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-03-09T11:04:00Z",
  "updated_at": "2026-06-13T20:12:21Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/twitter", (req, res) => {
    res.send("athu!");
})

app.get("/login", (req, res) => {
    res.send("<h1>Please login at azalea</h1>");
})

app.get("/youtube", (req, res) => {
    res.send("<h2>Chai aur Code</h2>");
})

app.get("/github", (req,res) => {
  res.json(githubData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});