# redux-playground

A [Redux](https://www.npmjs.com/package/redux) learning playground, broken up into parts (as branches):

- [`base`](https://github.com/trevordmiller/redux-playground/tree/base): Scaffolding, prior to adding any Redux stuff
- [`core`](https://github.com/trevordmiller/redux-playground/tree/core): Minimal Redux setup (TDD vanilla JS)
- [`scale`](https://github.com/trevordmiller/redux-playground/tree/scale): Additions on top of `core` ^ for scaling Redux apps easier (TDD vanilla JS)
- [`react-specific`](https://github.com/trevordmiller/redux-playground/tree/react-specific): A fork of `scale` ^ with optimizations for React apps using Redux and example components (React.js + UI bindings)

---

## Getting Started

1. Clone the project
1. Checkout one of the example branches ^
1. `npm install`
1. `npm start`

---

## Redux basics

### Benefits

Redux manages app state. It makes this dead simple because it embraces **one-way data flow** with a **functional programming approach** (pure functions, no side effects). This approach makes app state predictable and serializable - which means you can **test** it easily and use all sorts of cool developer tools like **hot reloading** and **time travel debugging**.

### How it works

**Redux has just three pieces: A store, actions, and reducers.**

1. All state is stored in a single **store** (immutable _object_).
1. The store can only be updated by a **reducer** (pure _function_) that returns the next state (ie `(state, action) => state`).
1. A reducer takes A) the store object (previous state) and B) an **action** (an _object_ that holds what _type_ of change should happen and any related data needed to do so).

#### Tips

- A store and action are both just objects. A reducer is just a function.
- A store has three methods: `store.subscribe()`, `store.dispatch(action)`, `store.getState()`.
- You can `subscribe` to a store manually or use bindings for your view layer (ie React, Angular etc) - _as is done in the `react-specific` branch_.
- As your app grows, you can break into more reducers and compose them together.
- Actions require a `type` property which usually holds a string constant (ie `DO_SOMETHING`) which describes how a reducer should create the next state object. Other than `type`, an action can contain any other properties; in the branches in this repo, the Flux action standard (which wraps other datå in a `payload` object) is being used.

_More detailed information can be found on the [Redux package docs](https://www.npmjs.com/package/redux)_

---

### Disclaimer

_This is not meant to replace the [excellent official Redux documentation](https://www.npmjs.com/package/redux). It has been built to give a condensed summary of what I learned from reading the docs. It also gives step-by-step setup examples (in layers) for review - starting with the MVP vanilla JS implementation; I hope this helps to show what is core "Redux" and what is tooling and other options on top of that, so that new users can solidify the core principles of Redux before mixing it with other tools commonly found in the ecosystem._

---

### License

MIT
