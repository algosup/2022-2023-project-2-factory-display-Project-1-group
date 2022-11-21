# - Test plan -


### For login:

| Test ID | Name | Description | Level | Priority (from 3 to 1) | Status | Comments |
|:-------:|:----:|:-----------:|:-----:|:--------:|:------:|:--------:|
| A1 | password_false | If false, let 3 other tests before to send a "ERROR" message to an admin |  | 3 |:-------------:|:-------------:|
| A2 | password_true | If true, the client can enter into the website |  | 3 |:-------------:|:-------------:|
| A3 | forgot_password | If the customer still does not have the correct password on the 3rd try, a message to change his password is displayed |  | 1 |:-------------:|:-------------:|
| A4 | login_page | The customer can write his email address and password |  | 3 |:-------------:|:-------------:|
| A5 | log_out_page | When the customer click on the log out button he will be disconnected |  | 2 |:-------------:|:-------------:|
| A6 | hidden_password | The client password is hidden except when the show/hide button is activated  |  | 2 |:-------------:|:-------------:|
| A7 | show_button | The client can click on the show/hide button and he can see his passworld |  | 1 |:-------------:|:-------------:|


### For Database/ Interface:
| Test ID | Name | Description | Level | Priority (from 3 to 1) | Status | Comments |
|:-------:|:----:|:-----------:|:-----:|:--------:|:------:|:--------:|
| B1 | template_modify | Check if the modification for widgets and the weather section made by the admin will be saved |  |:------:|:-------------:|:-------------:|
| B2 | template_delete | Check if the admin can delete a template |  |:------:|:-------------:|:-------------:|
| B3 | template_add | Check if the admin can add a template |  |:------:|:-------------:|:-------------:|
| B4 | historic | Keep track of what has been done or delete |  |:------:|:-------------:|:-------------:|
| B5 | database | Check if the database is correctly updated |  |:------:|:-------------:|:-------------:|
| B6 | interface | Check if the interface is correctly updated |  |:------:|:-------------:|:-------------:|
| B7 |  |  |  |:------:|:-------------:|:-------------:|
DES IDÉES POUR LES TESTS ? ICI


### For the display of the application:
| Test ID | Name | Description | Level | Priority (from 3 to 1) | Status | Comments |
|:-------:|:----:|:-----------:|:-----:|:--------:|:------:|:--------:|
| C1 | TV_lauch_only_app | Is the app is launch automatically on the TV ? |  | 3 |:-------------:|:-------------:|
| C2 | display_app_responsively | Is the app is responsive ? |  | 1 |:-------------:|:-------------:|
| C3 | display_weather | Check if the weather widget is displayed |  | 1 |:-------------:|:-------------:|
| C5 | carrousel_effect | Check if the carroussel effect works |  | 1 |:-------------:|:-------------:|
| C6 | display_news | Check if the news widget is displayed |  | 1 |:-------------:|:-------------:|
| C7 | display_calendar | Check if the calendar widget is displayed |  | 1 |:-------------:|:-------------:|
| C8 | display_clock | Check if the clock widget is displayed |  | 1 |:-------------:|:-------------:|
| C9 | display_tasks | Check if the tasks widget is displayed |  | 1 |:-------------:|:-------------:|
| C10 | display_weather | Check if the weather widget is displayed |  | 1 |:-------------:|:-------------:|
