import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mixxfit_mobile/core/theme/app_colors.dart';
import 'package:mixxfit_mobile/features/auth/data/models/login_request.dart';
import 'package:mixxfit_mobile/features/auth/presentation/state/auth_notifier.dart';
import 'package:mixxfit_mobile/features/auth/utils/login_validators.dart';
import 'package:mixxfit_mobile/features/shared/widgets/app_button.dart';

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
                style: TextStyle(
                  fontSize: 40,
                  fontWeight: FontWeight.w600,
                  color: AppColors.darkBlueGrey,
                ),
              ),
              Text(
                "Access your workout history, set new goals, and take your fitness journey to the next level.",
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
                  TextFormField(
                    controller: _emailController,
                    textAlignVertical: TextAlignVertical.center,
                    decoration: InputDecoration(
                      hintText: 'Email Address',
                      prefixIcon: Icon(Icons.email),
                    ),
                    validator: LoginValidators.validateEmail,
                  ),
                  TextFormField(
                    controller: _passwordController,
                    textAlignVertical: TextAlignVertical.center,
                    decoration: InputDecoration(
                      hintText: 'Password',
                      prefixIcon: Icon(Icons.lock),
                    ),
                    obscureText: true,
                    validator: LoginValidators.validatePassword,
                  ),
                  AppButton(
                    content: "Sign In",
                    isLoading: authState.isLoading,
                    backgroundGradient: AppColors.primaryGradient,
                    onPressed: () {
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
                    "Join MixxFit",
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
