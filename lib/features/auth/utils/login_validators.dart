class LoginValidators {
  static String? emailValidator(String? email) {
    if (email == null || email.isEmpty) {
      return "Email is required.";
    }
  }

  static String? passwordValidator(String? password) {
    if (password == null || password.isEmpty) {
      return "Password is required.";
    }
  }
}
