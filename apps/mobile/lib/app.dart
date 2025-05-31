

import 'package:flutter/material.dart';
import 'package:tue_app/router.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
        title: "Tue",
        debugShowCheckedModeBanner: false,
        routerConfig: routerConfig,
    );
  }
}