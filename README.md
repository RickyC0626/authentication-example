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
- [X] On successful signup, redirect to login page at `/`

#### Home Page (Dashboard)
- [ ] Base URL `/`
- [ ] Redirect to here when login successful
- [ ] Main content is placeholder kanban columns (just backgrounds)
- [ ] Top navbar with logout button

### Server

#### REST API
- [ ] `POST /signup` - Create new account
  - [X] Request body contains `username`, `email` and `password`
  - [X] Hashes password with salt
  - [ ] Persists new user account in database
    - [X] Field for verified email status
    - [ ] If email unverified, delete account after 15 minutes
    - [ ] If email verified, set verified email status to true, don't delete
  - [ ] Sends email verification with one-time code, set to expire in 10 minutes
  - [X] Respond with status code `201 Created` on success
  - [X] Respond with status code `500 Internal Server Error` on failure
- [ ] `GET /login` - Login with credentials
  - [X] Request body contains `username` and `password`
  - [X] Retrieves user from database by `username`
  - [X] Compares password hashes with stored hash
  - [ ] Sends email verification with one-time code
  - [ ] Sends limited use access token to use in browser as response
    - [ ] Timestamp for expiration date and time
    - [ ] If expired, user will have to login again
  - [X] Respond with status code `200 OK` on success
  - [X] Respond with status code `403 Forbidden` on failure
  - [X] Respond with status code `500 Internal Server Error` on general failure
- [ ] `GET /verify` - Verify new account
  - [ ] Request body contains `accountId` and `otp`
  - [ ] Checks if `otp` has expired (compare current time to expiry timestamp)
  - [ ] Verifies one-time code, allows sending access token to user after next login
  - [ ] Allows only 3 failed attempts before voiding the code
    - [ ] Redirects to login page after voiding

#### Persistence (Database)
- [X] Setup MongoDB