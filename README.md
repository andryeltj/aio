# aio
AppImage Oven for linux system

Objectives:

The intention for this app, is make a oven for build with ***pkg2appimage*** AppImages and integrate the system, following the file builded with the packages of system, and rebuilding the AppImage with the newer packages system.

The intention is turn the base system clean and light.

The preference is graphical interation with the user, but commanded by CLI easily.

The commands:
 - add or install
 - del or remove
 - list
 - check
 - upd
 - gui
 - jar
 
***list*** - List the installed apps.
***mkt*** - Lists the possible recipes for your system.
***check*** - Check the recent version of the package base on repository system and compares with AppImage builded on folder, and list if this is update. And checks if the recipe files are the most newer to do download the newer.
***upd*** - Checks and upgrade expecific app in AppImage (except if add * or all, that will upgrades all packages available).
***gui*** - Displays the graphical wizard.
***jar*** - Print the repository of the recipes.
 
The standard folder is /apps
The recipes folder is /apps/receitas 

Obs.: the file i'ts not ready, this is only the purpose.
