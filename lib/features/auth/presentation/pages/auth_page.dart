import 'package:flutter/material.dart';
import 'package:mixxfit_mobile/core/theme/app_colors.dart';
import 'package:mixxfit_mobile/features/auth/presentation/widgets/login_widget.dart';
import 'package:mixxfit_mobile/features/auth/presentation/widgets/register_widget.dart';

class AuthPage extends StatefulWidget {
  const AuthPage({super.key});

  @override
  State<AuthPage> createState() => _AuthPageState();
}

class _AuthPageState extends State<AuthPage> {
  bool isRegister = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            height: 250,
            child: Container(
              decoration: BoxDecoration(gradient: AppColors.primaryGradient),
              child: AnimatedPadding(
                padding: EdgeInsets.only(top: 0, bottom: isRegister ? 50 : 0),
                curve: Curves.easeInOut,
                duration: Duration(milliseconds: 300),
                child: Image.asset(
                  "assets/logo3-nobg.png",
                  fit: BoxFit.contain,
                ),
              ),
            ),
          ),
          AnimatedPositioned(
            curve: Curves.easeInOut,
            top: isRegister ? 150 : 200,
            left: 0,
            right: 0,
            bottom: 0,
            duration: Duration(milliseconds: 300),
            child: Container(
              decoration: BoxDecoration(
                color: Colors.grey[300],
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(25),
                  topRight: Radius.circular(25),
                ),
                boxShadow: [BoxShadow(offset: Offset(0, 0), blurRadius: 5)],
              ),
              child: AnimatedSwitcher(
                duration: Duration(milliseconds: 300),
                child: isRegister
                    ? RegisterWidget(
                        key: const ValueKey("register"),
                        onLoginTap: () => setState(() => isRegister = false),
                      )
                    : LoginWidget(
                        key: const ValueKey("login"),
                        onRegisterTap: () => setState(() => isRegister = true),
                      ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
