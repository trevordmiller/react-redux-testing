# redux-playground

A [Redux](https://www.npmjs.com/package/redux) example app, using a collection of quotes that can be liked/unliked.

The example app is broken up into types of implementation _(as branches)_:

1. [`1-minimum`](https://github.com/trevordmiller/redux-playground/tree/1-minimum): The minimum code required
1. [`2-scaling`](https://github.com/trevordmiller/redux-playground/tree/2-scaling): Recommended changes to `1-minimal` ^, so that the code scales easier
1.  [`3-react`](https://github.com/trevordmiller/redux-playground/tree/3-react): Recommended changes to `2-scaling` ^, for React apps and components

Comparing the diffs of the branches may be helpful to see how everything fits together:

- [Diff from `1-minimum` to `2-scaling`](https://github.com/trevordmiller/redux-playground/compare/1-minimum...2-scaling)
- [Diff from `2-scaling` to `3-react`](https://github.com/trevordmiller/redux-playground/compare/2-scaling...3-react)

---

## Getting Started

1. Clone the project
1. Checkout one of the example branches ^
1. `npm install`
1. `npm start`

---

### Benefits of using Redux

Redux manages app state. It makes this dead simple because it embraces **one-way data flow** with a **functional programming approach** (pure functions, no side effects). This approach makes app state predictable and serializable - which means you can **test** it easily and use all sorts of cool developer tools like **hot reloading** and **time travel debugging**.

---

### How Redux works

**Redux has just three pieces: A store, actions, and reducers.**

1. All state is stored in a single **store** (immutable _object_).
1. The store can only be updated by a **reducer** (pure _function_) that returns the next state (ie `(state, action) => state`).
1. A reducer takes A) the store object (previous state) and B) an **action** (an _object_ that holds what _type_ of change should happen and any related data needed to do so).

---

#### Tips for using Redux

- A store and action are both just objects. A reducer is just a function.
- A store has three methods: `store.subscribe()`, `store.dispatch(action)`, `store.getState()`.
- You can `subscribe` to a store manually or use bindings for your view layer (ie React, Angular etc) - _as is shown in the `3-react` branch ^_.
- Actions require a `type` property which usually holds a string constant (ie `DO_SOMETHING`) which describes how a reducer should create the next state object. Other than `type`, an action can contain any other properties; in the branches in this repo, the Flux action standard (which wraps other datå in a `payload` object) is being used.
- As your app grows, you can do some things to help it scale, _as is shown in the `2-scaling` branch ^_
  - Use action "creators" (pure factory functions) to create actions.
  - Bind action creators to automatically dispatch.
  - Use a constants file for action types.
  - Break your main reducer function into smaller reducers and compose them together.

_More detailed information can be found on the [Redux package docs](https://www.npmjs.com/package/redux)_

---

##### Disclaimer

_This is not meant to replace the [excellent official Redux documentation](https://www.npmjs.com/package/redux). It has been built to give a condensed summary of what I learned from reading the docs. It also gives step-by-step setup examples (in layers) for review - starting with the MVP vanilla JS implementation; I hope this helps to show what is core "Redux" and what is tooling and other options on top of that, so that new users can solidify the core principles of Redux before mixing it with other tools commonly found in the ecosystem._

---

##### License

MIT
