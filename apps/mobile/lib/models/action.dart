
import 'package:tue_app/models/priority.dart';
import 'package:tue_app/models/status.dart';

class NextAction {
  final int id;
  final String title;
  final String body;
  final Status status;
  final Priority priority;
  final List<String> tags;
  
  
  NextAction({
    required this.id, 
    required this.title, 
    required this.body, 
    required this.status, 
    required this.priority,
    required this.tags,
  });
  
}