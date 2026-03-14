import 'package:json_annotation/json_annotation.dart';
import 'package:mixxfit_mobile/core/models/account_status.dart';
import 'package:mixxfit_mobile/core/models/gender.dart';
part 'user_details.g.dart';

@JsonSerializable()
class UserDetails {
  final String fullName;
  final String userName;
  final String email;
  final String? imagePath;

  final Gender? gender;
  final double? currentWeight;
  final double? targetWeight;
  final double? height;
  final int? dailyCalorieGoal;

  final AccountStatus accountStatus;
  final String? dateOfBirth;
  final int? age;

  UserDetails({
    required this.fullName,
    required this.userName,
    required this.email,
    this.imagePath,
    this.gender,
    this.currentWeight,
    this.targetWeight,
    this.height,
    this.dailyCalorieGoal,
    required this.accountStatus,
    this.dateOfBirth,
    this.age,
  });

  factory UserDetails.fromJson(Map<String, dynamic> json) =>
      _$UserDetailsFromJson(json);

  Map<String, dynamic> toJson() => _$UserDetailsToJson(this);
}
