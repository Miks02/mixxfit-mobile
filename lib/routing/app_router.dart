import 'package:go_router/go_router.dart';
import 'package:mixxfit_mobile/features/auth/presentation/pages/auth_page.dart';

final appRouter = GoRouter(
  initialLocation: "/auth",
  routes: [
    GoRoute(
      path: "/auth",
      name: "/auth",
      builder: (context, state) => AuthPage(),
    ),
  ],
);
