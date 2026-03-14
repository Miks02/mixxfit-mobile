import 'dart:io';

import 'package:cookie_jar/cookie_jar.dart';
import 'package:dio/dio.dart';
import 'package:dio/io.dart';
import 'package:dio_cookie_manager/dio_cookie_manager.dart';
import 'package:flutter/foundation.dart';
import 'package:mixxfit_mobile/core/constants/app_constants.dart';

class DioClient {
  late Dio _dio;
  final CookieJar _cookieJar;

  Dio get dio => _dio;

  DioClient(this._cookieJar) {
    _dio = Dio(
      BaseOptions(
        baseUrl: kDebugMode ? AppConstants.devUrl() : AppConstants.prodUrl(),
        connectTimeout: const Duration(seconds: 10),
        receiveTimeout: const Duration(seconds: 10),
        contentType: 'application/json',
      ),
    );
    _dio.interceptors.add(CookieManager(_cookieJar));

    if (kDebugMode) {
      _dio.interceptors.add(
        LogInterceptor(responseBody: true, requestBody: true),
      );

      (_dio.httpClientAdapter as IOHttpClientAdapter).createHttpClient = () {
        final client = HttpClient();
        client.badCertificateCallback =
            (X509Certificate cert, String host, int port) {
              return true;
            };
        return client;
      };
    }
  }
}
