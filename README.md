Learn Angular Notes
===================
**[AngularJS](http://angularjs.org)**: A client-side JavaScript Framework for adding interactivity to HTML
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
// app.js

(function(){
  var app = angular.module('store', []);
  // Store Controller
  app.controller('StoreController', function() {
  });
});
```

- Aliasing a controller
```html
<!-- index.html -->

<div ng-controller="StoreController as store">
  <h1>{{store.product.name}}</h1>
</div>
<!-- alias = store -->
```

Built-In Directives
-------------------
- A marker on a HTML tag that tells Angular to run or reference some JS code.
- **ng-show/ng-hide**: displays/hides the element if the value of the expression is `true`
```html
<div ng-show="store.product.canPurchase">
<div ng-hide="store.product.soldOut">
```
- **ng-repeat**: iterates through an array
```html
<div ng-repeat="product in store.products">
  <li>{{product.name}}</li>
</div>
```
- **ng-src**: loading images
```html
<img ng-src="{{product.images[0].full}}"
```
- **ng-click**: updates expression on click
```html
<li><a href ng-click="tab = 1">Description</a></li>
```
- **ng-class**: if expression is `true`, set class
```html
<!-- if tab = 2, set class to 'active' -->
<li ng-class="{ active:tab === 2 }></li>
```

Filters
-------
- auto-formatting `{{data | filter:options}}`
```html
<!-- DATE -->
<!-- 12/27/2013 @ 12:50AM --> 
{{'1388123412323' | date:'MM/dd/yyyy @ h:mma'}}

<!-- UPPERCASE/LOWERCASE -->
<!-- OCTAGON GEM -->
{{'octagon gem' | uppercase}}

<!-- LIMIT -->
<!-- My Desc -->
{{'My Description' | limitTo:8}}
<li ng-repeat="product in store.products | limitTo:3">

<!-- ORDER -->
<!-- Lists products in descending order -->
<!-- Without the -, listed in ascending order -->
<li ng-repeat="product in store.products | orderBy:'-price'">
```
