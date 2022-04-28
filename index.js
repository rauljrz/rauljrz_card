#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:raul.jrz@gmail.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Ok, bye.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green.bold("Raul Juarez") + chalk.white.bold(" / @rauljrz") ,
    work: `${chalk.white("Senior Software Developer")} ${chalk
        .hex("#2b82b2")
        .green.bold("")}`,
    blog: chalk.blue.bold("http://socktoaster.com/") + chalk.whiteBright("blog"),
    github: chalk.gray.bold("https://github.com/") + chalk.green("rauljrz"),
    linkedin: chalk.gray.bold("https://linkedin.com/in/") + chalk.whiteBright("rauljrz"),
    web: chalk.cyan.bold("http://rauljrz.me"),
    npx: chalk.green.bold("npx") + " " + chalk.white.bold("rauljrz"),

    labelWork:     chalk.white.bold("       Work:"),
    labelBlog:     chalk.white.bold("       Blog:"),
    labelGitHub:   chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb:      chalk.white.bold("        Web:"),
    labelCard:     chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelBlog}  ${data.blog}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            ""
        )}`,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "cyan"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());
