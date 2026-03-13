import 'package:dio/dio.dart';
import 'package:mixxfit_mobile/features/auth/data/models/auth_response.dart';
import 'package:mixxfit_mobile/features/auth/data/models/login_request.dart';
import 'package:mixxfit_mobile/features/auth/data/models/register_request.dart';

class AuthRepository {
  final Dio _dio;

  AuthRepository(this._dio);

  Future<AuthResponse> register(RegisterRequest request) async {
    final response = await _dio.post("/auth/register", data: request.toJson());
    return AuthResponse.fromJson(response.data);
  }

  Future<AuthResponse> login(LoginRequest request) async {
    final response = await _dio.post("/auth/login", data: request.toJson());
    return AuthResponse.fromJson(response.data);
  }

  Future<void> logout() async => await _dio.post("/auth/logout");
}
