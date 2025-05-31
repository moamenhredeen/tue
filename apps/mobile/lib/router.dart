import 'package:go_router/go_router.dart';
import 'package:tue_app/app_shell.dart';
import 'package:tue_app/screens/actionable_screen.dart';
import 'package:tue_app/screens/calendar_screen.dart';
import 'package:tue_app/screens/inbox_screen.dart';
import 'package:tue_app/screens/projects_screen.dart';

final GoRouter routerConfig = GoRouter(
  initialLocation: "/actionable",
  routes: [
    ShellRoute(
      builder: (context, state, child) => AppShell(screen: child),
      routes: [
        GoRoute(
          path: "/actionable",
          builder: (context, state) => ActionableScreen(),
        ),
        GoRoute(path: "/calendar", builder: (context, state) => CalendarScreen()),
        GoRoute(path: "/projects", builder: (context, state) => ProjectsScreen()),
        GoRoute(path: "/inbox", builder: (context, state) => InboxScreen()),
      ],
    ),
  ],
);
