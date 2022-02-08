const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const config = require('./config');
const axios = require('axios');
const { json } = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.get("/", (req, res) => {
    // let repoInfo;
    // axios({
    //     method: "get",
    //     url: `https://api.github.com/users/${config.githubUsername}/repos`,
    //     headers: {
    //         Authorization: `Bearer ${config.githubToken}`,
    //         "Content-Type": "application/json",
    //         "Accept": "application/vnd.github.mercy-preview+json" // MUST ADD TO INCLUDE TOPICS
    //     }
    // }).then(response => {
    //    repoInfo = response.data;
    //    res.render('index', {
    //     repoInfo: repoInfo
    // });
    // })
    // .catch(err => {
    //     console.log(err);
    // });
    res.render('index')
})

app.get("/projects", (req, res) => {
        let repoInfo;
    axios({
        method: "get",
        url: `https://api.github.com/users/${config.githubUsername}/repos`,
        headers: {
            Authorization: `Bearer ${config.githubToken}`,
            "Content-Type": "application/json",
            "Accept": "application/vnd.github.mercy-preview+json" // MUST ADD TO INCLUDE TOPICS
        }
    }).then(response => {
       repoInfo = response.data;
       res.render('projects', {
        repoInfo: repoInfo
    });
    })
    .catch(err => {
        console.log(err);
    });
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})