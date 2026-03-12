import 'package:cookie_jar/cookie_jar.dart';
import 'package:dio/dio.dart';
import 'package:mixxfit_mobile/core/network/dio_client.dart';
import 'package:riverpod/riverpod.dart';

final cookieJarProvider = Provider<CookieJar>((ref) => CookieJar());

final dioClientProvider = Provider<Dio>((ref) {
  final CookieJar jar = ref.watch(cookieJarProvider);

  return DioClient(jar).dio;
});
