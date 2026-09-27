/* ============================================================
   ARROW FUNCTIONS — ONE-PAGE THEORY
   ============================================================

   WHAT IS IT?
   A shorter syntax for writing functions. Uses => instead of
   the `function` keyword.

   ------------------------------------------------------------
   THE 4 SHAPES
   ------------------------------------------------------------

   1) No parameters:
        const greet = () => { console.log("Hi"); };

   2) One parameter (parentheses optional):
        const double = num => { return num * 2; };
        const double = (num) => { return num * 2; };

   3) Multiple parameters (parentheses REQUIRED):
        const add = (a, b) => { return a + b; };

   4) Implicit return (no braces, no return keyword):
        const add = (a, b) => a + b;

   ------------------------------------------------------------
   THE GOLDEN RULE
   ------------------------------------------------------------

   { } body           -> MUST write `return` explicitly.
   no { } (expression)-> Value is returned IMPLICITLY.

        (x) => { x * 2 }        // ❌ returns undefined
        (x) => { return x*2; }  // ✅ returns x*2
        (x) => x * 2            // ✅ returns x*2

   ------------------------------------------------------------
   RETURNING AN OBJECT (SPECIAL CASE)
   ------------------------------------------------------------

   If you want to implicitly return an OBJECT, wrap it in ():

        (name) => ({ name: name })   // ✅ returns an object
        (name) => { name: name }     // ❌ treated as a block

   Why? `{` after `=>` is read as a function body, not an object.

   ------------------------------------------------------------
   WHY ARROW FUNCTIONS EXIST
   ------------------------------------------------------------

   - Shorter syntax (great for callbacks, map/filter/reduce)
   - Do NOT have their own `this` — they inherit it from the
     enclosing scope (lexical `this`)
   - Cannot be used as constructors (no `new`)
   - Do NOT have `arguments` object

   ------------------------------------------------------------
   COMMON USES
   ------------------------------------------------------------

   With .map()  (implicit return):
        [1,2,3].map(n => n * 2);            // [2,4,6]

   With .filter() (implicit return):
        [1,2,3,4,5].filter(n => n > 3);     // [4,5]

   With .map() returning objects:
        [1,2,3].map(n => ({ value: n }));
        // [{value:1},{value:2},{value:3}]

   With block body (needs return):
        [1,2,3].map(n => {
          const sq = n * n;
          return { value: sq };
        });

   ------------------------------------------------------------
   WHEN TO USE { } vs. NO { }
   ------------------------------------------------------------

   Use { }        -> multiple statements / side effects /
                     temporary variables

   Use no { }     -> single expression you want returned

   ------------------------------------------------------------
   QUICK CHEAT TABLE
   ------------------------------------------------------------

   | Body style      | Need return? | Returns what?       |
   |-----------------|--------------|---------------------|
   | { ... }         | Yes          | your return value   |
   | expression      | No (implicit)| the expression      |
   | ({ ... })       | No (implicit)| the object          |

   ------------------------------------------------------------
   PRACTICE OUTPUTS
   ------------------------------------------------------------

   const f = (x) => { x * 2 };   f(5);  // undefined  (no return)
   const f = (x) => x * 2;       f(5);  // 10
   const f = () => { return 42; }; f(); // 42
   const f = () => 42;           f();   // 42
   const f = (a,b) => { a + b }; f(2,3);// undefined  (no return)
   const f = (a,b) => a + b;     f(2,3);// 5

   ------------------------------------------------------------
   KEY TAKEAWAY
   ------------------------------------------------------------

   Arrow function with { }  -> must `return`
   Arrow function without { } -> implicit return
   Returning an object? Wrap it in ( ).

   That's 90% of arrow functions in real code.
   ============================================================ */