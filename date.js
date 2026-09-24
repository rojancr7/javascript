// ================================================================
// JAVASCRIPT DATE
// ================================================================

// Date is a built-in JavaScript object used to work with:
// - Current date
// - Current time
// - Specific dates
// - Timestamps
// - Individual parts of a date
// - Date formatting


// ================================================================
// 1. CREATING THE CURRENT DATE
// ================================================================

// new Date() creates a Date object containing the current
// date and current time.

let myDate = new Date();


// toString()
// Converts the Date object into a complete readable
// date and time string.

console.log(myDate.toString());


// toDateString()
// Returns only the date in a readable format.
// The time is removed.

console.log(myDate.toDateString());


// toLocaleDateString()
// Returns the date using the local date format.

console.log(myDate.toLocaleDateString());


// toLocaleString()
// Returns both date and time using the local format.

console.log(myDate.toLocaleString());


// toJSON()
// Converts the Date object into a JSON-compatible string.
// The result is generally in ISO 8601 format.

console.log(myDate.toJSON());


// toISOString()
// Converts the Date into ISO 8601 format.
// This format is commonly used when storing or sending dates.

console.log(myDate.toISOString());


// ================================================================
// 2. CREATING A SPECIFIC DATE
// ================================================================

// We can create a specific date by passing numbers
// into the Date constructor.
//
// Syntax:
//
// new Date(year, monthIndex, day)


// IMPORTANT:
// JavaScript uses ZERO-BASED month indexes.
//
// January   = 0
// February  = 1
// March     = 2
// April     = 3
// May       = 4
// June      = 5
// July      = 6
// August    = 7
// September = 8
// October   = 9
// November  = 10
// December  = 11


// Creates January 31, 2008.

const myCreatedOne = new Date(2008, 0, 31);

console.log(myCreatedOne.toDateString());


// We can also provide the time:
//
// new Date(year, monthIndex, day, hour, minute)
//
// 2034 = year
// 0    = January
// 23   = day
// 5    = hour
// 1    = minute

const anotherDate = new Date(2034, 0, 23, 5, 1);

console.log(anotherDate.toString());


// ================================================================
// 3. CREATING A DATE USING A STRING
// ================================================================

// We can also create a Date using a date string.
//
// "2008-01-31"
//
// 2008 = year
// 01   = month
// 31   = day

const stringDate = new Date("2008-01-31");

console.log(stringDate.toDateString());


// ================================================================
// 4. TIMESTAMP
// ================================================================

// Date.now() returns the current timestamp.
//
// A timestamp represents the number of milliseconds
// since January 1, 1970 00:00:00 UTC.
//
// January 1, 1970 is commonly called the Unix epoch.

let myTimeStamp = Date.now();

console.log(myTimeStamp);


// Date.now() returns milliseconds.
//
// Dividing by 1000 converts milliseconds into seconds.

console.log(Date.now() / 1000);


// Math.floor() removes the decimal part.
//
// Example:
//
// 1769234567.89
//
// becomes:
//
// 1769234567

console.log(Math.floor(Date.now() / 1000));


// ================================================================
// 5. GETTING INFORMATION FROM A DATE
// ================================================================

const newDate = new Date();


// toDateString()
// Returns the complete date in a readable format.
//
// Example:
//
// Thu Sep 24 2026

const readableDate = newDate.toDateString();

console.log(readableDate);


// ================================================================
// 6. getMonth()
// ================================================================

// getMonth() returns the month INDEX.
//
// IMPORTANT:
// The month index starts from 0.
//
// January   = 0
// February  = 1
// March     = 2
// April     = 3
// May       = 4
// June      = 5
// July      = 6
// August    = 7
// September = 8
// October   = 9
// November  = 10
// December  = 11

const month1 = newDate.getMonth();

console.log(month1);


// ================================================================
// 7. GETTING A SHORT MONTH NAME
// ================================================================

// toLocaleDateString() can be used to format a date.
//
// "en-US" means English (United States).
//
// month: "short"
// returns the short month name.
//
// Example:
//
// Sep

const month2 = newDate.toLocaleDateString("en-US", {
    month: "short"
});

console.log(month2);


// ================================================================
// 8. GETTING THE FULL MONTH NAME
// ================================================================

// month: "long"
// returns the complete month name.
//
// Example:
//
// September

const month3 = newDate.toLocaleDateString("en-US", {
    month: "long"
});

console.log(month3);


// ================================================================
// 9. IMPORTANT DATE METHODS
// ================================================================

// new Date()
// Creates a new Date object.
//
// Date.now()
// Returns the current timestamp in milliseconds.
//
// toString()
// Returns the complete date and time as a string.
//
// toDateString()
// Returns the readable date.
//
// toLocaleDateString()
// Returns a locally formatted date.
//
// toLocaleString()
// Returns a locally formatted date and time.
//
// toISOString()
// Returns the date in ISO 8601 format.
//
// toJSON()
// Converts the Date into a JSON-compatible string.
//
// getMonth()
// Returns the month index from 0 to 11.


// ================================================================
// 10. VERY IMPORTANT
// ================================================================

// JavaScript months are ZERO-BASED when using:
//
// getMonth()
//
// and:
//
// new Date(year, monthIndex, day)
//
// Therefore:
//
// January = 0
// December = 11


// Example:
//
// new Date(2008, 0, 31)
//
// means:
//
// January 31, 2008
//
// NOT:
//
// Month 0, Day 31


// ================================================================
// QUICK MEMORY
// ================================================================

// new Date()
//        ↓
// Current date and time
//
// Date.now()
//        ↓
// Current timestamp in milliseconds
//
// getMonth()
//        ↓
// Month index (0 - 11)
//
// toDateString()
//        ↓
// Readable date
//
// toLocaleDateString()
//        ↓
// Formatted/localized date
//
// toISOString()
//        ↓
// Standard ISO date format

const myDate1 = newDate.toLocaleDateString('default', {
    weekday: "long",
    
})
console.log(myDate1);