import 'package:flutter/material.dart';
import 'package:mixxfit_mobile/core/theme/app_colors.dart';

class AppTopbar extends StatelessWidget implements PreferredSizeWidget {
  const AppTopbar({super.key});

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: AppColors.primaryYellow,
      title: const Text(
        "Dashboard",
        style: TextStyle(
          fontSize: 30,
          fontWeight: FontWeight(500),
          color: AppColors.darkBlueGrey,
        ),
      ),
      actions: [
        Builder(
          builder: (context) => IconButton(
            icon: const Icon(Icons.menu),
            iconSize: 35,
            color: AppColors.darkBlueGrey,
            onPressed: () => Scaffold.of(context).openEndDrawer(),
          ),
        ),
      ],
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
