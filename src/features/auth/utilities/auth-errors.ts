

export const getAuthError = (errorCode: string) => {
    const messages: Record<string, string> = {
        "Auth.LoginFailed": "Invalid email address or password.",
        "Auth.RegistrationFailed": "An error occurred during account registration. Try again later"
    }

    return messages[errorCode] ?? "Something went wrong. Try again later"
}
