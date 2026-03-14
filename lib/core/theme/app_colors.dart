import 'package:flutter/material.dart';

class AppColors {
  static const Color primaryYellow = Color(0xFFEAB308);
  static const Color primaryDarkYellow = Color(0xFFCA8A04);
  static const Color amber = Color(0xFFFBBF24);
  static const Color amberDark = Color(0xFFF59E0B);

  static const Color backgroundGrey = Color(0xFFE0E0E0);
  static const Color darkBlueGrey = Color(0xFF263238);

  static const Color textSlateDark = Color(0xFF1E293B);

  static const LinearGradient primaryGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomCenter,
    colors: [primaryYellow, primaryDarkYellow],
  );

  static const LinearGradient yellowGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFFFACC15), Color(0xFFEAB308)],
  );

  static const LinearGradient emeraldGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF34D399), Color(0xFF10B981)],
  );

  static const LinearGradient amberGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFFFBBF24), Color(0xFFF59E0B)],
  );

  static const LinearGradient redGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFFDC2626), Color(0xFFB91C1C)],
  );
}
