# - Test plan -


### For login:

| Test ID | Name | Description | Steps to perform | Priority (from 3 to 1) | Status |
|:-------:|:----:|:-----------:|:-----:|:--------:|:------:|
| A1 | password_false | If false, let 3 other tests before to send a "ERROR" message to an admin | 1 enter email address and password <br>2 click on the connect button <br> 3 an error message appears| 3 |tested|
| A2 | password_true | If true, the client can enter into the website | 1 enter email address and password <br>2 click on the connect button <br> 3 you are redirected to the next page| 3 |tested|
| A3 | forgot_password | If the customer still does not have the correct password on the 3rd try, a message to change his password is displayed | 1 when you click on the button you will be asked to enter your email address <br> 2 an email will be sent to you so that you can change your password <br> 3 you can return to the log in page to log in | 1 |in test|
| A4 | login_page | The customer can write his email address and password | 1 enter email address and password <br>2 click on the connect button <br> 3 you are redirected to the next page| 3 |tested|
| A5 | log_out_page | When the customer click on the log out button he will be disconnected | when you click on the button you will be redirected to the log in page | 2 |tested|

### For Database/ Interface:
| Test ID | Name | Description | Steps to perform | Priority (from 3 to 1) | Status |
|:-------:|:----:|:-----------:|:-----:|:--------:|:------:|
| B1 | template_modify | Check if the modification for widgets and the weather section made by the admin will be saved | 1 click on "MODIFIER" <br> 2 you can modify the templates <br> 3 changes will be saved|2|:-------------:|
| B2 | template_delete | Check if the admin can delete a template | click on the delete button |1|tested|
| B3 | template_add | Check if the admin can add a template | 1 enter the desired data <br> 2 click on the "add" button and the content will be displayed |3|tested|
| B4 | historic | Keep track of what has been done or delete | view old widgets |2|:-------------:|
| B5 | database | Check if the database is correctly updated |  |3|tested|
| B6 | interface | Check if the interface is correctly updated |  |2|tested|


### For the display of the application:
| Test ID | Name | Description | Steps to perform | Priority (from 3 to 1) | Status |
|:-------:|:----:|:-----------:|:-----:|:--------:|:------:|
| C1 | TV_lauch_only_app | Is the app is launch automatically on the TV ? | 1 Turn on the TV <br> 2 reach a few minutes <br> 3 the application launches automatically | 3 |tested|
| C2 | display_app_responsively | Is the app is responsive ? |  | 1 |tested|
| C3 | display_weather | Check if the weather widget is displayed | check if the weather widget is displayed correctly | 1 |tested|
| C5 | carrousel_effect | Check if the carroussel effect works | see if there is a sequence for all the pages | 1 |tested|
| C6 | display_news | Check if the news widget is displayed | check if the news widget is displayed correctly | 1 |:-------------:|
| C7 | display_calendar | Check if the calendar widget is displayed | check if the calendar widget is displayed correctly | 1 |:-------------:|
| C8 | display_clock | Check if the clock widget is displayed | check if the clock widget is displayed correctly | 1 |:-------------:|
| C9 | display_tasks | Check if the tasks widget is displayed | check if the tasks widget is displayed correctly | 1 |:-------------:|
