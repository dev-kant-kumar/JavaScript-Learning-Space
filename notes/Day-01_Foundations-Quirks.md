# 📘 Day 01 — JS Foundations & Quirks
> **Topics:** Data Types · typeof · Type Coercion · `==` vs `===` · `var`/`let`/`const` · Hoisting · TDZ · Scope
> **Questions:** 28 (going beyond 20 for mastery)
> **Date:** 27-02-2026

---

## 🧠 Mental Model Before You Start

Think of JavaScript as a **loosely-typed language** — it doesn't care much about types at runtime, and it will happily try to convert things to make an operation work. This "helpfulness" is the source of 90% of the weird JS behavior you'll see in interviews.

---

# SECTION 1 — Data Types & `typeof`

---

## Q1. What are the data types in JavaScript?

### The Short Answer
JavaScript has **7 primitive types** and **1 non-primitive type**.

### The Real Explanation
Think of **primitives** as simple values stored directly in memory — like a number written on a sticky note. When you copy it, you get a completely independent copy.

**Non-primitives (objects)** are like a document in a folder — what you copy is just the *address* of the folder, not the document itself. So both copies point to the same place.

```js
// PRIMITIVES — 7 types
let name    = "Kant";          // String
let age     = 22;              // Number
let isReady = true;            // Boolean
let nothing = null;            // Null
let unknown;                   // Undefined (no value assigned)
let id      = Symbol("id");    // Symbol (always unique)
let bigNum  = 9007199254740991n; // BigInt (for huge numbers)

// NON-PRIMITIVE — 1 type (but many forms)
let user    = { name: "Kant" }; // Object
let nums    = [1, 2, 3];        // Array (is an Object under the hood)
let greet   = function() {};    // Function (is an Object under the hood)
```

### Key Difference — Stored By Value vs By Reference
```js
// PRIMITIVE — copy by VALUE (independent)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — a is NOT affected

// OBJECT — copy by REFERENCE (same address)
let obj1 = { score: 10 };
let obj2 = obj1;
obj2.score = 99;
console.log(obj1.score); // 99 — obj1 IS affected! They share the same memory
```

> 💬 **How to say it in your own words:** "Primitives are like numbers on a whiteboard — you copy the number itself. Objects are like a shared Google Doc — you copy the link, not the document. Changes in one place affect the other."

---

## Q2. What does `typeof` return for each type? What are the gotchas?

### The Answer
`typeof` is an operator that returns a **string** describing the type of a value.

```js
typeof "hello"       // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof Symbol()      // "symbol"
typeof 42n           // "bigint"
typeof function(){}  // "function"  ← special case: functions are objects but typeof says "function"
typeof {}            // "object"
typeof []            // "object"    ← arrays are objects!
typeof null          // "object"    ← THE FAMOUS BUG
typeof NaN           // "number"    ← NaN is technically a number type!
```

### The `typeof null` Bug 🐛
This is one of the most famous bugs in JavaScript history. `null` is **not** an object — it's a primitive that represents "intentional absence of value." But due to a bug in the very first version of JavaScript (1995), `typeof null` returns `"object"`. It was never fixed because fixing it would break the entire internet.

```js
// How to CORRECTLY check for null
let val = null;

typeof val === "object" // true — but WRONG check, doesn't account for null
val === null            // true — CORRECT way to check for null
```

### Checking if something is an Array
Since `typeof []` returns `"object"`, you need a different approach:
```js
let arr = [1, 2, 3];

typeof arr          // "object" — useless
Array.isArray(arr)  // true ✅ — correct way
arr instanceof Array // true ✅ — also works
```

> 💬 **How to say it:** "`typeof null === 'object'` is a historical bug from 1995 that was never fixed. Always use `=== null` to check for null, and `Array.isArray()` to check for arrays."

---

## Q3. What is the difference between `null` and `undefined`?

### The Analogy
- `undefined` = You ordered a package, but it hasn't arrived yet (no value assigned, JS did this automatically)
- `null` = You deliberately left a box empty (programmer intentionally set it to "no value")

```js
// undefined — JS assigns this automatically
let x;
console.log(x); // undefined — declared but no value given

function greet(name) {
  console.log(name); // undefined — if you call greet() without an argument
}

let obj = { a: 1 };
console.log(obj.b); // undefined — property doesn't exist

// null — programmer assigns this on purpose
let user = null; // "I know this will hold a user object later, but right now there's nothing"
```

### The Tricky Part — null in arithmetic
```js
null + 5       // 5   (null converts to 0 in math)
undefined + 5  // NaN (undefined has no numeric value)

typeof null      // "object" ← the bug
typeof undefined // "undefined"
```

### Equality Check
```js
null == undefined   // true  (they loosely equal each other — both mean "nothing")
null === undefined  // false (they are different types strictly)

null == 0     // false (null only loosely equals undefined, nothing else)
null == false // false
```

> 💬 **How to say it:** "`undefined` is what JS gives you when something hasn't been given a value yet. `null` is what you, the developer, deliberately assign to say 'this is intentionally empty'. They loosely equal each other but are strictly different."

---

## Q4. What is NaN? How do you check for it?

### The Explanation
`NaN` stands for "Not-a-Number". The irony? It's **of type `number`**. It's what you get when you try to do a math operation that makes no sense.

```js
parseInt("hello")  // NaN — can't convert "hello" to a number
Math.sqrt(-1)      // NaN — no real square root of negative numbers
0 / 0              // NaN
undefined + 1      // NaN
```

### The Weirdest Thing About NaN
```js
NaN === NaN  // false !! NaN is not equal to itself — it's the only value in JS that isn't
NaN == NaN   // false !! even with loose equality
```

### How To Check For NaN (3 Ways)
```js
let result = parseInt("hello");

// ❌ Wrong way
result === NaN          // always false — useless

// ✅ Way 1: Number.isNaN() — RECOMMENDED
Number.isNaN(result)    // true — only returns true for actual NaN

// ⚠️ Way 2: global isNaN() — BE CAREFUL
isNaN(result)           // true
isNaN("hello")          // also true! — coerces "hello" to NaN first, misleading
isNaN(undefined)        // true! — also misleading

// ✅ Way 3: The self-inequality trick (old school)
result !== result       // true — only NaN fails this test
```

### Why `Number.isNaN()` vs global `isNaN()`?
```js
Number.isNaN("hello")  // false — "hello" is a string, not NaN
isNaN("hello")         // true  — converts "hello" to NaN first, THEN checks
```

> 💬 **How to say it:** "`NaN` is a number type that represents an invalid number result. The gotcha is it's never equal to itself. Use `Number.isNaN()` to check for it — not the global `isNaN()` which coerces its argument first."

---

# SECTION 2 — Type Coercion & Equality

---

## Q5. What is type coercion in JavaScript?

### The Explanation
Type coercion is JavaScript **automatically converting** a value from one type to another without you asking it to. It's JS trying to be "helpful" — but it often produces surprising results.

There are two kinds:
- **Implicit** — JS does it automatically (coercion)
- **Explicit** — You do it yourself (type conversion / casting)

```js
// IMPLICIT COERCION (JS does it behind the scenes)
"5" + 2     // "52"  — number 2 converts to string, then concatenates
"5" - 2     // 3     — string "5" converts to number, then subtracts
"5" * "3"   // 15    — both convert to numbers
true + 1    // 2     — true converts to 1
false + 1   // 1     — false converts to 0
"" + 0      // "0"   — number converts to string

// EXPLICIT CONVERSION (you do it intentionally)
Number("5")     // 5
String(5)       // "5"
Boolean(0)      // false
parseInt("5px") // 5 — takes the leading number, ignores rest
parseFloat("3.14abc") // 3.14
```

### The `+` Operator — The Sneaky One
```js
// + with a STRING makes JS do concatenation
1 + "2"    // "12" — not 3!
1 + 2 + "3" // "33" — evaluates left-to-right: (1+2) = 3, then 3+"3" = "33"
"3" + 1 + 2 // "312" — evaluates left-to-right: "3"+1 = "31", then "31"+2 = "312"

// - * / always try to convert to number
"10" - 5   // 5
"10" * "2" // 20
"abc" - 1  // NaN
```

### Boolean Coercion — Truthy and Falsy
In any `if`, `while`, ternary, or logical operator, JS converts values to boolean.

**6 Falsy values** (everything else is truthy):
```js
if (false)     // falsy
if (0)         // falsy
if (-0)        // falsy
if (0n)        // falsy (BigInt zero)
if ("")        // falsy (empty string)
if (null)      // falsy
if (undefined) // falsy
if (NaN)       // falsy

// Truthy surprises:
if ("0")        // TRUTHY — non-empty string
if ("false")    // TRUTHY — non-empty string
if ([])         // TRUTHY — empty array is an object!
if ({})         // TRUTHY — empty object
if (function(){}) // TRUTHY — function
```

> 💬 **How to say it:** "JS type coercion is automatic type conversion. The `+` operator is dangerous because with a string it concatenates instead of adding. There are exactly 6 falsy values — false, 0, empty string, null, undefined, NaN — everything else is truthy."

---

## Q6. What is the difference between `==` (loose equality) and `===` (strict equality)?

### The Simple Explanation
- `===` checks **type AND value** — no conversion, no surprises
- `==` checks **value only** — converts types first if they're different (coercion happens)

```js
// === STRICT — both must be same type AND same value
5 === 5        // true
5 === "5"      // false — different types, done
true === 1     // false — different types, done

// == LOOSE — converts types to match, then compares
5 == "5"       // true — "5" converts to 5, then 5 == 5
true == 1      // true — true converts to 1, then 1 == 1
false == 0     // true — false converts to 0
"" == false    // true — "" converts to 0, false converts to 0, 0 == 0
null == undefined // true — special rule: they're loosely equal to each other only
null == 0      // false — null only equals undefined (and null), nothing else
null == false  // false
```

### The Mind-Bending Ones 🤯
```js
[] == false    // true  — [] → "" → 0, false → 0, so 0 == 0 ✅
[] == ![]      // true  — ![] is false ([] is truthy, !truthy = false), then [] == false → true
[] == []       // false — objects compare by reference, not value
{} == {}       // false — same reason

console.log(null == undefined);  // true
console.log(null === undefined); // false
```

### The Golden Rule
**Always use `===` in real code.** Only use `==` if you have a specific reason (like checking for both null and undefined at once).

```js
// Common pattern using == intentionally
if (value == null) {
  // This catches BOTH null AND undefined — a deliberate use of ==
}
// Same as writing:
if (value === null || value === undefined) {}
```

> 💬 **How to say it:** "`===` never converts types — if the types are different, it immediately returns false. `==` tries to convert types to match before comparing, which leads to weird results like `[] == false` being true. In real code, always use `===`."

---

## Q7. Predict the output — Type Coercion Output Questions

These are the most common "trick" questions in interviews.

```js
// Q: What does this print?
console.log(1 + "2" + "2");   // "122" — 1+"2" = "12", then "12"+"2" = "122"
console.log(1 + +"2" + "2");  // "32"  — unary + converts "2" to 2, so 1+2 = 3, then 3+"2" = "32"
console.log(1 + -"1" + "2");  // "02"  — -"1" = -1, so 1+(-1) = 0, then 0+"2" = "02"
console.log(+"1" + "1" + "1"); // "111" — +"1" = 1 (number), but then 1+"1" = "11", "11"+"1" = "111"
console.log("A" - "B" + "2"); // "NaN2" — "A"-"B" = NaN, then NaN+"2" = "NaN2"
console.log("A" - "B" + 2);   // NaN   — NaN + 2 = NaN (number context)
```

---

# SECTION 3 — `var`, `let`, and `const`

---

## Q8. What are the differences between `var`, `let`, and `const`?

### The Complete Comparison Table

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block | Block |
| Hoisted? | Yes (as `undefined`) | Yes (TDZ, can't access) | Yes (TDZ, can't access) |
| Re-declare same scope? | ✅ Yes | ❌ No | ❌ No |
| Re-assign? | ✅ Yes | ✅ Yes | ❌ No |
| Attached to `window`? | ✅ Yes | ❌ No | ❌ No |

### Scope — The Biggest Difference
```js
// VAR — function scoped (ignores blocks like if, for, while)
function example() {
  var x = 1;
  if (true) {
    var x = 2;  // SAME variable! var ignores block {}
    console.log(x); // 2
  }
  console.log(x); // 2 — var leaked out of the if block
}

// LET — block scoped (respects {})
function example2() {
  let y = 1;
  if (true) {
    let y = 2;  // DIFFERENT variable — block scoped
    console.log(y); // 2
  }
  console.log(y); // 1 — original y untouched
}
```

### The Famous `var` in a Loop Bug 🐛
```js
// WITH VAR — The Classic Interview Question
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output after 1 second: 3, 3, 3 (not 0, 1, 2!)
// WHY: var is function-scoped, there's only ONE i shared by all iterations
// By the time setTimeout fires, the loop is done, i = 3

// WITH LET — Fixed!
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output after 1 second: 0, 1, 2 ✅
// WHY: let creates a NEW i for each iteration (block scoped)
```

### `const` — Constant Binding, Not Constant Value
This is a common misconception. `const` means you can't **reassign** the variable — but if it holds an object or array, you can still **mutate** it.

```js
const num = 5;
num = 10; // ❌ TypeError: Assignment to constant variable

const user = { name: "Kant" };
user = { name: "Dev" };   // ❌ TypeError — can't reassign
user.name = "Dev";        // ✅ This works! You're mutating the object, not reassigning

const arr = [1, 2, 3];
arr = [4, 5, 6];  // ❌ TypeError
arr.push(4);      // ✅ This works! You're mutating the array

// Must be initialized when declared
const x;     // ❌ SyntaxError: Missing initializer in const declaration
const y = 5; // ✅
```

### `var` attaches to `window` — A Global Pollution Issue
```js
var name = "Kant"; // Becomes window.name in browsers
let city = "Jamshedpur"; // Does NOT become window.city

console.log(window.name); // "Kant"
console.log(window.city); // undefined
```

> 💬 **How to say it:** "The main difference is scope. `var` is function-scoped and bleeds out of blocks like `if` and `for`. `let` and `const` are block-scoped. `const` doesn't make a value immutable — it just prevents reassignment of the binding. You can still mutate objects and arrays stored in `const`."

---

## Q9. When should you use `var`, `let`, or `const`?

### The Modern Rule (Simple)
1. **Default: use `const`** — for anything that won't be reassigned
2. **Use `let`** — when you know the value will change (loop counters, accumulating values)
3. **Avoid `var`** — almost never in modern JS. Legacy code only.

```js
// GOOD modern practice
const API_URL = "https://api.example.com"; // Never changes
const user = { name: "Kant" };             // Reference won't change (even if object mutates)

let count = 0;        // Will be incremented
let currentUser = null; // Will be assigned later

for (let i = 0; i < 5; i++) { // Classic let use case
  count += i;
}
```

---

# SECTION 4 — Hoisting

---

## Q10. What is hoisting? Explain with examples.

### The Mental Model
Before JavaScript runs your code, it does a first pass where it **reads all declarations** and sets them up in memory. This is called hoisting — declarations are "lifted" to the top of their scope. But only the declarations, not the initializations (the values).

Think of it like this: JS pre-reads your code and puts all variable names and function names in a list (memory). But it doesn't fill in the values until it actually executes line by line.

### `var` Hoisting — Declaration moves up, value stays
```js
// What you write:
console.log(name); // undefined (not an error!)
var name = "Kant";
console.log(name); // "Kant"

// How JS actually executes it (conceptually):
var name;           // declaration hoisted to top, initialized as undefined
console.log(name);  // undefined
name = "Kant";      // assignment stays in place
console.log(name);  // "Kant"
```

### Function Declaration Hoisting — Entire function moves up
```js
// You can call it BEFORE it's defined — this works!
greet(); // "Hello!" — no error

function greet() {
  console.log("Hello!");
}

// How JS sees it:
// function greet() { console.log("Hello!"); }  ← entire function hoisted
// greet(); ← now this works
```

### `let` and `const` Hoisting — Hoisted but NOT initialized (TDZ)
```js
console.log(city); // ❌ ReferenceError: Cannot access 'city' before initialization
let city = "Jamshedpur";

// let/const ARE hoisted — JS knows 'city' exists — but it's in the TDZ
// It throws a ReferenceError (not "city is not defined", which would happen if it wasn't hoisted at all)
```

### Function Expression Hoisting — Depends on `var`/`let`/`const`
```js
// With var — hoisted as undefined
greet(); // ❌ TypeError: greet is not a function (it's undefined at this point)
var greet = function() { console.log("Hello!"); };

// With let — TDZ error
greet(); // ❌ ReferenceError
let greet = function() { console.log("Hello!"); };

// Arrow function — same as function expression, depends on var/let/const
sayHi(); // ❌ TypeError (var) or ReferenceError (let/const)
var sayHi = () => console.log("Hi!");
```

### Hoisting Summary Table

| Type | Hoisted? | Initialized? | Can access before declaration? |
|------|----------|--------------|-------------------------------|
| `var` | ✅ Yes | As `undefined` | Yes, but returns `undefined` |
| `let` | ✅ Yes | No (TDZ) | ❌ ReferenceError |
| `const` | ✅ Yes | No (TDZ) | ❌ ReferenceError |
| Function Declaration | ✅ Yes | Fully (whole body) | ✅ Yes, works fine |
| Function Expression (var) | ✅ Yes | As `undefined` | TypeError (undefined, not a function) |
| Function Expression (let/const) | ✅ Yes | No (TDZ) | ❌ ReferenceError |

> 💬 **How to say it:** "Hoisting is JS pre-reading declarations before executing code. `var` is hoisted and set to `undefined`, so you can access it before declaration but get `undefined`. `let` and `const` are also hoisted but put in the Temporal Dead Zone — you can't access them at all. Function declarations are fully hoisted, so you can call them before defining them."

---

## Q11. What is the Temporal Dead Zone (TDZ)?

### The Explanation
TDZ is the period **between when a scope is entered and when the `let`/`const` variable is declared**. During this zone, the variable exists in memory (it's been hoisted) but is not yet initialized — accessing it throws a `ReferenceError`.

```js
// TDZ starts at the beginning of the block
{
  // TDZ for 'x' starts here ↓
  console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
  // TDZ for 'x' ends here ↓
  let x = 10;
  console.log(x); // 10 ✅
}
```

### Why Does TDZ Exist?
It's actually a **feature, not a bug**. It prevents you from using variables before they're ready. With `var`, you could accidentally use an `undefined` variable and get a subtle bug. With `let`/`const`, you get a clear error message immediately.

```js
// Subtle var bug
function calculateTotal() {
  console.log(price * 2); // undefined * 2 = NaN — silent bug!
  var price = 100;
}

// let catches this immediately
function calculateTotal2() {
  console.log(price * 2); // ❌ ReferenceError — clear, immediate feedback
  let price = 100;
}
```

### TDZ in a function parameter default — A tricky one
```js
// This throws because y is in TDZ when x's default is evaluated
function test(x = y, y = 2) {
  return [x, y];
}
test(); // ❌ ReferenceError — y is in TDZ when x is being initialized
test(1); // [1, 2] ✅ — x is provided, y initializes fine
```

> 💬 **How to say it:** "TDZ is the period between entering a block and reaching the `let`/`const` declaration. The variable is hoisted (JS knows it exists) but it's in a limbo state — you can't read or write to it. It's actually a safety feature to catch bugs early."

---

## Q12. Predict the output — Hoisting traps

```js
// Q1: What is the output?
console.log(a); // undefined (var hoisted)
var a = 5;
console.log(a); // 5

// Q2: What is the output?
sayHello(); // "Hello!" (function declaration fully hoisted)
function sayHello() { console.log("Hello!"); }

// Q3: What is the output?
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() { console.log("Hi!"); };

// Q4: What is the output?
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;       // b is hoisted as undefined, ++ on undefined = NaN, then assigned 3
    var b = 3; // declaration hoisted, assignment stays here
    console.log(b); // 3
  }
  inner();
}
outer(); // 3 (not 2, not NaN — because inner's own b is what gets used)
```

---

# SECTION 5 — Scope

---

## Q13. What are the different types of scope in JavaScript?

### The Concept
Scope determines **where a variable can be accessed**. Think of it as visibility — a variable is only visible within the boundaries of its scope.

### 1. Global Scope
```js
var globalVar = "I am global";
let globalLet = "Also global";

function anyFunction() {
  console.log(globalVar); // accessible ✅
  console.log(globalLet); // accessible ✅
}
```

### 2. Function Scope (Local Scope)
```js
function makeUser() {
  var name = "Kant";    // only exists inside makeUser
  let age = 22;         // only exists inside makeUser
  console.log(name);    // ✅
}
makeUser();
console.log(name);  // ❌ ReferenceError — name doesn't exist outside
```

### 3. Block Scope (ES6+)
```js
{
  let blockScoped = "only here";
  var notBlockScoped = "escapes the block";
  console.log(blockScoped);     // ✅
  console.log(notBlockScoped);  // ✅
}
console.log(blockScoped);     // ❌ ReferenceError
console.log(notBlockScoped);  // ✅ — var leaks out of blocks!
```

### 4. Lexical Scope (The Foundation of Closures)
Lexical scope means a function's scope is determined by **where it's defined in the code**, not where it's called.

```js
let outerVar = "I'm outer";

function outer() {
  let innerVar = "I'm inner";

  function inner() {
    // inner can access BOTH because of lexical scope
    console.log(outerVar);  // ✅ "I'm outer"
    console.log(innerVar);  // ✅ "I'm inner"
  }

  inner();
}

outer();
console.log(innerVar); // ❌ ReferenceError — innerVar only exists in outer()
```

> 💬 **How to say it:** "Scope is where a variable is accessible. Global scope is everywhere. Function scope is inside a function. Block scope is inside any `{}` (but only for `let`/`const`). Lexical scope means functions can access variables from where they were written, not where they're called — this is the foundation of closures."

---

## Q14. What is the scope chain?

### The Explanation
When you use a variable, JS looks for it starting from the **innermost scope** and works its way **outward** until it finds it or reaches global scope.

```js
let global = "global";

function outer() {
  let outerVar = "outer";

  function middle() {
    let middleVar = "middle";

    function inner() {
      let innerVar = "inner";

      // Inner can access ALL of these via the scope chain:
      console.log(innerVar);   // ✅ found in inner
      console.log(middleVar);  // ✅ not in inner → found in middle
      console.log(outerVar);   // ✅ not in middle → found in outer
      console.log(global);     // ✅ not in outer → found in global
    }

    inner();
  }

  middle();
}

outer();
```

### The Lookup Direction — IMPORTANT
The scope chain only goes **inward to outward** — never sideways.

```js
function sibling1() {
  let secret = "I belong to sibling1";
}

function sibling2() {
  console.log(secret); // ❌ ReferenceError — can't access sibling's scope
}
```

---

## Q15. What is variable shadowing?

### The Concept
When a variable in an inner scope has the **same name** as one in an outer scope, the inner one "shadows" (hides) the outer one within its scope.

```js
let name = "Global Kant";

function greet() {
  let name = "Function Kant"; // shadows the outer name
  console.log(name);          // "Function Kant" — uses the inner one
}

greet();
console.log(name); // "Global Kant" — original unchanged
```

### Legal vs Illegal Shadowing
```js
// LEGAL — shadowing var with let
function test() {
  var a = "var";
  if (true) {
    let a = "let"; // ✅ Legal — let can shadow var
    console.log(a); // "let"
  }
  console.log(a); // "var"
}

// ILLEGAL — shadowing let with var (var escapes block, tries to re-declare in outer scope)
function test2() {
  let b = "outer let";
  if (true) {
    var b = "inner var"; // ❌ SyntaxError: Identifier 'b' has already been declared
    // var tries to put 'b' in the function scope where 'b' (let) already exists
  }
}
```

> 💬 **How to say it:** "Shadowing is when an inner scope variable has the same name as an outer one. The inner one takes priority within its scope. You can shadow `var` with `let` (legal), but not `let` with `var` (illegal) because `var` would try to put itself in the function scope where `let` already exists."

---

## Q16. What is the difference between `var` inside a function vs. `var` in global scope?

```js
// GLOBAL var — becomes a property of window object
var globalPet = "dog";
console.log(window.globalPet); // "dog" — attached to window

// FUNCTION var — stays inside the function, doesn't attach to window
function example() {
  var localPet = "cat";
}
example();
console.log(window.localPet); // undefined — not on window
console.log(localPet);        // ❌ ReferenceError — not accessible outside
```

---

# SECTION 6 — Advanced / Output Questions

---

## Q17. What happens when you use a variable without declaring it?

```js
function test() {
  x = 10; // No var/let/const — creates a GLOBAL variable implicitly!
}
test();
console.log(x); // 10 — x became global (bad practice / bug source)

// In strict mode, this throws an error
"use strict";
function test2() {
  y = 20; // ❌ ReferenceError: y is not defined
}
```

> This is why `"use strict"` exists — it prevents this accidental global creation.

---

## Q18. What is `"use strict"` and why does it matter?

### The Explanation
Strict mode is an opt-in feature that makes JavaScript throw errors for things that are silently ignored in non-strict mode. It helps you write cleaner code.

```js
"use strict"; // Enable for entire script or function

// Things strict mode prevents:
// 1. Using undeclared variables
x = 5; // ❌ ReferenceError

// 2. Deleting variables
let name = "Kant";
delete name; // ❌ SyntaxError

// 3. Duplicate parameter names
function sum(a, a) { return a + a; } // ❌ SyntaxError

// 4. Writing to read-only properties
const obj = {};
Object.defineProperty(obj, 'name', { value: 'Kant', writable: false });
obj.name = "Dev"; // ❌ TypeError in strict mode (silently fails otherwise)
```

---

## Q19. Predict the output — Scope chain + hoisting combined

```js
// Q: What is the output?
var x = 10;

function foo() {
  console.log(x); // What prints here?
  var x = 20;
  console.log(x); // What prints here?
}

foo();
console.log(x); // What prints here?
```

**Answer:**
```
undefined  ← because var x inside foo is hoisted to top of foo as undefined, shadows outer x
20         ← after assignment
10         ← global x unchanged
```

**Why?** Inside `foo`, `var x = 20` is hoisted to `var x;` (undefined). When `console.log(x)` runs, it finds the local `x` (undefined) before the global one. This is called **hoisting within scope chain**.

---

## Q20. Predict the output — `let` vs `var` in for loops

```js
// Q1: var in a for loop (classic interview question)
for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 0);
}
// Output: 3, 3, 3
// Why: var i is function-scoped, only one i exists, loop finishes before setTimeout fires

// Q2: let in a for loop
for (let j = 0; j < 3; j++) {
  setTimeout(function() { console.log(j); }, 0);
}
// Output: 0, 1, 2
// Why: let j creates a NEW j for EACH iteration

// Q3: Fixing var with a closure (IIFE trick — classic solution before let)
for (var k = 0; k < 3; k++) {
  (function(k) {           // IIFE captures the current value of k
    setTimeout(function() { console.log(k); }, 0);
  })(k);
}
// Output: 0, 1, 2 ✅
```

---

## Q21. What is the difference between function declaration and function expression?

```js
// FUNCTION DECLARATION — hoisted fully, can call before definition
greet(); // ✅ "Hello"
function greet() { console.log("Hello"); }

// FUNCTION EXPRESSION — not hoisted, must define before calling
// sayHi(); // ❌ TypeError or ReferenceError
const sayHi = function() { console.log("Hi"); };
sayHi(); // ✅ "Hi"

// NAMED FUNCTION EXPRESSION — the name is only available inside the function itself
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // 'fact' accessible here for recursion
};
factorial(5); // 120 ✅
// fact(5); // ❌ ReferenceError — 'fact' not accessible outside
```

---

## Q22. Predict the output — Re-declaration and re-assignment

```js
// VAR re-declaration — allowed, no error
var city = "Delhi";
var city = "Mumbai"; // ✅ no error, just overwrites
console.log(city); // "Mumbai"

// LET re-declaration — error
let state = "Bihar";
// let state = "UP"; // ❌ SyntaxError: Identifier 'state' has already been declared

// CONST — can't re-declare or re-assign
const country = "India";
// const country = "UK"; // ❌ SyntaxError
// country = "UK";       // ❌ TypeError

// But CONST objects/arrays are mutable!
const person = { name: "Kant" };
person.name = "Dev";  // ✅ mutating is fine
person.age = 22;      // ✅ adding properties is fine
console.log(person);  // { name: "Dev", age: 22 }
```

---

## Q23. What is `typeof` of a function, class, and arrow function?

```js
function regularFn() {}
const arrowFn = () => {};
class MyClass {}

typeof regularFn  // "function"
typeof arrowFn    // "function"
typeof MyClass    // "function" — classes are syntactic sugar over constructor functions!

// instanceof is more precise
regularFn instanceof Function  // true
arrowFn instanceof Function    // true
MyClass instanceof Function    // true
```

---

## Q24. What are the differences in implicit type coercion with different operators?

```js
// + operator: if either operand is a string, concatenates
1 + 1          // 2   (number + number)
1 + "1"        // "11" (number + string = string)
"1" + 1        // "11" (string + number = string)
1 + true       // 2   (true → 1)
1 + false      // 1   (false → 0)
1 + null       // 1   (null → 0)
1 + undefined  // NaN (undefined → NaN)
1 + []         // "1" ([] → "" → "1")
1 + {}         // "1[object Object]" ({} → "[object Object]")

// - * / % : always try to convert to number
"5" - 2        // 3
"5" * "2"      // 10
"5" / "2"      // 2.5
true + true    // 2
"abc" - 1      // NaN
[] - 1         // -1  ([] → "" → 0, 0 - 1 = -1)
[1] - 1        // 0   ([1] → "1" → 1, 1 - 1 = 0)
[1,2] - 1      // NaN ([1,2] → "1,2" → NaN)
```

---

## Q25. What is the difference between `undefined` and "not defined"?

```js
// UNDEFINED — variable was declared but not assigned a value
var x;
console.log(x); // undefined — x exists in memory

// NOT DEFINED — variable was never declared
console.log(y); // ❌ ReferenceError: y is not defined — y doesn't exist at all
```

> This distinction matters for `typeof`:
```js
var x;
typeof x  // "undefined" — no error
typeof y  // "undefined" — also no error! typeof is safe to use on undeclared variables
y         // ❌ ReferenceError — accessing directly throws
```

---

## Q26. What are the 8 ways to get `undefined`?

```js
// 1. Declared but not initialized
let a;
console.log(a); // undefined

// 2. Function with no return statement
function noReturn() {}
console.log(noReturn()); // undefined

// 3. Function with empty return
function emptyReturn() { return; }
console.log(emptyReturn()); // undefined

// 4. Accessing non-existent object property
let obj = {};
console.log(obj.name); // undefined

// 5. Function parameter not passed
function greet(name) { console.log(name); }
greet(); // undefined

// 6. Array element that doesn't exist
let arr = [1, 2, 3];
console.log(arr[10]); // undefined

// 7. Explicitly assigned
let b = undefined;

// 8. void operator
console.log(void 0);  // undefined
console.log(void "anything"); // undefined
```

---

## Q27. What is the difference between `Number()`, `parseInt()`, and `parseFloat()`?

```js
// Number() — converts entire value, strict
Number("42")        // 42
Number("42.5")      // 42.5
Number("42abc")     // NaN — fails if string has non-numeric characters
Number("")          // 0
Number(null)        // 0
Number(undefined)   // NaN
Number(true)        // 1
Number(false)       // 0
Number([])          // 0
Number([1])         // 1
Number([1,2])       // NaN

// parseInt() — reads up to the first non-numeric character, returns integer
parseInt("42")      // 42
parseInt("42.5")    // 42 — ignores decimal
parseInt("42abc")   // 42 — reads up to 'a', stops
parseInt("abc42")   // NaN — can't start with non-numeric
parseInt("0xff", 16) // 255 — always pass the radix (base)!

// parseFloat() — reads decimal too
parseFloat("42.5")    // 42.5
parseFloat("42.5abc") // 42.5 — reads until non-numeric
parseFloat("abc")     // NaN
```

### The Radix Gotcha
```js
parseInt("08")     // 8 in modern JS, but was 0 in old JS (treated as octal)!
parseInt("08", 10) // always specify base 10 to be safe
```

---

## Q28. Final Mega Output Question — Everything Combined

```js
// What is the output of each line? Try to predict before reading the answer.

console.log(typeof typeof 42);         // "string" — typeof 42 = "number", typeof "number" = "string"
console.log(typeof null);              // "object" — the famous bug
console.log(null == undefined);        // true
console.log(null === undefined);       // false
console.log(NaN === NaN);             // false — NaN isn't equal to itself
console.log(Number.isNaN(NaN));       // true
console.log(isNaN("hello"));          // true  — "hello" coerced to NaN first
console.log(Number.isNaN("hello"));   // false — "hello" is a string, not NaN
console.log(0.1 + 0.2 === 0.3);      // false! (floating point precision: 0.1+0.2 = 0.30000000000000004)
console.log([] == false);             // true — coercion chain: [] → "" → 0, false → 0
console.log(!!null);                  // false — null is falsy
console.log(!!"0");                   // true  — "0" is a non-empty string = truthy
console.log(!![]);                    // true  — empty array is truthy
console.log(+true);                   // 1
console.log(+false);                  // 0
console.log(+"");                     // 0
console.log(+null);                   // 0
console.log(+undefined);             // NaN
console.log(+"hello");               // NaN
```

---

# 📌 Quick Revision Cheatsheet

```
TYPES:         7 primitives (string, number, boolean, null, undefined, symbol, bigint)
               + object (arrays, functions are all objects)

TYPEOF GOTCHAS: typeof null → "object" (bug)
               typeof NaN  → "number" (weird but true)
               typeof []   → "object" (use Array.isArray())
               typeof function → "function" (special case)

6 FALSY VALUES: false, 0, "", null, undefined, NaN

NaN CHECK:     Use Number.isNaN() — not isNaN() (coerces first)

== vs ===:     === never coerces. == coerces types before comparing.
               null == undefined → true (only these two)
               null == 0        → false (null is special)

VAR vs LET vs CONST:
               var  → function scope, hoisted as undefined, re-declarable
               let  → block scope, TDZ, no re-declare
               const → block scope, TDZ, no re-declare, no reassign (but objects/arrays mutable)

HOISTING:      var hoisted as undefined
               let/const hoisted but in TDZ (ReferenceError if accessed)
               function declarations fully hoisted (can call before define)
               function expressions NOT fully hoisted

TDZ:           Period from block entry to variable declaration for let/const
               Accessing in TDZ = ReferenceError (not "not defined")

SCOPE CHAIN:   Inner → Outer → Global (one direction only)
```

---

*Day 1 Complete ✅ — 28 Questions Covered*
*Next: Day 2 → Functions Deep Dive & Closures*

---
> 🔁 **Review Tip:** Before Day 2, re-read Q10 (hoisting) and Q13 (scope) — closures build directly on these.
