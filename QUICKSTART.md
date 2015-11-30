#Developer Quickstart Guide
Please find the instructions below for your operating system and follow the steps to setup your development environment.

##Linux

##OSX
1. Install Homebrew
  * `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. If Homebrew is already installed, update it so it is ready to install new packages
  * `brew update`
  * `brew upgrade`
3. Install Composer
  * `brew install composer`
4. Install Node.js & npm
  * `brew install node`
5. Install PHP
  * `brew install php56`
  * *To configure system to use Homebrewed PHP 5.6 instead of pre-installed version:*
    * `open -a TextEdit ~/.bash_profile` and add `export PATH="$(brew --prefix homebrew/php/php56)/bin:$PATH"` to the end of the file
6. Install Laravel
  * `composer global require "laravel/installer=~1.1"`
  * *To add the composer executable to the Path environment, so to that the* `laravel` *executable can be found:*
    * `PATH=$PATH:~/.composer/vendor/bin`
7. Install MySQL
  * `brew install mysql`
8. Clone repository.
  * `git clone https://github.com/mi-squared/volunteer-portal.git`
9. Install client dependency packages.
  * `cd volunteer-portal/client`
  * `npm install` or `npm i`

##Windows
1. Install Node.js & npm
  * Download the Windows installer from the [Node.js website](https://nodejs.org/en/download/)
  * Run the installer and follow the prompts
  * Restart your computer
2. Install Composer
  * Download the [Windows installer](https://getcomposer.org/Composer-Setup.exe)
  * Run the installer and follow the prompts
  * Restart your computer
3. Install PHP
  * Follow the instructions on the [SitePoint website](http://www.sitepoint.com/how-to-install-php-on-windows/)
4. Install Laravel
  * `composer global require "laravel/installer=~1.1"`
  * *To add the composer executable to the Path environment, so to that the* `laravel` *executable can be found:*
    * `PATH=$PATH:~/.composer/vendor/bin`
5. Install MySQL
  * Download the installer from the [MySQL website](http://dev.mysql.com/downloads/installer/)
  * Run the installer and follow the prompts
  * Restart your computer
6. Clone repository.
  * `git clone https://github.com/mi-squared/volunteer-portal.git`
7. Install client dependency packages.
  * `cd volunteer-portal/client`
  * `npm install` or `npm i`
