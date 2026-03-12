class LoginValidators {
  static String? validateEmail(String? email) {
    if (email == null || email.isEmpty) {
      return "Email is required.";
    }
    return null;
  }

  static String? validatePassword(String? password) {
    if (password == null || password.isEmpty) {
      return "Password is required.";
    }
    return null;
  }
}
