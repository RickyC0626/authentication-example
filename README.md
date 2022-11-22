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
- [X] Base URL `/`
- [X] Redirect to here when login successful
- [ ] Main content is placeholder kanban columns (just backgrounds)
- [ ] Logout button

### Server

#### REST API
- [ ] `POST /signup` - Create new account
  - [X] Request body contains `username`, `email` and `password`
  - [X] Hashes password with salt
  - [X] Persists new user account in database
    - [X] Field for verified email status
    - [ ] If email unverified, delete account after 15 minutes
    - [ ] If email verified, set verified email status to true, don't delete
  - [ ] Sends email verification with one-time code, set to expire in 10 minutes
  - [X] Respond with status code `201 Created` on success
  - [X] Respond with status code `500 Internal Server Error` on failure
- [ ] `POST /login` - Login with credentials
  - [X] Request body contains `username` and `password`
  - [X] Retrieves user from database by `username`
  - [X] Compares password hashes with stored hash
  - [ ] Sends email verification with one-time code, set to expire in 10 minutes
  - [X] Sends limited use access token (1 hr) to use in browser as response
    - [X] Has max age (time of expiration)
    - [X] If expired, a new token will have to be generated using refresh token
  - [X] Respond with status code `200 OK` on success
  - [X] Respond with status code `403 Forbidden` on failure
  - [X] Respond with status code `500 Internal Server Error` on general failure
- [X] `GET /refresh` - Generate new access token using refresh token
  - [X] Header contains authorization bearer refresh token
  - [X] If there's no token, return `406 Not Acceptable`
  - [X] If token is wrong or expired, return `406 Not Acceptable`
  - [X] If token is verified, return `200 OK` with new access token as payload
- [X] `GET /` - Gain authorized access to homepage (verification middleware)
  - [X] Header contains authorization bearer access token
  - [X] If there's no token, return `401 Unauthorized`
  - [X] If token is wrong or expired, return `403 Forbidden`
  - [X] If token is verified, return `200 OK`
- [ ] `GET /verify` - Verify new account
  - [ ] Request body contains `accountId` and `otp`
  - [ ] Checks if `otp` has expired (compare current time to expiry timestamp)
  - [ ] Verifies one-time code, allows sending access token to user after next login
  - [ ] Allows only 3 failed attempts before voiding the code
    - [ ] Redirects to login page after voiding

#### Persistence (Database)
- [X] Setup MongoDB