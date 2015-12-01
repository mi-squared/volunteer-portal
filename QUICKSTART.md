#Developer Quickstart Guide
Follow the steps below to setup your development environment.
1. [Install packages](##Install Packages)
  * [Linux](###Linux)
  * [OSX](###OSX)
  * [Windows](###Windows)
2. [Setup repository](##Setup Repository)
3. [Test on local server](##Test on Local Server)


##Install Packages
Find the instructions below for your operating system and follow the steps to install the necessary packages.

###Linux
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
###OSX
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
###Windows
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


##Setup Repository
1. Clone repository
  * `git clone https://github.com/mi-squared/volunteer-portal.git`
2. Install client dependency packages
  * `cd volunteer-portal/client`
  * `npm install` or `npm i`


##Test on Local Server
1. Start local server
  * `npm run dev`
2. Visit development application in browser
  * `localhost:8080`
