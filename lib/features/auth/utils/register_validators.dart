class RegisterValidators {
  static String? validateFirstName(String? value) {
    if (value == null || value.trim().isEmpty) {
      return "First name is required";
    }
    if (value.trim().length < 2) {
      return "First name must be at least 2 characters";
    }

    if (value.trim().length > 20) {
      return "First name cannot be longer than 20 characters";
    }

    return null;
  }

  static String? validateLastName(String? value) {
    if (value == null || value.trim().isEmpty) {
      return "Last name is required";
    }
    if (value.trim().length < 2) {
      return "Last name must be at least 2 characters";
    }

    if (value.trim().length > 20) {
      return "Last name cannot be longer than 20 characters";
    }

    return null;
  }

  static String? validateUsername(String? value) {
    if (value == null || value.trim().isEmpty) {
      return "Username is required";
    }
    if (value.trim().length < 3) {
      return "Username must be at least 3 characters";
    }
    if (!RegExp(r'^[a-zA-Z0-9_]+$').hasMatch(value)) {
      return "Username can only contain letters, numbers, and underscores";
    }
    return null;
  }

  static String? validateEmail(String? value) {
    if (value == null || value.trim().isEmpty) {
      return "Email is required";
    }
    if (!RegExp(r'^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,}$').hasMatch(value.trim())) {
      return "Please enter a valid email address";
    }
    return null;
  }

  static String? validatePassword(String? value) {
    if (value == null || value.isEmpty) {
      return "Password is required";
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }

    return null;
  }

  static String? validateConfirmPassword(String? value, String password) {
    if (value == null || value.isEmpty) {
      return "Please confirm your password";
    }
    if (value != password) {
      return "Passwords do not match";
    }
    return null;
  }
}
