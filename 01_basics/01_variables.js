 const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/************************************************************
                 JAVASCRIPT FUNDAMENTALS
************************************************************/

/**********************
1️⃣ let vs const vs var
**********************/

/*
const:
- Block scoped
- Must be initialized
- Cannot be reassigned
- Objects/arrays can still be mutated
*/

const accountId = 123;
// accountId = 456; ❌ Error


/*
let:
- Block scoped
- Can be reassigned
- Cannot be redeclared in same scope
*/

let email = "a@gmail.com";
email = "b@gmail.com"; // ✅ allowed


/*
var:
- Function scoped (NOT block scoped)
- Can be redeclared
- Causes scope leakage
- Avoid using in modern JS
*/

if (true) {
    var x = 10;
}
console.log(x); // 10 (leaks outside block)



/**********************
2️⃣ undefined vs null
**********************/

/*
undefined:
- Variable declared but not assigned
- Type: "undefined"
*/

let a;
console.log(a);            // undefined
console.log(typeof a);     // "undefined"


/*
null:
- Intentional empty value
- Type: "object" (historical JS bug)
*/

let b = null;
console.log(b);            // null
console.log(typeof b);     // "object"



/**********************
3️⃣ == vs ===
**********************/

/*
==  (Loose Equality)
- Performs type coercion
- Can give unexpected results
*/

console.log(0 == false);        // true
console.log("" == 0);           // true
console.log(null == undefined); // true


/*
=== (Strict Equality)
- No type coercion
- Checks value AND type
- Always preferred
*/

console.log(0 === false);        // false
console.log("" === 0);           // false
console.log(null === undefined); // false



/**********************
4️⃣ Important Coercion Rules (for ==)
**********************/

/*
false  -> 0
true   -> 1
""     -> 0
null == undefined  -> true
null === undefined -> false
*/

console.log("" == false); // true
console.log([] == false); // true (advanced coercion)
console.log([] === false); // false



/**********************
5️⃣ Golden Rule
**********************/

/*
✔ Always use === in real projects
✔ Avoid var
✔ Declare variables properly (no implicit globals)
✔ Understand type coercion before using ==
*/