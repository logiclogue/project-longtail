const Metalsmith = require("metalsmith");
const collections = require("metalsmith-collections");
const layouts = require("metalsmith-layouts");
const markdown = require("metalsmith-markdown");

console.log(Metalsmith.prototype);

Metalsmith(__dirname)
    .metadata({
        sitename: "Project Longtail"
    })
    .source("./src")
    .destination("./build")
    .use(collections({
        
    }))
    .use(markdown())
    .build(error => {
        if (error) {
            throw error;
        }

        console.log("Build successful");
    });
