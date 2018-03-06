const Metalsmith = require("metalsmith");
const collections = require("metalsmith-collections");
const layouts = require("metalsmith-layouts");
const markdown = require("metalsmith-markdown");

Metalsmith(__dirname)
    .metadata({
        sitename: "Project Longtail"
    })
    .source("./src")
    .destination("./build")
    .use(markdown())
    .use(collections({
        
    }))
    .build(error => {
        if (error) {
            throw error;
        }

        console.log("Build successful");
    });
