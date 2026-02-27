# 🚀 JavaScript Interview Prep — 15-Day Plan
> **Goal:** 20 questions/day × 15 days = 300 questions
> **Strategy:** Master the 20% of JS used 80% of the time
> **Total Days:** 15 | **Start Date:** 27-02-2026

---

## 📊 Highest ROI Topics (Priority Order)
```
Closures → this → Event Loop/Async → Array Methods → Prototypes
```
> Nail these 5 and you'll handle **70%+** of any JS interview.

---

## 📅 Day-by-Day Roadmap

---

### 🗓️ Days 1–2 | Foundations & Quirks
> *The stuff that trips everyone up*

- [ ] Data Types & `typeof`
- [ ] Type Coercion — implicit vs explicit
- [ ] `==` vs `===` (loose vs strict equality)
- [ ] `var` / `let` / `const` — differences
- [ ] Hoisting — variables & functions
- [ ] Temporal Dead Zone (TDZ)
- [ ] Scope — global, function, block

**Key Questions to Cover:**
- What is the output of `typeof null`?
- What happens when you access a `let` variable before declaration?
- How does hoisting differ between `var` and `function` declarations?

---

### 🗓️ Days 3–4 | Functions Deep Dive
> *Functions are first-class citizens in JS — know them inside out*

- [ ] First-class functions & higher-order functions
- [ ] Callbacks
- [ ] **Closures** ⭐ *(Most asked topic)*
- [ ] `call()`, `apply()`, `bind()` — differences & use cases
- [ ] Arrow functions vs Regular functions
- [ ] IIFE (Immediately Invoked Function Expressions)
- [ ] Pure functions & side effects

**Key Questions to Cover:**
- What is a closure? Give a real-world example.
- What is the difference between `call` and `apply`?
- Why can't arrow functions be used as constructors?

---

### 🗓️ Days 5–6 | `this` Keyword
> *The most confusing concept — master it completely*

- [ ] What is `this`?
- [ ] `this` in global context
- [ ] `this` in object methods
- [ ] `this` in regular vs arrow functions
- [ ] Implicit binding
- [ ] Explicit binding (`call`, `apply`, `bind`)
- [ ] `new` binding
- [ ] Default binding
- [ ] Common `this` traps & gotchas

**Key Questions to Cover:**
- What does `this` refer to inside a `setTimeout` callback?
- How does `this` behave differently in strict mode?
- What is the output when an arrow function is used as an object method?

---

### 🗓️ Days 7–8 | Async JavaScript ⭐
> *Your `js-mastery/asynchronous-js` folder is perfect for this!*

- [ ] Synchronous vs Asynchronous JS
- [ ] Call Stack
- [ ] Web APIs
- [ ] Callback Queue (Task Queue)
- [ ] **Event Loop** ⭐ *(Most visualized interview question)*
- [ ] Microtask Queue vs Macrotask Queue
- [ ] Callbacks & Callback Hell
- [ ] **Promises** — `.then()`, `.catch()`, `.finally()`
- [ ] Promise chaining
- [ ] **`async` / `await`**
- [ ] Error handling with `try/catch` in async
- [ ] `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, `Promise.any()`

**Key Questions to Cover:**
- What is the event loop? Explain with an example.
- What is the difference between microtasks and macrotasks?
- What is the output order of `setTimeout`, `Promise.then`, and synchronous code?

---

### 🗓️ Days 9–10 | Arrays & Objects
> *You'll use these every single day as a developer*

- [ ] `map()`, `filter()`, `reduce()` — deep dive
- [ ] `flat()`, `flatMap()`, `find()`, `findIndex()`
- [ ] `forEach()` vs `map()` — key difference
- [ ] Spread operator `...` & Rest parameters
- [ ] **Destructuring** — arrays & objects
- [ ] `Object.keys()`, `Object.values()`, `Object.entries()`
- [ ] `Object.assign()` vs Spread
- [ ] Shallow copy vs Deep copy
- [ ] Optional chaining `?.`
- [ ] Nullish coalescing `??`

**Key Questions to Cover:**
- Implement your own `map()` and `reduce()` from scratch.
- What is the difference between shallow and deep copy? How do you deep clone?
- When would you use `?.` over a traditional null check?

---

### 🗓️ Days 11–12 | Prototypes & OOP
> *Understanding how JS objects really work*

- [ ] `__proto__` vs `prototype`
- [ ] Prototype chain
- [ ] `Object.create()`
- [ ] Constructor functions
- [ ] `class` syntax — syntactic sugar over prototypes
- [ ] Constructor method
- [ ] Inheritance with `extends` and `super`
- [ ] Static methods & properties
- [ ] What happens when you use `new` keyword (4 steps)

**Key Questions to Cover:**
- What is prototypal inheritance? How is it different from classical inheritance?
- What are the 4 things the `new` keyword does under the hood?
- How would you implement inheritance without using `class`?

---

### 🗓️ Day 13 | DOM & Events
> *Lighter weight but still regularly asked*

- [ ] Event bubbling vs Event capturing
- [ ] `stopPropagation()` vs `preventDefault()`
- [ ] **Event delegation** ⭐
- [ ] `addEventListener` — options (once, capture, passive)
- [ ] `setTimeout()` / `setInterval()` quirks
- [ ] `clearTimeout()` / `clearInterval()`
- [ ] Debouncing & Throttling ⭐

**Key Questions to Cover:**
- What is event delegation and why is it useful?
- What is the difference between `stopPropagation` and `preventDefault`?
- Implement a debounce function from scratch.

---

### 🗓️ Day 14 | ES6+ Must-Knows
> *Modern JS features every interviewer expects you to know*

- [ ] `let` / `const` (block scoping — revisit)
- [ ] Template literals
- [ ] Modules — `import` / `export` (named vs default)
- [ ] `for...of` vs `for...in`
- [ ] Map & Set vs Object & Array
- [ ] WeakMap & WeakSet (briefly)
- [ ] Symbols (briefly)
- [ ] Generators & Iterators (briefly)
- [ ] Tagged template literals

**Key Questions to Cover:**
- What is the difference between `Map` and a plain Object?
- When would you use a `Set` over an `Array`?
- What is the difference between named and default exports?

---

### 🗓️ Day 15 | Revision + Tricky Output Questions
> *The grand finale — output questions are interviewers' favorite weapons*

- [ ] Output-based questions (predict the result)
- [ ] Closure traps in loops
- [ ] Async output order questions
- [ ] **Polyfills** — implement from scratch:
  - [ ] `Array.prototype.map`
  - [ ] `Function.prototype.bind`
  - [ ] `Promise`
- [ ] 5 Classic JS Puzzles
- [ ] Full revision of all 14 days

**Key Questions to Cover:**
- What is the output of a `var` in a `for` loop with `setTimeout`? Fix it with `let` and with closures.
- Implement `Promise.all()` from scratch.
- Write a polyfill for `Function.prototype.bind`.

---

## 📌 Quick Reference — Topic Priority Matrix

| Priority | Topic | Days | Interview Frequency |
|----------|-------|------|---------------------|
| ⭐⭐⭐ | Closures | 3–4 | Very High |
| ⭐⭐⭐ | Event Loop & Async | 7–8 | Very High |
| ⭐⭐⭐ | `this` Keyword | 5–6 | Very High |
| ⭐⭐⭐ | Array Methods | 9–10 | Very High |
| ⭐⭐ | Prototypes & OOP | 11–12 | High |
| ⭐⭐ | Promises & async/await | 7–8 | High |
| ⭐⭐ | Hoisting & Scope | 1–2 | High |
| ⭐ | DOM & Events | 13 | Medium |
| ⭐ | ES6+ Features | 14 | Medium |
| ⭐ | Polyfills | 15 | Medium-High |

---

## 🧠 Study Tips

1. **Don't just read** — write every code snippet by hand in VS Code
2. **Predict output first** — then run the code to verify
3. **Teach it back** — explain concepts in comments inside your notes
4. **One topic at a time** — resist jumping ahead
5. **Review previous day** — spend 5 mins revising yesterday before starting today

---

## 📁 Folder Structure (Suggested)

```
NOTES/
├── Day-01_Foundations-Quirks.md
├── Day-02_Foundations-Quirks.md
├── Day-03_Functions.md
├── Day-04_Functions-Closures.md
├── Day-05_This-Keyword.md
├── Day-06_This-Keyword.md
├── Day-07_Async-EventLoop.md
├── Day-08_Async-Promises.md
├── Day-09_Arrays-Objects.md
├── Day-10_Arrays-Objects.md
├── Day-11_Prototypes-OOP.md
├── Day-12_Prototypes-OOP.md
├── Day-13_DOM-Events.md
├── Day-14_ES6-Modern-JS.md
└── Day-15_Revision-OutputQuestions.md
```

---

*Created: 27-02-2026 | Target: Interview Ready in 15 Days 💪*
