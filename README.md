# mc-players-widget
A widget for static Minecraft server websites that uses google sheets to store player counts

to setup:

1. open a new google sheets document
2. go to ```tools > scripts```
3. paste my script into the docuemnt
4. Change the ```IP``` variable from ```play.gunn.in``` to the IP of your server
5. if needed change the ```SHEETNAME``` variable from ```Sheet1``` to the name of the sheet you would like the script to run on
6. in that script editor go to ```edit > current project's triggers```
7. add the following project triggers:
![triggers image](https://raw.githubusercontent.com/Gunnthorian/mc-players-widget/master/screenshot1.png)
8. from there you can try to run one of the two functions I believe you will get a pop-up saying that the script is trying to run soemthing, you'll need to go down to where it says something like ```advanced options``` and furthur look for another button that says something like ```continue with the risks```
9. you will then need to either wait for the ```condenseDailyData()``` function to run or you can run it yourself so that you can make a chart out of the data that it creates
10. finally publish the chart as an ```embedded``` iframe, I chose to have it embeded as an image so that I could just insert is as the ```src``` of and ```<img>``` element

check your site!
