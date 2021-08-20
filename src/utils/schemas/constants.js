export const errorMessages = {
    max: (num) => `Must be ${num} characters or less`,
    min: (num) => `Must be ${num} characters or more`,
    required: `Required`,
    email: `Invalid email address`,
    password: `Password must contain at least 8 characters,  one uppercase, one number and one special case character"`
}

export const Regex =  {
    passwordMatches: /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
}