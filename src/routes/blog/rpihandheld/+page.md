# Creating a Handheld Gaming Console Using a Raspberry Pi

## Step 1: Get your parts

- [Raspberry Pi 4](https://www.canakit.com/raspberry-pi-4-4gb.html?cid=usd&src=raspberrypi)
- [Raspberry Pi Case](https://www.amazon.com/Miuzei-Raspberry-Cooling-Aluminum-Heatsinks/dp/B07TTN1M7G/ref=sr_1_15?keywords=raspberry+pi+4+case&qid=1685646616&sr=8-15)
- [4.3 inch Display](https://www.amazon.com/waveshare-4-3inch-Display-Compatible-Raspberry/dp/B0BZCXQ2MK/ref=sr_1_8?crid=Y970GGKI560U&keywords=display+4.3+inch+waveshare&qid=1685646673&sprefix=display+4.3+inch+waveshare%2Caps%2C300&sr=8-8)
- [Xbox Controller](https://www.xbox.com/en-US/accessories/controllers/xbox-wireless-controller)
- [Xbox Controller Mount](https://www.amazon.com/gp/product/B08DJ2KYG9/ref=ox_sc_act_title_1?smid=A37H6AYBLM0PCO&psc=1)
- [USB-C to USB-A Cable](https://www.amazon.com/CableCreation-Braided-Compatible-MacBook-Resistance/dp/B01CZVEUIE/ref=sr_1_5?crid=25FQECB7E1ROG&keywords=short+usb+c+to+usb+a+cable&qid=1685647174&s=pc&sprefix=short+usb+c+to+usb+a+cable%2Ccomputers%2C262&sr=1-5)
- [Power Bank](https://www.amazon.com/10000mAh-Portable-Charger-External-10000mah/dp/B07GP276CG/ref=sr_1_5?crid=20XHEYQJ7OVTC&keywords=10000mah+power+bank&qid=1685647222&s=electronics&sprefix=10000mah+power+bank%2Celectronics%2C209&sr=1-5)
- [Rubber Bands](https://www.amazon.com/Tactical-Elastic-Resistant-Camping-Survival/dp/B0B2NVBYL2/ref=sr_1_52?crid=1XDW2OA1O7YNR&keywords=thin+ranger+bands&qid=1685210524&sprefix=thin+ranger+bands%2Caps%2C172&sr=8-52)
- [Ribbon Cable](https://www.amazon.com/dp/B07J68N7VD?ref=ppx_pop_mob_ap_share)

## Step 2: Case Assembly

The case I'm using is a stacking case, and on the Amazon page they provide this nice diagram on how to properly stack the layers:
<img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/85a2c160-9580-41f9-8f63-f1f02c62de9a.__CR0,0,970,600_PT0_SX970_V1___.jpg" width="750">

Once you've properly stacked the case it should look like this: 
<img src="/images/blog/pi case.jpeg" width="750">

## Step 3: Display Setup

Now, insert the ribbon cable into the display. Make sure the pins on the ribbon cable are able to be seen.
<img src="/images/blog/display pins.jpeg" width="750">

After that, set the display on top of the Raspberry Pi like this: 
<img src="/images/blog/display on case.jpeg" width="750">

Now, wrap the rubber bands around all four edges of the Rpasberry Pi and display so they are stuck together. Also wrap a rubber band around the Pi in order to flatten the ribbon cable against it. Once you are done it should look similar to this:
<img src="/images/blog/rubber band.jpeg" width="750">

## Step 4: Controller Setup

Take your Xbox Controller and attach the mount to it. It should look like this and feel quite secure.
<img src="/images/blog/controller mount.jpeg" width="750">

## Step 5: Power Bank Setup

Now at this point, we can attach the Raspberry Pi to the mount and be done. There is no way to take this around with us though without it always being plugged in, so it is not very functional. If you are just going to use this is your room, you can stop here with a lighter and better looking contraption. 
<img src="/images/blog/no power bank.webp" width="750">

If you actually want to take this out with you, continue the guide. 



Take your power bank and find an appropriate way to attach it onto your controller. I took 2 rubber bands and wrapped them around the power bank and controller mount. 
<img src="/images/blog/power bank 1.jpeg" width="750">

This is only secured in a vertical sense though. I then attached my Raspberry Pi to the mount, and wrapped two more rubber bands around the edges of it and the power bank. It'll look like this: 
<img src="/images/blog/power bank 2.jpeg" width="750">

Now that the power bank is secured, we can plug the power bank into our Raspberry Pi power input, and we can also plug in our Xbox Controller. I've plugged it into the USB 3.0 port to reduce latency. 
<img src="/images/blog/xbox cable.jpeg" width="750">

## Step 6: OS Setup

Now we can install the OS. On your computer, get the app "Raspberry Pi Imager" and open it. 
<img src="/images/blog/raycast imager.jpeg" width="750"> 

Then go to https://batocera.org and click the Downloads button in the navbar. Find your Raspberry Pi in this list and download the OS for it. 
<img src="/images/blog/batocera download.jpeg" width="750"> 

Once it has downloaded, open the Raspberry Pi Imager, click the "CHOOSE OS" button, and scroll down to the bottom. Select the "custom .img" button. Navigate to the folder with the OS downloaded and select it.
<img src="/images/blog/choose os.jpeg" width="750"> 

Now click the button "CHOOSE STORAGE". Select your micro SD card and then click "WRITE". This will install the OS to the SD card. Once the imager has finished, eject the SD card and insert it into the Raspberry Pi. 

Now that the SD card is in our Pi, we can charge the power bank. Plug in the type of charger the power bank needs into the input, and wait a little. Once the power bank is charged, you should be able to boot up the Pi and play some video games. 
<img src="/images/blog/tekken 3.jpeg" width="750"> 

Thanks for watching the video and following the guide. If you enjoyed the video please give it a like. Thanks, and enjoy your retro gaming! 