# aio
AppImage Oven for linux system

Objectives:

The intention for this app, is make a oven for build with ***pkg2appimage*** AppImages and integrate the system, following the file builded with the packages of system, and rebuilding the AppImage with the newer packages system.

The intention is turn the base system clean and light.

The preference is graphical interation with the user, but commanded by CLI easily.

Example of Store.:
![](https://raw.githubusercontent.com/andryeltj/aio/master/images/home.png)

Steps
| ![300x256](https://raw.githubusercontent.com/andryeltj/aio/master/images/select.png) | ![300x256](https://raw.githubusercontent.com/andryeltj/aio/master/images/installing.png)|
| ![300x256](https://raw.githubusercontent.com/andryeltj/aio/master/images/ready.png) | |

To install, is run this command in your terminal:

```$ wget -o aio http://gg.gg/aiotxt && chmod +x aio && sudo ./aio```

The commands:
 - add or install
 - del or remove
 - list
 - upd
 - store
 - jar
 
 Example.:
 ```$ aio add zoom```
 It will mount one Zoom AppImage and turn this disponible for your use.
 
***list*** - List the installed apps.
***upd*** - Checks and upgrade expecific app in AppImage (except if add * or all, that will upgrades all packages available).
***store*** - Displays the one Store in your browser (in construction).
***jar*** - Print the repository of the recipes.
 
The standard folder is /apps
The recipes folder is /apps/receitas 

Obs.: the file i'ts not all ready, this options is only the purpose.
