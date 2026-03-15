import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mixxfit_mobile/core/theme/app_colors.dart';

class AppBottomNav extends ConsumerWidget {
  const AppBottomNav({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final currentRoute = GoRouterState.of(context).uri.toString();

    return BottomAppBar(
      clipBehavior: Clip.antiAlias,
      padding: EdgeInsets.only(left: 10, right: 10),
      height: 60,
      shape: const CircularNotchedRectangle(),
      notchMargin: 12,
      color: Color(0xFFCBD5E1),
      child: Container(
        decoration: const BoxDecoration(
          color: AppColors.primaryYellow,
          borderRadius: BorderRadius.vertical(
            top: Radius.circular(25),
            bottom: Radius.circular(25),
          ),
          boxShadow: [],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            IconButton(
              selectedIcon: Icon(
                Icons.bar_chart_rounded,
                color: Colors.green[600],
              ),
              isSelected: currentRoute == "/dashboard",
              icon: const Icon(Icons.bar_chart),
              color: AppColors.darkBlueGrey,
              iconSize: 30,
              onPressed: () => context.go("/dashboard"),
            ),
            IconButton(
              selectedIcon: Icon(
                Icons.fitness_center_rounded,
                color: Colors.green[600],
              ),
              isSelected: currentRoute == "/workouts",
              icon: const Icon(Icons.fitness_center),
              color: AppColors.darkBlueGrey,
              iconSize: 30,
              onPressed: () => context.go("/workouts"),
            ),
            const SizedBox(width: 40),
            IconButton(
              selectedIcon: Icon(
                Icons.fitness_center_rounded,
                color: Colors.green[600],
              ),
              isSelected: currentRoute == "/weight",
              icon: const Icon(Icons.scale),
              color: AppColors.darkBlueGrey,
              iconSize: 30,
              onPressed: () => context.go("/weight"),
            ),
            IconButton(
              selectedIcon: Icon(
                Icons.fitness_center_rounded,
                color: Colors.green[600],
              ),
              isSelected: currentRoute == "/profile",
              icon: const Icon(Icons.person_rounded),
              color: AppColors.darkBlueGrey,
              iconSize: 30,
              onPressed: () => context.go("/profile"),
            ),
          ],
        ),
      ),
    );
  }
}
