# aio
AppImage Oven for linux system

Objectives:

The intention for this app, is make a oven for build with ***pkg2appimage*** AppImages and integrate the system, following the file builded with the packages of system, and rebuilding the AppImage with the newer packages system.

The intention is turn the base system clean and light.

The preference is graphical interation with the user, but commanded by CLI easily.

Example of Store.:
![](https://raw.githubusercontent.com/andryeltj/aio/master/images/home.png)

Example: Installing **Sweet Home 3D**
| Steps | |
| ------------- | -------------:|
| Select | Installing |
| ![300x256](https://raw.githubusercontent.com/andryeltj/aio/master/images/select.png) | ![300x256](https://raw.githubusercontent.com/andryeltj/aio/master/images/installing.png)|
| Ready | |
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
 
***list*** - List the disponible apps.
***upd*** - Upgrade expecific app in AppImage.
***store*** - Open Store in your browser (automatic upload).
***jar*** - Print the repository of the recipes.

Like it? Contribute!
![](https://raw.githubusercontent.com/andryeltj/aio/master/images/ready.png) 

The standard folder is /apps
The recipes folder is /apps/receitas 

Obs.: The repository can be modifyed to be read your repository with your personal recipes on web.

Soon more new updates with more features will appear.
