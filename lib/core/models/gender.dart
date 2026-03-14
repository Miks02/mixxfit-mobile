import 'package:json_annotation/json_annotation.dart';

@JsonEnum(valueField: 'index')
enum Gender { male, female, other }
