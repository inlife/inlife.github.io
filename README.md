# Homepage

Hello, this is my homepage. If you like it, you can use it as a reference. 

## Instructions

```sh
$ git clone git@github.com:inlife/inlife.github.io.git
```

```sh
$ npm i && npm run dev
```

## Exporting and publishing

Using next.js we can export our react application as a static thingy.
Which we will publish as a subtree to master branch after that.

```sh
$ npm run export
```
```sh
$ git add . && git commit -m "your message"
```
```sh
$ npm run publish
```

## Used technologies

* react
* next.js
