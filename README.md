*Developer Guide and Docs*
https://docs.angularjs.org/guide/

ng-app    - Angular directive that initializes application
ng-model  - Agular directive that stores/updates the valkue of the input field into/from a variable.

NOTE*: The only place where an application should access the DOM is within directives. This is important becasue artifacts that access the DOM are hard to test. 

{{}} - This is called an angular experssion

NOTE*: Everything in Angular is created and wired using dependency injection. This is done through "modules".

*Controller does and donts*
- Manipulate DOM — Controllers should contain only business logic. Putting any presentation logic into Controllers significantly affects its testability. AngularJS has databinding for most cases and directives to encapsulate manual DOM manipulation.
- Format input — Use AngularJS form controls instead.
- Filter output — Use AngularJS filters instead.
- Share code or state across controllers — Use AngularJS services instead.
- Manage the life-cycle of other components (for example, to create service instances).