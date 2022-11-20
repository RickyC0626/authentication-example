# authentication-example
An example authentication system with registration and login forms

## Roadmap

### UI

#### Login Form
- [X] Page URL `/`
- [X] Field for username
- [X] Field for password
- [X] "Login" button
- [X] "Sign Up" button
  - [X] When clicked, show registration form at `/signup`

#### Registration Form
- [X] Page URL `/signup`
- [X] Field for username
  - [X] Regex pattern: alphanumeric w/ underscore, 3-30 characters
  - [X] Show error in form when pattern does not match
- [X] Field for email
  - [X] Regex pattern: https://www.emailregex.com/
- [X] Field for password
  - [X] Regex pattern: at least 1 uppercase, 1 lowercase, 1 decimal digit, 8+ characters
  - [X] Show error in form when pattern does not match
- [X] Field for confirm password
  - [X] Valid only if it matches password
  - [X] Show error in form when pattern does not match
- [X] "Create account" button

#### Home Page (Dashboard)
- [ ] Base URL `/`
- [ ] Redirect to here when login successful
- [ ] Main content is placeholder kanban columns (just backgrounds)
- [ ] Top navbar with logout button
