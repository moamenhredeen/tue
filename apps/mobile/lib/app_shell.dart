import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class AppShell extends StatefulWidget {
  final Widget screen;
  const AppShell({super.key, required this.screen});

  @override
  State<AppShell> createState() => _AppShellState();
}

class _AppShellState extends State<AppShell> {
  int index = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: widget.screen,
      bottomNavigationBar: NavigationBar(
        selectedIndex: index,
        destinations: [
          NavigationDestination(
            icon: Icon(Icons.task_outlined),
            selectedIcon: Icon(Icons.task),
            label: "Actionable",
          ),
          NavigationDestination(
            icon: Icon(Icons.calendar_month_outlined),
            selectedIcon: Icon(Icons.calendar_month),
            label: "Calendar",
          ),
          NavigationDestination(
            icon: Icon(Icons.dashboard_outlined),
            selectedIcon: Icon(Icons.dashboard),
            label: "Projects",
          ),
          NavigationDestination(
            icon: Icon(Icons.inbox_outlined),
            selectedIcon: Icon(Icons.inbox),
            label: "Inbox",
          ),
        ],
        onDestinationSelected: (selectedIndex) {
          final path = switch (selectedIndex) {
            0 => "/actionable",
            1 => "/calendar",
            2 => "/projects",
            3 => "/inbox",
            _ => "/actionable",
          };
          context.go(path);
          setState(() {
            index = selectedIndex;
          });
        },
      ),
    );
  }
}
