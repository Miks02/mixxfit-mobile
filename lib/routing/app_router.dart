import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mixxfit_mobile/features/auth/presentation/pages/auth_page.dart';
import 'package:mixxfit_mobile/features/auth/presentation/state/auth_notifier.dart';

final routerProvider = Provider<GoRouter>((ref) {
  final authState = ref.watch(authProvider);

  return GoRouter(
    initialLocation: authState.asData!.value.isAuthenticated
        ? "/dashboard"
        : "/auth",
    redirect: (context, state) {
      final isLoggedIn = authState.asData!.value.isAuthenticated ? true : false;

      if (state.matchedLocation == "/auth") {
        return isLoggedIn ? "/dashboard" : "/auth";
      }

      if (state.matchedLocation != "/auth" && !isLoggedIn) {
        return "/auth";
      }

      return null;
    },
    routes: [
      GoRoute(
        path: "/auth",
        name: "/auth",
        builder: (context, state) => AuthPage(),
      ),
    ],
  );
});

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
