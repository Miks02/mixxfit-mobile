import 'package:flutter/material.dart';
import 'package:mixxfit_mobile/layouts/app_bottom_nav.dart';
import 'package:mixxfit_mobile/layouts/app_drawer.dart';
import 'package:mixxfit_mobile/layouts/app_floating_button.dart';
import 'package:mixxfit_mobile/layouts/app_topbar.dart';

class AppLayout extends StatelessWidget {
  const AppLayout({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBody: true,
      backgroundColor: Color(0xFFCBD5E1),
      appBar: AppTopbar(),
      endDrawer: AppDrawer(),
      body: SingleChildScrollView(),
      bottomNavigationBar: AppBottomNav(),
      floatingActionButton: AppFloatingButton(),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
    );
  }
}
