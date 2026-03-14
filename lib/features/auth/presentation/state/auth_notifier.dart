import 'package:mixxfit_mobile/features/auth/data/models/login_request.dart';
import 'package:mixxfit_mobile/features/auth/data/models/register_request.dart';
import 'package:mixxfit_mobile/features/auth/presentation/state/auth_state.dart';
import 'package:mixxfit_mobile/features/auth/providers/auth_providers.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';
part 'auth_notifier.g.dart';

@riverpod
class AuthNotifier extends _$AuthNotifier {
  @override
  FutureOr<AuthState> build() => const AuthState();

  Future<void> login(LoginRequest request) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(() async {
      final response = await ref.read(authRepositoryProvider).login(request);
      return AuthState(authResponse: response);
    });
  }

  Future<void> register(RegisterRequest request) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(() async {
      final response = await ref.read(authRepositoryProvider).register(request);
      return AuthState(authResponse: response);
    });
  }

  Future<void> logout() async {
    state = AsyncLoading();
    state = await AsyncValue.guard(() async {
      await ref.read(authRepositoryProvider).logout();
      return const AuthState();
    });
  }
}
