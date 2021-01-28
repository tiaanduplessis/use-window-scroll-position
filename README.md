
# use-window-scroll-position
[![package version](https://img.shields.io/npm/v/use-window-scroll-position.svg?style=flat-square)](https://npmjs.org/package/use-window-scroll-position)
[![package downloads](https://img.shields.io/npm/dm/use-window-scroll-position.svg?style=flat-square)](https://npmjs.org/package/use-window-scroll-position)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/use-window-scroll-position.svg?style=flat-square)](https://npmjs.org/package/use-window-scroll-position)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> React hook to get current scroll position of the window

## Table of Contents

- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)

## Usage

```js
import {useWindowScrollPosition} from 'use-window-scroll-position'

const Nav = () => {
    const position = useWindowScrollPosition()
    console.log(position) // {x: ..., y: ...}
    return null
}
```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install use-window-scroll-position
$ # OR
$ yarn add use-window-scroll-position
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

mit 
    