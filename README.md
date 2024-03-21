Welcome ! This is my entry for the technical test at PhantomBuster. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Make sure to have Node.js (LTS) installed before you start.

## Scripts

To run the dev server at [http://localhost:3000](http://localhost:3000) :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To run the test suite with Jest (1 suite, 4 tests)

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

## Features

This project features a dashboard with filters to navigate your phantoms. Phantoms can be filtered by launch type and/or category in a persistent way through the url. Each phantom in the list has a display of its basic info (name, categorie(s), launch type and time) as well as a "Manage" dropdown menu with three options : rename, duplicate, delete. A phantom can only be duplicated if the user has leftover slots. Clicking on a phantom brings you to a detail page. Data is loaded through a fake api with an artificial delay, which is cached in the localStorage. Loading states and special cases (eg. empty phantom list) notify the user of the state of the app. The reload button allows you to clear the cache and reload via the api. Each page has keyboard navigation. The project can also be visited on mobile.

Enjoy reviewing this as much as I enjoyed coding it!
