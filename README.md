# Infonomic Theme

Bullet proof theme detection and switching for Next.js (or other SRR framework with minor mods)

## Implementation

Our theme detector and switch determines theme settings based on:
1. preferences in localStorage, 
2. prefers-color-scheme user agent, 
3. followed by a default theme in that order.

We use localStorage for preferences and NOT cookies as cookies will impact your page caching strategy. You'll need to cache variants of every page for both themes as well as detect cookies in your reverse proxy and page cache mechanics.

Using localStorage however, means we need to use an early-detection JavaScript shim combined with suppressHydrationWarning in our document root HTML element.

## Getting started


```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

Infonomic Theme is free software licensed under the MIT license.

For full details, please refer to the [LICENSE](LICENSE) and [COPYRIGHT](COPYRIGHT) files in this repository.

Copyright © 2025 Infonomic Company Limited contributors. https://infonomic.io

### Major Contributors

* Anthony Bouch https://www.linkedin.com/in/anthonybouch/ anthony@infonomic.io 
* David Lipsky https://www.linkedin.com/in/david-lipsky-4391862a8/ david@infonomic.io 



