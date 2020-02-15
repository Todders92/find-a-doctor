# _Find A Doctor_

#### _Asynchrony and APIs practice for Epicodus_, _10 Feb. 2020_

#### By _**Todd Walraven**_

## Description

_This application allows the user to fill out two forms. One searches for doctors by name in the Portland metro area. The other has the user input a symptom/ailment they are suffering from, and show them doctors specializing in the inputted symptom/ailment._

## Specifications:

| Specification | Example Input | Example Output |
| ------------- |:-------------:| -------------------:|
| User inputs a name and receives a list of doctors that fits the search query in Portland area| User inputs 'bob' | lists all doctors matching bob|
|If the search doesnt yeild any results, to user receives an error|user inputs skdjfsldkjf| No matches found try another name or search term
 If the name query includes any responses, the query should include the doctors first name, last name, address, phone number, website and if they are accepting new patients|user inputs 'bob jones' |Search returns bob jones address: 123 fake street, phone number: 555-555-5555 website link: www.{example website here}.com, accepting new patients?: no |
 |Doctor name search form is hidden upon submission|submit:button:click|form:hidden|
 | Webpage allows user to input a medical issue and receive a list of doctors who fit the search query In Portland area| User inputs toothache | Lists all doctors who fit toothache search query from API |
 |If the name query doesnt return any results, the user is notified |User input sdklfjs into name field|I'm sorry, no doctors were found in your area|
 If the symptom query includes any responses, the query should include the doctors first name, last name, address, phone number, website, and if they are accepting new patients|User inputs Toothache|Search returns bob jones address: 123 fake street, phone number: 555-555-5555 website link: www.{example website here}.com, accepting new patients?: no |
 |Symptom form is hidden upon submission|submit:button:click|form:hidden|


## Setup/Installation Requirements

### To properly use this application the user must use their own API key!

#### API Key setup
* _Navigate to https://developer.betterdoctor.com/_
* _Follow the instructions on the website to generate your own api key_
* _navigate to the find-a-doctor directory on your computer using the terminal_
* _make a .env file in the main directory of find-a-doctor_
* _open .env in a text edditor (VSCode, Atom, etc._
* _Paste (API_KEY = {YOUR API KEY HERE})_

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