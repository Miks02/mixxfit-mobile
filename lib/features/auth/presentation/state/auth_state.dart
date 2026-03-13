import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:mixxfit_mobile/features/auth/data/models/auth_response.dart';
part 'auth_state.freezed.dart';

@freezed
abstract class AuthState with _$AuthState {
  const AuthState._();

  const factory AuthState({AuthResponse? authResponse}) = _AuthState;

  bool get isAuthenticated => authResponse != null;
}
