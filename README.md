
# Github Repositories

Showcase your GitHub repositories in your static website, featuring links to your GitHub repo and up-to-date stars, and fork.

To get started, checkout <https://peterhdd.github.io/ghrepos/>!

## Bug tracker

Have a bug? Please create an issue here on GitHub at <https://github.com/peterhdd/ghrepos/issues>.

## Development

Clone the project and install dependencies before getting started. GitHub Buttons require Node.js, Ruby, and Bundler for local development.

```shell
npm i
bundle i
```

The GitHub buttons source code is split across three files in `src/`—the HTML, CSS, and JS. We use inline-source-cli and html-minifer to include it all in the compiled [`docs/github-repo.html`](docs/github-repo.html) file. To build this file:

```shell
npm run build
```

The `https://ghbtns.com/` site is built with Jekyll. After installing the dependencies, you can run a local server:

```shell
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000` to browse locally.

## Inspired by

* [Github Buttons](https://ghbtns.com/)

## Twitter account

Keep up to date on announcements and more by following Peter on Twitter, [@peterndev](https://twitter.com/peterndev).

## Author

**Peter Haddad**

* <https://twitter.com/peterndev>
* <https://github.com/peterhdd>

## Copyright and license

Copyright 2021 Peter Haddad. Released under the [Apache 2.0 License](LICENSE).
