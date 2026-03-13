import 'package:flutter/material.dart';
import 'package:mixxfit_mobile/features/auth/utils/register_validators.dart';
import 'package:mixxfit_mobile/features/shared/widgets/app_button.dart';

class RegisterWidget extends StatefulWidget {
  final VoidCallback onLoginTap;
  const RegisterWidget({super.key, required this.onLoginTap});

  @override
  State<RegisterWidget> createState() => _RegisterWidgetState();
}

class _RegisterWidgetState extends State<RegisterWidget> {
  final _formKey = GlobalKey<FormState>();
  final _firstNameController = TextEditingController();
  final _lastNameController = TextEditingController();
  final _usernameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();

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
                "Create Account",
                style: TextStyle(fontSize: 40, fontWeight: FontWeight.w600),
              ),
              Text(
                "Create your account and start tracking your fitness journey today.",
                style: TextStyle(fontSize: 16),
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
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: TextFormField(
                          controller: _firstNameController,
                          validator: RegisterValidators.validateFirstName,
                          textAlignVertical: TextAlignVertical.center,
                          decoration: InputDecoration(
                            hintText: 'First Name',
                            prefixIcon: Icon(Icons.person),
                          ),
                        ),
                      ),
                      Expanded(
                        child: TextFormField(
                          controller: _lastNameController,
                          validator: RegisterValidators.validateLastName,
                          textAlignVertical: TextAlignVertical.center,
                          decoration: InputDecoration(
                            hintText: 'Last Name',
                            prefixIcon: Icon(Icons.person_outline_outlined),
                          ),
                        ),
                      ),
                    ],
                  ),
                  TextFormField(
                    controller: _usernameController,
                    validator: RegisterValidators.validateUsername,
                    textAlignVertical: TextAlignVertical.center,
                    decoration: InputDecoration(
                      hintText: 'Username',
                      prefixIcon: Icon(Icons.badge),
                    ),
                  ),
                  TextFormField(
                    controller: _emailController,
                    validator: RegisterValidators.validateEmail,
                    textAlignVertical: TextAlignVertical.center,
                    decoration: InputDecoration(
                      hintText: 'Email Address',
                      prefixIcon: Icon(Icons.email),
                    ),
                  ),
                  TextFormField(
                    controller: _passwordController,
                    validator: RegisterValidators.validatePassword,
                    obscureText: true,
                    textAlignVertical: TextAlignVertical.center,
                    decoration: InputDecoration(
                      hintText: 'Password',
                      prefixIcon: Icon(Icons.lock),
                    ),
                  ),
                  TextFormField(
                    controller: _confirmPasswordController,
                    validator: (value) =>
                        RegisterValidators.validateConfirmPassword(
                          value,
                          _passwordController.text,
                        ),
                    obscureText: true,
                    textAlignVertical: TextAlignVertical.center,
                    decoration: InputDecoration(
                      hintText: 'Confirm Password',
                      prefixIcon: Icon(Icons.lock_person),
                    ),
                  ),
                  AppButton(
                    content: "Sign Up",
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        showDialog(
                          context: context,
                          builder: (context) => AlertDialog(
                            title: Text("Registration successful"),
                          ),
                        );
                      }
                    },
                  ),
                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: 25),
            child: Column(
              children: [
                Text(
                  "Already have an account?",
                  style: TextStyle(fontSize: 16),
                ),
                TextButton(
                  onPressed: widget.onLoginTap,
                  child: Text(
                    "Sign in here",
                    style: TextStyle(
                      fontSize: 22,
                      color: Colors.yellow[900],
                      decorationColor: Colors.yellow.shade900,
                      fontWeight: FontWeight.bold,
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
