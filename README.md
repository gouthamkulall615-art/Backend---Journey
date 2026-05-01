# Node.js Backend Learning Repository

This repository contains everything I worked on while learning backend development with Node.js, Express, and MongoDB. It is organized by topic and follows a chapter-based progression, so you can follow along from scratch or jump directly to whatever you need.

---

## What is in this repo

**chp1, chp2, chp3** — These are the starting chapters covering Node.js fundamentals. If you are new to Node.js, start here. Each folder builds on the previous one.

**ExpressCrashCourse** — A hands-on introduction to Express.js. Covers setting up a server, defining routes, handling requests and responses, and working with middleware. Good reference if you want to understand how Express works before jumping into a full project.

**MongoDB** — Examples and practice files focused on connecting to MongoDB, performing CRUD operations (create, read, update, delete), and working with Mongoose for schema modeling.

**Authentication** — Covers user authentication from the ground up. This includes things like registering users, hashing passwords, handling login, and protecting routes. This was added last, so it assumes familiarity with the earlier topics.

---

## How to use this repo

You do not need to go through every folder in order, but the recommended path if you are starting fresh is:

1. Start with chp1 through chp3 to get comfortable with Node.js basics
2. Move to ExpressCrashCourse to learn how to build a server
3. Go through MongoDB to understand how to store and retrieve data
4. Finish with Authentication to learn how to handle users securely

Each folder has its own files you can run locally. Make sure you have Node.js installed before getting started.

---

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)
- MongoDB installed locally, or a free MongoDB Atlas account for the cloud option

---

## Getting started

Clone the repository and navigate into whichever folder you want to explore:

```bash
git clone https://github.com/gouthamkulall615-art/<repo-name>.git
cd <folder-name>
npm install
node <filename>.js
```

Replace the repo name and file names with the actual ones inside each folder.

---

## Who this is for

This repo is primarily a personal learning journal, but it is structured in a way that others learning the same stack can follow along and use it as a reference. If you are trying to learn how to build backend applications with Node.js, Express, and MongoDB, you should find something useful here.

---

## Notes

- Some folders may have incomplete implementations since this is an active learning repo
- Code comments are included in most files to explain what each part does
- If something does not work as expected, check that your Node.js and MongoDB versions are up to date
