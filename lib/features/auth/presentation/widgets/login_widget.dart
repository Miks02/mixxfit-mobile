import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mixxfit_mobile/features/auth/utils/login_validators.dart';

class LoginWidget extends StatefulWidget {
  final VoidCallback onRegisterTap;
  const LoginWidget({super.key, required this.onRegisterTap});

  @override
  State<LoginWidget> createState() => _LoginWidgetState();
}

class _LoginWidgetState extends State<LoginWidget> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(25.0),
      child: Column(
        children: [
          Column(
            spacing: 5,
            children: [
              Text(
                "Welcome Back",
                style: TextStyle(fontSize: 40, fontWeight: FontWeight.w500),
              ),
              Text(
                "Access your workout history, set new goals, and take your fitness journey to the next level.",
                style: TextStyle(),
                textAlign: TextAlign.center,
              ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.only(top: 25),
            child: Form(
              key: _formKey,
              child: Column(
                spacing: 20,
                children: [
                  TextFormField(
                    controller: _emailController,
                    textAlignVertical: TextAlignVertical.center,
                    decoration: InputDecoration(
                      hintText: 'Email Address',
                      prefixIcon: Icon(Icons.email),
                    ),
                    validator: LoginValidators.emailValidator,
                  ),
                  TextFormField(
                    controller: _passwordController,
                    textAlignVertical: TextAlignVertical.center,
                    decoration: InputDecoration(
                      hintText: 'Password',
                      prefixIcon: Icon(Icons.lock),
                    ),
                    validator: LoginValidators.passwordValidator,
                  ),
                  ElevatedButton(
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        showDialog(
                          context: context,
                          builder: (context) =>
                              AlertDialog(title: Text("Login successful")),
                        );
                      }
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.yellow[700],
                      foregroundColor: Colors.blueGrey[900],
                      minimumSize: Size(double.infinity, 60),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                      elevation: 0,
                    ),
                    child: Text(
                      "Log in",
                      style: TextStyle(
                        fontSize: 30,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: 25),
            child: Column(
              children: [
                Text("Don't have an account ?", style: TextStyle(fontSize: 16)),
                TextButton(
                  onPressed: widget.onRegisterTap,
                  child: Text(
                    "Register here",
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.yellow[900],
                      decoration: TextDecoration.underline,
                      decorationColor: Colors.yellow.shade900,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
