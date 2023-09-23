# eslint-plugin-same-group-constant

warn same group constant variables

## How this project was created

I used Yeoman and ESLint generator

```sh
npm install -g yo generator-eslint
yo eslint:plugin
```

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-same-group-constant`:

```sh
npm install eslint-plugin-same-group-constant --save-dev
```

## Usage

Add `same-group-constant` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["same-group-constant"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "same-group-constant/rule-name": 2
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

TODO: Run eslint-doc-generator to generate the rules list.

<!-- end auto-generated rules list -->
