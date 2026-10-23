# Remix API Documentation

This repo hosts the generated API documentation for [Remix](https://github.com/remix-run/remix) on GitHub Pages.

The [deploy workflow](.github/workflows/deploy.yml) checks out Remix at a release tag, generates and prerenders the docs from `docs/api`, and publishes the result with GitHub Pages. The Remix publish workflow triggers it on each release. To deploy by hand, run it from the Actions tab or with:

```sh
gh workflow run deploy.yml -R remix-run/remix-api-docs -f ref=remix@<version>
```

Older docs are available at their Git tags in the Remix repo.
