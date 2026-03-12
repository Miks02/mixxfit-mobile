import 'package:json_annotation/json_annotation.dart';
part 'register_request.g.dart';

@JsonSerializable(createToJson: true, createFactory: false)
class RegisterRequest {
  final String firstName;
  final String lastName;
  final String userName;
  final String email;
  final String password;
  final String confirmPassword;

  RegisterRequest({
    required this.firstName,
    required this.lastName,
    required this.userName,
    required this.email,
    required this.password,
    required this.confirmPassword,
  });

  Map<String, dynamic> toJson() => _$RegisterRequestToJson(this);
}
