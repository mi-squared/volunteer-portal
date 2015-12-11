#Developer Quickstart Guide
Follow the steps below to setup your development environment.

1. [Install packages](#install-packages)
  * [Linux](#linux)
  * [OSX](#osx)
  * [Windows](#windows)
2. [Setup repository](#setup-repository)
3. [Setup database](#setup-database)
4. [Setup S3](#setup-s3)
5. [Run local server](#run-local-server)
6. [Run tests](#run-tests)

<a id="install-packages"></a>
##Install Packages
Find the instructions below for your operating system and follow the steps to install the necessary packages.

<a id="linux"></a>
####Linux
1. Prepare to install packages.
  * `sudo apt-get update`
  * `sudo apt-get upgrade`
2. Install PHP
  * `sudo apt-get install php5`
3. Install Composer
  * `curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer`
4. Install Laravel
  * `composer global require "laravel/installer=~1.1"`
  * Add `alias laravel='~/.composer/vendor/bin/laravel'` to `.bashrc` (or `.zshrc` if you use `zsh`)
  * `source ~/.bashrc` (or `source ~/.zshrc`)
5. Install MySQL
  * `sudo apt-get install mysql-server`
6. Install Node.js & npm
  * `sudo apt-get install nodejs`

<a id="osx"></a>
####OSX
1. Install Homebrew
  * `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  * *If Homebrew is already installed, update it so it is ready to install new packages*
    * `brew update`
    * `brew doctor`
    * `brew upgrade`
2. Install PHP
  * `brew install php56`
  * *To configure system to use Homebrewed PHP 5.6 instead of pre-installed version:*
    * `open -a TextEdit ~/.bash_profile` and add `export PATH="$(brew --prefix homebrew/php/php56)/bin:$PATH"` to the end of the file
    * `php --ini` to locate ini file
    * in ini file, set `always_populate_raw_post_data` to `'-1'`
3. Install Composer
  * `brew install composer`
4. Install Laravel
  * `composer global require "laravel/installer=~1.1"`
  * *To add the composer executable to the Path environment, so to that the* `laravel` *executable can be found:*
    * `PATH=$PATH:~/.composer/vendor/bin`
5. Install MySQL
  * `brew install mysql`
6. Install Node.js & npm
  * `brew install node`

<a id="windows"></a>
####Windows
1. Install PHP
  * Follow the instructions on the [SitePoint website](http://www.sitepoint.com/how-to-install-php-on-windows/)
2. Install Composer
  * Download the [Windows installer](https://getcomposer.org/Composer-Setup.exe)
  * Run the installer and follow the prompts
  * Restart your computer
3. Install Laravel
  * `composer global require "laravel/installer=~1.1"`
  * *To add the composer executable to the Path environment, so to that the* `laravel` *executable can be found:*
    * `PATH=$PATH:~/.composer/vendor/bin`
4. Install MySQL
  * Download the installer from the [MySQL website](http://dev.mysql.com/downloads/installer/)
  * Run the installer and follow the prompts
  * Restart your computer
5. Install Node.js & npm
  * Download the Windows installer from the [Node.js website](https://nodejs.org/en/download/)
  * Run the installer and follow the prompts
  * Restart your computer


<a id="setup-repository"></a>
##Setup Repository
1. Clone repository
  * `git clone https://github.com/mi-squared/volunteer-portal.git`
2. Install client dependency packages
  * `cd volunteer-portal/client`
  * `npm install` or `npm i`
3. Install Selenium Webdriver.io
  * `npm install selenium-standalone@latest -g`
  * `selenium-standalone install`
4. Install service dependency packages
  * `cd volunteer_portal/service`
  * `composer install`
5. Create `.env` file
  * `touch .env`
  * Copy text from `.env-local` to new `.env` file
  * Update `DB_PASSWORD=<your_password>` with your MySQL password for root


<a id="setup-database"></a>
##Setup Database
1. Run MySQL server
  * `mysql.server start`
  * *To stop server:*
    * `mysql.server stop`
2. Open MySQL
  * `mysql -u root -p`
  * Enter your password
3. Create database
  * `CREATE DATABASE volunteer_app;`
  * *Double check that database exists:*
    * `SHOW DATABASES;` and look for `volunteer_app`
4. Run migrations and seeds
  * `cd volunteer-portal/service`
  * `php artisan migrate`
  * `php artisan db:seed`


<a id="setup-s3"></a>
##Setup S3
1. *tbd*


<a id="run-local-server"></a>
##Run Local Server
1. Start local server
  * `cd volunteer-portal/client`
  * `npm run dev`
2. Visit development application in browser
  * `localhost:8080`


<a id="run-tests"></a>
##Run Tests
1. Update development URL
  * `cd volunteer-portal/client/src`
  * open `url.js` in text editor
    * comment out `export const URL = 'http://pth.mi-squared.com';` and uncomment `export const URL = 'http://localhost:7771';`
2. Start Laravel server
  * open new tab in command line
  * `cd volunteer-portal/service`
  * `php artisan serve --port=7771`
3. Start local server
  * open new tab in command line
  * `cd volunteer-portal/client`
  * `npm run dev`
4. Start Selenium server
  * open new tab in command line
  * `cd volunteer-portal/client`
  * `selenium-standalone start`
5. Run tests
  * `cd volunteer-portal/client`
  * `npm test`
