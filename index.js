const Metalsmith = require("metalsmith");
const collections = require("metalsmith-collections");

Metalsmith(__dirname)
    .metadata({
        sitename: "Project Longtail"
    })
    .source("./src")
    .destination("./build")
    .use(collections({
        
    }))
    .build(error => {
        if (error) {
            throw error;
        }

        console.log("Build successful");
    });
