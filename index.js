const Metalsmith = require("metalsmith");
const collections = require("metalsmith-collections");
const layouts = require("metalsmith-layouts");
const markdown = require("metalsmith-markdown");
const pug = require("metalsmith-pug");

Metalsmith(__dirname)
    .metadata({
        sitename: "Project Longtail"
    })
    .source("./src")
    .destination("./build")
    .use(collections({
        articles: "*.md"
    }))
    .use(markdown())
    .use(console.log)
    .use(layouts({
        directory: "templates"
    }))
    .build(error => {
        if (error) {
            throw error;
        }

        console.log("Build successful");
    });
