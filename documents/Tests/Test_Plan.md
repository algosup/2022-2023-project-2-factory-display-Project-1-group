# - Test plan -


### For login:

| Test ID | Name | Description | Level | Priority (from 3 to 1) | Status | Comments |
|:-------:|:----:|:-----------:|:-----:|:--------:|:------:|:--------:|
| 1 | password_false | If false, let 3 other tests before to send a "ERROR" message to an admin | 3 |:------:|:-------------:|:-------------:|
| 2 | password_true | If true, the client can enter into the website | 3 |:------:|:-------------:|:-------------:|
| 3 | forgot_password | If the customer still does not have the correct password on the 3rd try, a message to change his password is displayed |  |:------:|:-------------:|:-------------:|
| 4 | login_page | The customer can write his email address and password | 3 |:------:|:-------------:|:-------------:|
| 5 | log_out_page | When the customer click on the log out button he will be disconnected | 2 |:------:|:-------------:|:-------------:|
| 6 | hidden_password | The client password is hidden except when the show/hide button is activated  | 2 |:------:|:-------------:|:-------------:|
| 7 | show_button | The client can click on the show/hide button and he can see his passworld | 1 |:------:|:-------------:|:-------------:|


### For Database/ Interface:
| Test ID | Name | Description | Level | Priority (from 3 to 1) | Status | Comments |
|:-------:|:----:|:-----------:|:-----:|:--------:|:------:|:--------:|
| 1 | template_modify |  |  |:------:|:-------------:|:-------------:|
| 2 | historic |  |  |:------:|:-------------:|:-------------:|
| 3 | add_product |  |  |:------:|:-------------:|:-------------:|


### For the display of the application:
| Test ID | Name | Description | Level | Priority (from 3 to 1) | Status | Comments |
|:-------:|:----:|:-----------:|:-----:|:--------:|:------:|:--------:|
| 1 | TV_lauch_only_app | Is the app is launch automatically on the TV ? | 3 |:------:|:-------------:|:-------------:|
| 2 | display_app_responsively | Is the app is responsive ? | 1 |:------:|:-------------:|:-------------:|