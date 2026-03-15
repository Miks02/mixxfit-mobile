import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mixxfit_mobile/core/theme/app_colors.dart';

class AppDrawer extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final currentRoute = GoRouterState.of(context).uri.toString();

    return Drawer(
      width: MediaQuery.of(context).size.width * 1,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(bottom: Radius.circular(25)),
      ),
      child: Ink(
        decoration: BoxDecoration(gradient: AppColors.primaryGradient),
        child: Column(
          children: [
            Container(
              height: 210,
              padding: EdgeInsets.zero,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.vertical(
                  bottom: Radius.circular(40),
                ),
                gradient: LinearGradient(
                  begin: Alignment.bottomCenter,
                  end: Alignment.topCenter,
                  colors: [
                    AppColors.primaryDarkYellow,
                    AppColors.primaryYellow,
                  ],
                ),
                boxShadow: [
                  BoxShadow(
                    blurRadius: 5,
                    offset: Offset(0, 4),
                    color: Colors.black26,
                  ),
                ],
              ),
              child: Padding(
                padding: const EdgeInsets.only(top: 35),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Image(
                      image: AssetImage("assets/logo3-nobg.png"),
                      width: 250,
                      height: 250,
                      fit: BoxFit.cover,
                    ),
                    Padding(
                      padding: const EdgeInsets.all(25),
                      child: Builder(
                        builder: (context) => IconButton(
                          icon: Icon(Icons.arrow_back_ios_new_rounded),
                          iconSize: 35,
                          color: AppColors.darkBlueGrey,
                          onPressed: () =>
                              Scaffold.of(context).closeEndDrawer(),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(height: 20),
            ListTile(
              selected: currentRoute == "/dashboard",
              selectedColor: Colors.green[900],
              splashColor: AppColors.primaryYellow,
              title: Row(
                spacing: 16,
                children: [
                  Icon(
                    Icons.bar_chart_outlined,
                    size: 30,
                    color: currentRoute == "/dashboard"
                        ? Colors.green[900]
                        : AppColors.textSlateDark,
                  ),
                  Text(
                    "Dashboard",
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight(500),
                      color: currentRoute == "/dashboard"
                          ? Colors.green[900]
                          : AppColors.textSlateDark,
                    ),
                  ),
                ],
              ),
              onTap: () {
                Scaffold.of(context).closeEndDrawer();
                context.go("/dashboard");
              },
            ),
            ListTile(
              splashColor: AppColors.primaryYellow,
              title: Row(
                spacing: 16,
                children: [
                  Icon(
                    Icons.fitness_center,
                    size: 30,
                    color: currentRoute == "/workouts"
                        ? Colors.green[900]
                        : AppColors.textSlateDark,
                  ),
                  Text(
                    "Workouts",
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight(500),
                      color: currentRoute == "/workouts"
                          ? Colors.green[900]
                          : AppColors.textSlateDark,
                    ),
                  ),
                ],
              ),
              onTap: () {
                Scaffold.of(context).closeEndDrawer();
                context.go("/workouts");
              },
            ),
            ListTile(
              splashColor: AppColors.primaryYellow,
              title: Row(
                spacing: 16,
                children: [
                  Icon(
                    Icons.scale,
                    size: 30,
                    color: currentRoute == "/weight"
                        ? Colors.green[900]
                        : AppColors.textSlateDark,
                  ),
                  Text(
                    "Weight Tracking",
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight(500),
                      color: currentRoute == "/weight"
                          ? Colors.green[900]
                          : AppColors.textSlateDark,
                    ),
                  ),
                ],
              ),
              onTap: () {
                Scaffold.of(context).closeEndDrawer();
                context.go("/weight");
              },
            ),
            ListTile(
              splashColor: AppColors.primaryYellow,
              title: Row(
                spacing: 16,
                children: [
                  Icon(
                    Icons.rice_bowl,
                    size: 30,
                    color: currentRoute == "/nutrition"
                        ? Colors.green[900]
                        : AppColors.textSlateDark,
                  ),
                  Text(
                    "Nutrition",
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight(500),
                      color: currentRoute == "/nutrition"
                          ? Colors.green[900]
                          : AppColors.textSlateDark,
                    ),
                  ),
                ],
              ),
              onTap: () {
                Scaffold.of(context).closeEndDrawer();
                context.go("/nutrition");
              },
            ),
            ListTile(
              splashColor: AppColors.primaryYellow,
              title: Row(
                spacing: 16,
                children: [
                  Icon(
                    Icons.single_bed_sharp,
                    size: 30,
                    color: currentRoute == "/sleep"
                        ? Colors.green[900]
                        : AppColors.textSlateDark,
                  ),
                  Text(
                    "Sleep Loggin",
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight(500),
                      color: currentRoute == "/sleep"
                          ? Colors.green[900]
                          : AppColors.textSlateDark,
                    ),
                  ),
                ],
              ),
              onTap: () {
                Scaffold.of(context).closeEndDrawer();
                context.go("/sleep");
              },
            ),
            ListTile(
              splashColor: AppColors.primaryYellow,
              title: Row(
                spacing: 16,
                children: [
                  Icon(
                    Icons.library_books,
                    size: 30,
                    color: currentRoute == "/exercise-library"
                        ? Colors.green[900]
                        : AppColors.textSlateDark,
                  ),
                  Text(
                    "Exercise Library",
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight(500),
                      color: currentRoute == "/exercise-library"
                          ? Colors.green[900]
                          : AppColors.textSlateDark,
                    ),
                  ),
                ],
              ),
              onTap: () {
                Scaffold.of(context).closeEndDrawer();
                context.go("/exercise-library");
              },
            ),
            ListTile(
              splashColor: AppColors.primaryYellow,
              title: Row(
                spacing: 16,
                children: [
                  Icon(
                    Icons.person,
                    size: 30,
                    color: currentRoute == "/profile"
                        ? Colors.green[900]
                        : AppColors.textSlateDark,
                  ),
                  Text(
                    "Profile And Settings",
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight(500),
                      color: currentRoute == "/profile"
                          ? Colors.green[900]
                          : AppColors.textSlateDark,
                    ),
                  ),
                ],
              ),
              onTap: () {
                Scaffold.of(context).closeEndDrawer();
                context.go("/profile");
              },
            ),
            const Spacer(),
            ListTile(
              splashColor: AppColors.primaryYellow,
              title: Row(
                spacing: 16,
                children: [
                  Icon(Icons.logout, color: Colors.red[800], size: 30),
                  Text(
                    "Logout",
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight(500),
                      color: Colors.red[800],
                    ),
                  ),
                ],
              ),
              onTap: () {
                Scaffold.of(context).closeEndDrawer();
                context.go("/auth");
              },
            ),
            SizedBox(height: MediaQuery.of(context).padding.bottom),
          ],
        ),
      ),
    );
  }
}
