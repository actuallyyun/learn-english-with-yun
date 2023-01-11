---
title: "Why isn't my image found? Deploy Next.js blog project to Vercel"
date: "2023-01-09"
---

![image-not-showing](/images/image-not-showing.jpg)

### Set The Scene

I followed the well-written `Next.js` blog project tutorial, created a blog, and deployed it to `Vercel`. The deployment was amazingly easy and fast. A real "one click". Comparing to what I had to do to deploy my `Django/Python` project to `Heroku`, the developer experience with `Next.js/Vercel` was next level goodness.

_However_, my images were not found.

Everything worked fine when I run `npm run dev` locally. However, both the profile picture that is rendered on index page and the 404 cat image of my custom 404 page were not found.

### What Went Wrong?

My first suspect was the path. The path worked fine locally, however, when the project was deployed, the path stopped working. I started by asking these two questions:

- What are uploaded to `Vercel` in deployment?
- What is the folder structure in deployment?

After some digging, here is what I found.

When set up the project for `Vercel` deployment, I indicated that it is a `Next.js` project. `Verel` then will run `next build` which is the `Next.js Build API` to generate a deployment version of my project for production.

[Please refer to the `Next.js` documentation for further information.](https://nextjs.org/docs/deployment)

According to the doc,

> This output is generated inside the .next folder:

During this process, static files are collected and uploaded for production.

`Next.js` can serve static files at the buildtime, and the files need to be under `public` folder that resides in the root directory. Files inside `public` can be referenced from the base URL(/)
in the project. ([For more info, see Static File Serving Documentationn](https://nextjs.org/docs/basic-features/static-file-serving))

For example, the 404 cat image that is in `public/images/404.jpeg` folder can be refered as such in the `404.js` file:

```
<Image
    priority
    src='/images/404.jpeg'
    height={400}
    width={400}
    alt="404cat" />
```

Initially, the path I used was `../../public/images/404.jpeg` which explains the image url after deployment:

`https://learn-english-with-yun.vercel.app/_next/image?url=%2F..%2Fpublic%2Fimages%2F404.jpeg&w=640&q=75`

### How to Fix it

The 404.jpeg was fixed by changing the path.

The profile picture of the index page worked, but same picture in each post page was not found. By comparing the url path,

Corret ✅
`https://learn-english-with-yun.vercel.app/_next/image?url=%2Fimages%2Fprofile.JPG&w=256&q=75`
Incorrect ❌
`https://learn-english-with-yun.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=128&q=75`

I noticed the difference.

The file name extension! `.JPG` instead of `.jpg`.

It's almost embarrasing after realizing it. But well, this is coding.
