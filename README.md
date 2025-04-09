# Accelerate.Science Website

This is the website for [accelerate.science](https://accelerate.science) (to be rerouted)  
- [GitHub Repo](http://github.com/acceleratedscience/ad-website)  
- [GitHub Pages](https://acceleratedscience.github.io/ad-website)


<br>

## Development

Run the development server at [localhost:3000](http://localhost:3000)

```bash
npm run dev
```

<br>

## Stack

This is a [Next.js](https://nextjs.org/docs) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  
Here's an interactive [Next.js tutorial](https://nextjs.org/learn)

<br>

## Deployment

Deployment to GitHib pages happens automatically when changes are pushed to the `main` branch.

> [!NOTE]
> Local production build will be broken because all files and images get prepended with `/ad-website` to work on GitHub pages.

```bash
npm run build
```

Start command:

```bash
npm run start
```

<br>

## Hosting & Domain Name

<!-- Domain name is managed by IBM Webmaster Jerry Liao @jerryliao / jliao [at] ca.ibm.com  -->

This website is hosted on GitHub Pages at [acceleratedscience.github.io/openad-website](https://acceleratedscience.github.io/openad-website). Our domain is registered with Google domains and managed by the IBM webmaster, with a [CNAME](main/CNAME) record pointing to `acceleratedscience.github.io` per [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).

> [!WARNING]
> There is a local [CNAME](main/CNAME) file connecting the domain name to our GitHub pages website hardcoded in the `/public` folder. Usually this file is automatically added by GitHub Pages, but because our build process will rebuild the `gh-pages` branch every time, the GitHub-provided file gets erased with every update. Hardcoding the file circumvents that. [More info](https://github.com/mkdocs/mkdocs/issues/1257).