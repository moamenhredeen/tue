import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_calendar/calendar.dart';

class CalendarScreen extends StatefulWidget {
  const CalendarScreen({super.key});

  @override
  State<CalendarScreen> createState() => _CalendarScreenState();
}

class _CalendarScreenState extends State<CalendarScreen> {

  final CalendarController _calendarController = CalendarController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Calendar"),
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
          SizedBox(width: 10,),
        ],
      ),
      body: SfCalendar(
        controller: _calendarController,
      ),
    );
  }
}
