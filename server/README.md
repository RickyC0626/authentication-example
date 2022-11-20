# Authentication Server

## Design

### Registration / Sign Up
User wants to create a new account:
- Enter an email, a strong password, and confirm password
- On submit, send request to authentication server
- Password is hashed with salt before storing in database
- To verify user has access to email, send one-time code (6 digit alphanumeric) that expires in 5-10 minutes
- Once correct code is entered and user is verified, store email and hashed password in database
- Redirect user to login page
- User logs in with newly created credentials

### Login
- User enters email and password
- On submit, send request to authentication server
- If email does not exist, respond with error
- If password is wrong, respond with error
- If hashed password matches the saved password, send one-time verification code to user email
- If incorrect code is entered, respond with error
- If correct code is entered, verify user and redirect them to home page

### Reset Password
- User enters wrong username or password, they forget credentials
- When forget password is clicked, prompt user to enter email
- Email verification will be sent with a one-time use reset token
- If user has access to email, they can enter the token on website
- If correct token is entered, perform password reset
- Prompt user to enter new password and confirm password
- On submit, send request to authentication server
- Replace old password with new password, after hashing and salting
- Redirect user to login page, where they can login with updated credentials

## Difficulties / Possible Security Risks
- Since email is personally identifiable information, how to protect it as well as password?
  - Perhaps login with a username, using email only for verification
  - Email can be hashed with salt as well
- Don't give attackers too much information when error occurs, just say that login has failed
  - If username doesn't exist or password is wrong, don't tell them that
- Hashing and encryption could take substantial CPU power, attackers could utilize this for DDoS attack
  - Implement rate-limiting to prevent too many requests made
  - Only begin hashing when email has been verified
  - If no verification within a few minutes, delete signup information
- Limit number of wrong password attempts, implement cooldown if exceeds
  - i.e. after 10 attempts, cooldown for 10 minutes, suggest user to reset password
  - Increase cooldown length after each failure
  - Send notification to email associated with account if there is suspicious activity or attempted login at a different location