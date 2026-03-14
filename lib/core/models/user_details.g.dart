// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user_details.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

UserDetails _$UserDetailsFromJson(Map<String, dynamic> json) => UserDetails(
  fullName: json['fullName'] as String,
  userName: json['userName'] as String,
  email: json['email'] as String,
  imagePath: json['imagePath'] as String?,
  gender: $enumDecodeNullable(_$GenderEnumMap, json['gender']),
  currentWeight: (json['currentWeight'] as num?)?.toDouble(),
  targetWeight: (json['targetWeight'] as num?)?.toDouble(),
  height: (json['height'] as num?)?.toDouble(),
  dailyCalorieGoal: (json['dailyCalorieGoal'] as num?)?.toInt(),
  accountStatus: $enumDecode(_$AccountStatusEnumMap, json['accountStatus']),
  dateOfBirth: json['dateOfBirth'] as String?,
  age: (json['age'] as num?)?.toInt(),
);

Map<String, dynamic> _$UserDetailsToJson(UserDetails instance) =>
    <String, dynamic>{
      'fullName': instance.fullName,
      'userName': instance.userName,
      'email': instance.email,
      'imagePath': instance.imagePath,
      'gender': _$GenderEnumMap[instance.gender],
      'currentWeight': instance.currentWeight,
      'targetWeight': instance.targetWeight,
      'height': instance.height,
      'dailyCalorieGoal': instance.dailyCalorieGoal,
      'accountStatus': _$AccountStatusEnumMap[instance.accountStatus]!,
      'dateOfBirth': instance.dateOfBirth,
      'age': instance.age,
    };

const _$GenderEnumMap = {Gender.male: 0, Gender.female: 1, Gender.other: 2};

const _$AccountStatusEnumMap = {
  AccountStatus.active: 0,
  AccountStatus.suspended: 1,
  AccountStatus.banned: 2,
};
