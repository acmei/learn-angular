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

Directives
----------
- A marker on a HTML tag that tells Angular to run or reference some JS code.
- **ng-repeat**: iterates through an array 
e.g.

```html
<div ng-repeat="product in store.products">
```
