import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class AppFloatingButton extends StatelessWidget {
  const AppFloatingButton({super.key});

  @override
  Widget build(BuildContext context) {
    return FloatingActionButton(
      splashColor: Colors.amber,
      backgroundColor: Colors.amberAccent,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(25)),
      onPressed: () => context.go("/workout-form"),
      child: const Icon(Icons.add),
    );
  }
}
