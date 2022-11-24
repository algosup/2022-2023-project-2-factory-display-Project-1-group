<h1 style="text-align: center">2022-2023-project-2-factory-display-Project-1-group - Functional Specification</h1>

<details> 
<summary style="text-decoration: underline; font-size:150%">Table of contents:</summary>

- [1. Glossary](#1-glossary)
- [2. Project Overview](#2-project-overview)
  - [2.1. Context:](#21-context)
  - [2.2. Planning:](#22-planning)
- [3. Stakeholders](#3-stakeholders)
  - [3.1. The engineering team:](#31-the-engineering-team)
  - [3.2. The client:](#32-the-client)
- [4. Product Description](#4-product-description)
  - [4.1. Goal of the project:](#41-goal-of-the-project)
  - [4.2. Current Solution:](#42-current-solution)
  - [4.3. Proposed Solution:](#43-proposed-solution)
  - [4.4. Content:](#44-content)
  - [4.5. Flowchart:](#45-flowchart)
    - [Screen by Screen Specification](#screen-by-screen-specification)
    - [Log In Screen](#log-in-screen)
    - [Home Screen](#home-screen)
    - [History Screen](#history-screen)
    - [Widget Screen](#widget-screen)
- [5. Requirements](#5-requirements)
  - [5.1. Priority:](#51-priority)
  - [5.2. User Interface:](#52-user-interface)
  - [5.3. Maintainability:](#53-maintainability)
  - [5.4. Security:](#54-security)
  - [5.5. Data Management:](#55-data-management)
- [6. Personas](#6-personas)
  - [6.1. Project owner:](#61-project-owner)
  - [6.2. Content creator:](#62-content-creator)
  - [6.3. Power User:](#63-power-user)
  - [6.4. On-site Installation Manager:](#64-on-site-installation-manager)
- [7. Improvements for V2](#7-improvements-for-v2)
- [8. Conclusion](#8-conclusion)
</details>

## 1. Glossary 

Trello : Trello is a visual web-based application that allow you to easely communicate with your co-worker in order to set up task and follow the progression of a project.

Database : A database is an organized collection of data stored and accessed electronically

Stakeholders : an employee, investor, customer, etc. who is involved in or buys from a business and has an interest in its success

## 2. Project Overview

### 2.1. Context:

JACOBI GROUP is the world leader in purification solution of air and water, using Activated Carbon, Ion Exchange Resins and Mobile Filtration Units. With its factory in Forges industrial zone since 1956, it has a heritage of being the only French industry manufacturing this unique product and supplying customers like Veolia, Valeo, Honeywell and French Ministry of Defence to name a few. There are over 1000 applications in which activated carbon is used which you can get more information on @ www.jacobi.net
The factory in Vierzon is the oldest in the Group however one of the most successful thanks to a flexible and can-do approach.
The Managing Director of JACOBI in France, Mr Saeed is constantly seeking ways to improve his management. One of his favourite subjects, which is also the one for which he receives most feedback, is communication.
Communication – updated, accurate and transparent. The short and sweet wishlist!
One of the many ways to achieve this is to digitalise the communication of the Company and make it easy to publish the content. Currently, factory news and important announcements are done by email to groups, on MS Teams Groups, Yammer, etc. However, of the 64 factory staff, only around half of the aforementioned have Company email addresses. Displaying paper format information is outdated and in a huge factory of 8 hectares, it is not efficient.

### 2.2. Planning:

In order to organize ourselves, we are using Trello to seperate task for the differents members of the group.
You can find the link for the Trello here : https://trello.com/b/h4SIY75N/2022-2023-project-2-factory-display-project-1-group 

## 3. Stakeholders

### 3.1. The engineering team:

The first stakeholders type is the engineering team who will directly work on the development and the conception of the project. This team his made of 5 people : <br>
* Alexandre BOBIS as the project manager 
* Florent HUREAUX as the program manager
* Théo TROUVÉ as the technical leader
* Salaheddine NAMIR as the software engineer
* Elise GAUTIER as the quality insurance

### 3.2. The client:

The second stakeholders type is the client which is the JACOBI GROUP.
We'll be working in cooperation with them during all the project with the help of Franck Jeannin and all the staff from ALGOSUP.
The JACOBI team who works on this project is composed of:

* Usman Saeed as the Project owner
* Karen Blanque (HR Assistant), Pierre Page (HR Manager), Nicolas Yvelin (Factory Manager) as the Content creator
*  Samuel Neves (Maintenance Shop Manager) as the On-site Installation Manager

## 4. Product Description

### 4.1. Goal of the project: 

The goal of the project is to improve the communication between the main JACOBI factory with the others.The project is going to simplify and improve the management of the managing director Mr Saeed which will also lead to a better growing mindset for the company. 

### 4.2. Current Solution: 

Currently, factory news and important announcements are done by email to groups, on MS Teams Groups, Yammer, etc. However, of the 64 factory staff, only around half of the aforementioned have Company email addresses.

### 4.3. Proposed Solution: 
 
We will digitalise the communication of the Company and make it easy to publish the content. To do so, the product would be two screens that we can put in different location within the factory that will show different contents to share information with the workers. However, the information displayed would be always controlled by Vierzon site.

### 4.4. Content:

We'll be displaying different type of content on the screen : 

* Factory news
* Important annoucements
* Weather forecast
* information related to Covid 
* Map of the factory
* Information on some important day like the water's day

The screen will be switching automatically between the different information. We can also set priority to show some content during a long time or just make them appear more often on the screen. 

All the information that can be displayed will be in french.

### 4.5. Flowchart:

#### Screen by Screen Specification

JOCABIweb consists of quite a few different screens.  This document is more concerned with the functionality and the interaction design, not the exact look and layout.

#### Log In Screen

the log in Page serves two purposes:

* Allow members who have already signed up to log on
* Allow members who already have an account but who have forgotten their password to be able to change it

The first screen that the user will see is the log in screen.  This screen will be used to log in to the app.  The user will be able to enter their username and password.  If the user enters the correct username and password, they will be taken to the home screen.  If the user enters the wrong username and password, they will be taken to the log in screen again. It looks like this:

TODO: add image

* If the email address was provided, and it matches a registered member, and a password was provided, but the password is incorrect, the server returns an error message saying "The password or email address you provided is invalid." Please check. Whenever the password is incorrect, the login form returns with the password box empty.
* If the email address was provided, but it does not match a registered member, and a password was provided, the server returns an error message saying "The password or The email address you provided is not valid." Please check. Whenever the password is incorrect, the login form returns with the password box empty.
* If the email address and password are OK, jump straight to the home screen.

#### Home Screen

The Home Page looks like this:

TODO: add image

On this, and on all screens except the login page, clicking on the JACOBI GROUP logo in the top left corner goes back to Home Page.

On this page you will find several features:
* A disconnect button
* A button to access the history
* A button that allows you to create or modify widgets

#### History Screen

The History Page looks like this:

TODO: add image

#### Widget Screen

The Widget Page looks like this:  

TODO: add image

## 5. Requirements

### 5.1. Priority:

|                                   **Requirement**                                   |        **Comments**         | **Priority** |   **Approved**   |
|:-----------------------------------------------------------------------------------:|:---------------------------:|:------------:|:----------------:|
|                  The device can display  information for the users                  |                             |       1      |                  |
|             The information can be control  remotely on the Vierzon site            |                             |       2      |                  |
| The Device must be secure  (no risk of it being misused or intrusion in the device) |                             |       1      |                  |
|          The device can display different information on each screen          |                             |       3      |                  |
|                  The device is user friendly  and easy to maintain                  |                             |       2      |                  |
|                  The app must be able to show if a screen is down or perfectly working                  |                             |       2      |                  |

### 5.2. User Interface:

The users will have access to an app where he can change the content that is display on the different screen. He can choose which screen would be displaying important information based on the location of the screen. In addition, the user can set priority in the app to display information more often on screen. The app will be user friendly and easy to use even if you may not be advanced in IT skills.

### 5.3. Maintainability:

Our product will be easily maintainable and upgradable. If there is any problem with the device, we can send ??? from ALGOSUP to check and fix the problem.

### 5.4. Security:
The security of the product is one of the major part of the project. We need to make sure that the device cannot be access and use by a tier users. In addition, we need to ensure that data can't be reach without autorization.


### 5.5. Data Management:

We'll be storing data in a database that can be access by Vierzon Site in order to change what will be displayed or to see old content. 

## 6. Personas

### 6.1. Project owner:

### 6.2. Content creator:

### 6.3. Power User:

### 6.4. On-site Installation Manager:

## 7. Improvements for V2

There are multiple things that we can improve in our product :

- First, we can make the app support multiple languages like English.

- We can put a screen in a different town like Paris that will display the same information than the one in Vierzon.

## 8. Conclusion
