# _Find A Doctor_

#### _Asynchrony and APIs practice for Epicodus_, _10 Feb. 2020_

#### By _**Todd Walraven**_

## Description

_This application allows the user to input a medical issue they are having and the webpage will return a list of doctors who are qualified to help them. The list of doctors includes information about each doctor including the name, address, phone number, their website, and if they are accepting new patients._

## Specifications:

| Specification | Example Input | Example Output |
| ------------- |:-------------:| -------------------:|
| Webpage allows user to input a medical issue and receive a list of doctors who fit the search query | user inputs toothache | lists all doctors who fit that search query |
|if the search doesnt yeild any results, to user receives an error|user inputs skdjfsldkjf| no results found, make sure your are inputting a proper search
| user inputs a name and receives a list of doctors that fits the search query | user inputs 'bob' | lists all doctors named bob |
 if the name query includes any responses, the query should include the doctors first name, last name, address, phone number, website and if they are accepting new patients|user inputs 'bob jones' |search returns bob jones address: 123 fake street, phone number: 555-555-5555 website link: www.{example website here}.com, accepting new patients?: no |
 |if the name query doesnt return any results, the user is notified |user input sdklfjs into name field|I'm sorry, no doctors matching that name were found|


## Setup/Installation Requirements

#### Node install

#### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

_Install Git with the following command:_
* $ brew install git

_Next, install Node.js by entering the following command in Terminal:_
* $ brew install node

#### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._


#### Install this application

_Clone this repository via Terminal using the following commands:_
* _$ cd desktop_
* _$ git clone {url to this directory}_
* _$ cd {directory name}_
_Then, confirm that you have navigated to this project directory by entering "pwd" in Terminal._

_Next, install npm at the project's root directory via the following commands:_
* _$ npm install_
* _$ npm run build_

_Open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code on macOS, enter the command "code ." in Terminal)._

## Technologies Used

_Git, HTML, CSS, JavaScript, jQuery, NPM, webpack, BetterDoctor API_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Todd Walraven_**