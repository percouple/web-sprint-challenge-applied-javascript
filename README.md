# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In this challenge you will demonstrate your mastery of these skills by creating **an online Bloomtech newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding sprint.

You are not allowed to collaborate during the sprint challenge.

### Project Set Up

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not BloomTech's by mistake!)
- [ ] Implement the project on the main branch, committing changes regularly
- [ ] Push commits: `git push origin main`

## Project Instructions

### Introduction

You are going to create a Bloomtech Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Bloomtech Times](https://github.com/bloominstituteoftechnology/web-sprint-challenge-applied-javascript/blob/main/Assets/bloomtech-times.png)

### Instructions

- [ ] Navigate to the root of the project with your command line.
- [ ] Run `npm install` to download the dependencies listed in the `package.json` file.
- [ ] Run `npm start` to compile the project and serve it.
- [ ] Navigate Chrome to `http://localhost:3000`
- [ ] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [ ] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [ ] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [ ] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the *main* branch.
- [ ] Check Codegrade for automated feedback.

## Stretch Interview Questions

Demonstrate your understanding of this sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question.

1. What is the DOM?
    The DOM is what we call the javascript object of the html of our webpage. We can pull elements from it, modify them, and send them back using this object in JS. 

2. What is an event?
    An event is, in short, anything that occurs on a webpage. A go-to event would be mouse interactions with a webpage, such as clicking or scrolling with a scroll wheel, or, it can be more complex, like a page loading.

3. What is an event listener?
    An event listener is a javascript tool that we can use to trigger certain reactions from JS upon an event happening on our webpage. For instance, if the webpage is clicked, an event listener will need to be present in the attached JS code to "listen" for the click. It can then run a function or JS operation after receiving that signal. 

4. Why would we convert a NodeList into an Array?
    Only forEach works natively on Nodelists. We would convert a NodeList to an Array to get access to the rest of the commonly used array methods

5. What is a component?
    A component is most commonly a JS function that will construct certain parts of our DOM when information is passed into it. It will essentially contain the blueprint for how we want our component to affect the DOM, and will prevent us from hard-coding in assets. 
