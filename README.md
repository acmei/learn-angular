Angular Notes
=============
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
*// app.js*

var app = angular.module('store', []);
// angular = AngularJS
// 'store' = application name
// [] = dependencies
```
```html
<html ng-app="store">
*<!-- add to bottom of index.html -->*
<script type="text/javascript" src="app.js"></script>
```

Controllers
-----------
- define app's behavior by defining functions and values
- attached to our app
```javascript
*// app.js*

(function(){
  var app = angular.module('store', []);
  // Store Controller
  app.controller('StoreController', function() {
  });
});
```

- Aliasing a controller
```html
*<!-- index.html -->*

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
- **ng-model**: binds form element value to the property
```html
<form name="reviewForm">
  <blockquote>
    Stars: {{review.stars}}
    Review: {{review.body}}
  </blockquote>
  <select ng-model="review.stars">
    <option value="1">1 star</option>
    <option value="2">2 stars</option>
    ...
  </select>
  <textarea ng-model="review.body"></textarea>
</form>
```
- **ng-submit**: calls a function once a form is submitted
- **ng-pristine/ng-dirty**: input field is empty/has text
- **ng-valid/ng-invalid**: input data is valid/invalid
- **ng-include**: specify a file to include it (expects a variable with the name of the file, if passing file name directly, use single quotes inside double quotes)
  - use a custom directive instead of `ng-include`
```html
<h3 ng-include="'product-title.html'"></h3>
```

Custom Directives
-----------------
- **template-expanding**: 
  - define a custom tag or attribute that is expanded or replaced
  - can include Controller logic, if needed
```html
*<!-- index.html -->*

*<!-- element directive: use for UI widgets -->*
<product-title></product-title>

*<!-- attribute directive: use for mixin behaviors (like tooltips) -->*
<h3 product-title></h3>
```
```javascript
*// app.js*

app.directive('productTitle', function() {
  return {
    // type of directive, E for HTML *Element*
    restrict: 'E',
    // A for *Attribute*
    restrict: 'A',
    // URL of a template
    templateUrl: 'product-title.html'
  };
});
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

Validations
-----------
- **novalidate**: turn off default HTML validation
- **required**: marks required fields
- Only want valid forms to submit, add `formName.$valid` to `ng-submit` directive
- input type validations:
```html
<input type="email" name="email">
<input type="url" name="homepage">
<input type="number" name="quantity" min=1 max=10>
```
