import 'package:dio/dio.dart';
import 'package:mixxfit_mobile/core/network/network_providers.dart';
import 'package:mixxfit_mobile/features/auth/data/repository/auth_repository.dart';
import 'package:riverpod/riverpod.dart';

final authRepositoryProvider = Provider<AuthRepository>((ref) {
  final Dio dio = ref.watch(dioClientProvider);
  return AuthRepository(dio);
});
