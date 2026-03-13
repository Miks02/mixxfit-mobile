import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mixxfit_mobile/features/auth/data/models/login_request.dart';
import 'package:mixxfit_mobile/features/auth/presentation/state/auth_notifier.dart';
import 'package:mixxfit_mobile/features/auth/utils/login_validators.dart';

class LoginWidget extends ConsumerStatefulWidget {
  final VoidCallback onRegisterTap;
  const LoginWidget({super.key, required this.onRegisterTap});

  @override
  ConsumerState<LoginWidget> createState() => _LoginWidgetState();
}

class _LoginWidgetState extends ConsumerState<LoginWidget> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final authState = ref.watch(authProvider);

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
                      errorStyle: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w600,
                      ),
                      hintText: 'Email Address',
                      prefixIcon: Icon(Icons.email),
                    ),
                    validator: LoginValidators.validateEmail,
                  ),
                  TextFormField(
                    controller: _passwordController,
                    textAlignVertical: TextAlignVertical.center,
                    decoration: InputDecoration(
                      errorStyle: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w600,
                      ),
                      hintText: 'Password',
                      prefixIcon: Icon(Icons.lock),
                    ),
                    obscureText: true,
                    validator: LoginValidators.validatePassword,
                  ),
                  ElevatedButton(
                    onPressed: authState.isLoading
                        ? null
                        : () {
                            if (_formKey.currentState!.validate()) {
                              ref
                                  .read(authProvider.notifier)
                                  .login(
                                    LoginRequest(
                                      email: _emailController.text,
                                      password: _passwordController.text,
                                    ),
                                  );
                            }
                          },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.yellow[700],
                      foregroundColor: Colors.blueGrey[900],
                      minimumSize: Size(double.infinity, 60),
                      disabledBackgroundColor: Colors.yellow[700]!.withValues(
                        alpha: 0.5,
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                      elevation: 0,
                    ),

                    child: authState.isLoading
                        ? CircularProgressIndicator(
                            valueColor: AlwaysStoppedAnimation<Color>(
                              Colors.deepOrange.withValues(alpha: 0.6),
                            ),
                          )
                        : Text(
                            "Log in",
                            style: TextStyle(
                              fontSize: 30,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                  ),
                  if (authState.hasError)
                    Text(
                      "Invalid email address or password",
                      style: TextStyle(
                        fontSize: 16,
                        color: Theme.of(context).colorScheme.error,
                        fontWeight: FontWeight.w600,
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
