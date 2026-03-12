import 'package:flutter/material.dart';

class AppColors {
  static const Color primaryYellow = Color(0xFFEAB308);
  static const Color primaryDarkYellow = Color(0xFFCA8A04);

  static const Color backgroundGrey = Color(0xFFE0E0E0);
  static const Color darkBlueGrey = Color(0xFF263238);

  static const LinearGradient primaryGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomCenter,
    colors: [primaryYellow, primaryDarkYellow],
  );
}
