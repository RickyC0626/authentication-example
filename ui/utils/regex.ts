/**
 * ^                  Anchor to start of string
 * [a-zA-Z0-9_]       Alphanumeric character including underscore
 * {3,30}             At least 3 characters, up to 30
 * $                  Anchor to end of string
 */
export const username = /^[a-zA-Z0-9_]{3,30}$/;

/**
 * ^                  Anchor to start of string
 * (?=[^A-Z]*[A-Z])   At least 1 uppercase letter
 * (?=[^a-z]*[a-z])   At least 1 lowercase letter
 * (?=[^0-9]*[0-9])   At least 1 decimal digit
 * .{8,}              At least 8 characters
 * $                  Anchor to end of string
 */
export const password = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$/;

// https://www.emailregex.com/
export const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;