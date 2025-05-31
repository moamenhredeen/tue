import 'package:flutter/material.dart';
import 'package:tue_app/models/action.dart';
import 'package:tue_app/models/priority.dart';
import 'package:tue_app/models/status.dart';
import 'package:tue_app/widgets/action_input.dart';

class ActionableScreen extends StatefulWidget {
  const ActionableScreen({super.key});

  @override
  State<ActionableScreen> createState() => _ActionableScreenState();
}

class _ActionableScreenState extends State<ActionableScreen> {
  final items = [
    NextAction(
      id: 1,
      title: "first action",
      body: "some description",
      status: Status.todo,
      priority: Priority.high,
      tags: [
        "work",
        "java",
        "typescript",
      ]
    ),
    NextAction(
      id: 2,
      title: "second action",
      body: "some description",
      status: Status.done,
      priority: Priority.medium,
      tags: [
        "personal",
        "svelte",
        "solidjs"
      ]
    ),
    NextAction(
      id: 3,
      title: "third action",
      body: "some description",
      status: Status.todo,
      priority: Priority.low,
      tags: [
        "new job"
      ]
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Actionable"),
        actions: [
          IconButton(onPressed: (){}, icon: Icon(Icons.search)),
          SizedBox(width: 10,)
        ],
      ),
      body: ListView.builder(
        itemCount: items.length,
        itemBuilder:
            (context, index) => ListTile(
              leading: items[index].status == Status.todo 
                ? Icon(Icons.circle_outlined)
                : Icon(Icons.check_circle, color: Colors.green,)
                ,
              titleAlignment: ListTileTitleAlignment.top,
              title: Text(items[index].title),
              subtitle: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(items[index].body),
                  Wrap(
                    spacing: 8,
                    children: [
                      ...items[index].tags.map((tag) => Chip(padding: EdgeInsets.all(0), label: Text(tag)))
                    ],
                  )
                ],
              ),
              trailing:
                  items[index].priority == Priority.high
                      ? Icon(Icons.flag, color: Colors.red)
                      : null,
              onTap: () {},
            ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          showModalBottomSheet<void>(
            context: context,
            builder: (BuildContext context) {
              return ActionInput();
            },
          ); 
        }, 
        shape: CircleBorder(),
        child: Icon(Icons.add),
      ),
    );
  }
}
