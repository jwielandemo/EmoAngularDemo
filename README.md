# Get Started (from base directory)

1. Install npm
2. Install npm modules with 'npm install'
3. Run the server with 'grunt'
4. Visit localhost:5000 in a browser

# Instructions

Implement a simple login UI workflow.  The workflow consists of 3 pages, a login page, a success page, and an failure page.  Follow the provided mockups (screenshots directory) so that the UI follows the specifications as closely as possible.

## Login Page

The login page accepts an email and password.  There is a “login” button that is enabled only when an email and password are entered.  When the “login” button is clicked and the credentials are correct, the UI navigates to the success page.  Otherwise, the failure page is displayed.


When focus leaves a text box, if the field is non-empty and the input passes validation rules for that field, a checkmark icon is displayed in the text box.  If a field is non-empty and the input does not passes the validation rules, an “X” icon is displayed in the text box.  During input, when focus on a text box, no checkmark or X is displayed.


Rules for validating the fields are:

### Email

* more than 6 characters
* contains an @ symbol


### Password

* more than 5 characters

The contents of the password text box are shielded from view.


## Success Page

The success page displays a green box with a “login” link.  The “login” link navigates back to the login page.


## Failure Page

The failure page displays a red box message with a “login” link.  The “login” link navigates back to the login page.


## Style Requirements

* All styling is placed in the styles.css file.  No styling is allowed in the HTML code.
* For all text
  * use “Open Sans”, normal, 400 from google fonts (google.com/fonts)
  * 16px font height
* Link color: #dddddd (hover = #ffffff)
* Containers are rounded boxes with radius: 30px
* Background colors containers:  #006dd9 (login), #008000 (success), #ff0000 (failure)
* Checkmark icon
  * Bootstrap glyphicon: “glyphicon glyphicon-ok"
  * Color: #ff0000
* X icon
  * Bootstrap glyphicon: “glyphicon glyphicon-remove"
  * Color is: #00ff00
* Text fields and button height: 40px;
* Margin between text fields and button: 20px;
* Text fields: col-xs-8 col-xs-offset-2  


Other Requirements

* Use the skeleton AngularJS $routeProvider to provide navigation between pages
* Use Bootstrap grid system for layout.  Use predefined grid class like .row and .col-xs-8 to make grid layouts.
* Use as many Bootstrap components as possible (for example, buttons, glyph icons, etc.)
* Use no other libraries.  In other words, provide a purely AngularJS/Bootstrap solution

