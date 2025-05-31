import 'package:flutter/material.dart';

class ActionInput extends StatefulWidget {
  const ActionInput({super.key});

  @override
  State<ActionInput> createState() => _ActionInputState();
}

class _ActionInputState extends State<ActionInput> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(25),
      child: const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          TextField(
            style: TextStyle(fontSize: 24),
            decoration: InputDecoration(
              border: InputBorder.none,
              hintText: "Short action summary",
              contentPadding: EdgeInsets.all(10),
            ),
          ),
          TextField(
            decoration: InputDecoration(
              border: InputBorder.none,
              hintText: "action description",
              contentPadding: EdgeInsets.all(10),
            ),
          ),
          
          Wrap(
            spacing: 8,
            children: [
              Chip(label: Text("Inbox"), padding: EdgeInsets.all(0),),
              Chip(label: Text("Priority"), padding: EdgeInsets.all(0),),
              Chip(label: Text("Status"), padding: EdgeInsets.all(0),),
              Chip(label: Text("Due Date"), padding: EdgeInsets.all(0),),
            ],
          )
        ],
      ),
    );
  }
}
