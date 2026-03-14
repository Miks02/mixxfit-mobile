import 'package:json_annotation/json_annotation.dart';

@JsonEnum(valueField: 'index')
enum AccountStatus { active, suspended, banned }
