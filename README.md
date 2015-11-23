Learn Angular Notes
===================
**AngularJS**: A client-side JavaScript Framework for adding interactivity to HTML

[Download AngularJS](http://angularjs.org)
```html
<script type="text/javascript" src="angular.min.js"></script>
```

Start npm HTTP Server
---------------------
1. If not already installed, `npm install http-server -g`
1. cd into project folder
1. `http-server`

Modules
-------
- pieces of Angular application
- code is more maintainable, testable, readable
- define dependencies for our app
```javascript
// app.js
var app = angular.module('store', []);
// angular = AngularJS
// 'store' = application name
// [] = dependencies
```
```html
<html ng-app="store">
<!-- add to bottom of index.html -->
<script type="text/javascript" src="app.js"></script>
```

Controllers
-----------
- define app's behavior by defining functions and values
- attached to our app
```javascript
(function(){
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
  });
});
```

Built-In Directives
-------------------
- A marker on a HTML tag that tells Angular to run or reference some JS code.
- **ng-repeat**: iterates through an array
```html
<div ng-repeat="product in store.products">
```
