# Accelerate.Science Website

This is the website for [accelerate.science](https://accelerate.science).  


## Development

Run the development server at [localhost:3000](http://localhost:3000)

```bash
npm run dev
```


## Stack

This is a [Next.js](https://nextjs.org/docs) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  
Here's an interactive [Next.js tutorial](https://nextjs.org/learn)

## Deployment

<!-- chmod +x deploy.sh -->
<!-- ./deploy.sh -->

Build command:

```bash
npm run build
```

Start command:

```bash
npm run start
```

<br>

> **Note:** Because we use `{ output: 'export' }` in [next.config.js](next.config.js), the website is built and served as static HTML pages. Hence the start command is not `next start` but `npx serve@latest out` see [package.json](package.json)


<!-- The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
