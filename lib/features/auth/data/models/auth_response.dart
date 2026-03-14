import 'package:json_annotation/json_annotation.dart';
import 'package:mixxfit_mobile/core/models/user_details.dart';
part 'auth_response.g.dart';

@JsonSerializable(createFactory: true, createToJson: false)
class AuthResponse {
  final String accessToken;
  
  @JsonKey(name: 'user')
  final UserDetails userDetails;

  AuthResponse({required this.accessToken, required this.userDetails});

  factory AuthResponse.fromJson(Map<String, dynamic> json) =>
      _$AuthResponseFromJson(json);
}
