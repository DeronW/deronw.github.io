const fs = require("fs");
const chalk = require("chalk");

const log = t => {
    process.stdout.clearLine(); // clear current text
    process.stdout.cursorTo(0); // move cursor to beginning of line
    process.stdout.write(chalk.green(new Date().getTime() + "-" + t));
};

fs.watch("src", (eventType, filename) => {
    log(`event type is: ${eventType}`);
    if (filename) {
        log(`filename provided: ${filename}`);
    } else {
        log("filename not provided");
    }
});
