# Project Title

Shipment Tracking page

# Overview

This page shows the current state of the shipment with a searching function that updates the content based on the response of the shipment track API.

# Live Demo

https://shipment-tracker-2edcb.web.app

# Workflow

- First of all I started brainstorming on this Figma frame and tried to map a simple API response to the UI to have an overview of this task (https://www.figma.com/design/G3dGMJEmgANSMmRoKenBIk/Bosta-Brainstorming?node-id=1-3&t=ycYsRiPQ892JQiSE-4)
- Then I decided the stack to be used:
  1. Typescript as it makes it easier to integrate with the API by building interfaces for the response returned data and it is safer than javascript.
  2. ChakraUI it was my first time using it(I want to try a new library to make the task more rewarding and challenging) as it is a well-known library that has a variety of components and is customized using emotion like MUI(my most recent used library).
  3. Context API as I preferred it over redux and the project is simple.
  4. I decided to make all needed directories and code splitting like having services and utils even if it is a one-page project to show my preferred project structure and for separation of concerns.
  5. I added eslint to fix any listing issues and I have prettier configured on my local machine to show my awareness of linters and formatters.
  6. I used i18n for internationalization as it is the industry standard and I have some experience in dealing with it as I used it in one of my open source contributions (https://github.com/jitsi/jitsi-meet/commit/bb49c92cc40f23d8203173b5b538d5dc789216c9) and I used some helper functions to handle Dates internationalization

# Assumptions

1. As given endpoint didn't return the dropoff address I hardcoded one address
2. I use the shipment 6741696 as a placeholder shipment to have a look at a fully functional page
3. I handled shipment with one of states in SHIPMENT_STATE in types file and maybe there are other states that I didn't handle but they are the states I found in the response of the API
4. Maybe font sizes not 100% accurate but in real projects, I will use the design system of the company to have the exact font sizes from Figmas.
5. I assumed that the merchant name is the provider name but in most cases its Bosta so maybe there is another endpoint to get the merchant name.
6. I fully converted the Date to arabic instead having the day in English and the rest in Arabic as I found it more readable and I think it is the best practice in the industry.
7. I used N/A as a placeholder for any missing or null data in the response of the API

# Covered Features

Below are brief descriptions of highlighted features with GIFs and screenshoots showcasing the website.

### Handling Loading State

![image](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/8a56e5c6-dceb-4832-bcdc-eaf79c28feab)

### handling Error State

![image](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/4c423b1b-838d-4ae3-a032-e0876657499e)

### Normal State

![image](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/152f38c8-d492-44fa-8803-af9d29c48c3f)

### EN(LTR) && AR(RTL) support

![image](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/033645cc-316a-47f0-b7ce-2133701b0d4b)
![image](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/b5410e07-901b-4f03-b53c-50b10fb0cfa9)

### Responsiveness

![Galaxy-A50-372x1752](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/7c4d9a57-0c7b-4e48-b21c-f2f2c8165df2)

![Galaxy-Note20-371x1752](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/ff31e0df-a6b6-4193-a223-392dcb8a8ee7)

![iMac-24-1120x1304](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/135d8baf-2e85-4daf-80e9-3fcdecc515ab)

![iPad-Air-5-820x1304](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/c293b2bb-9bde-40fa-a230-f6d6623ca541)

![iPad-Pro-11-581x1632](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/902684d3-335a-48f0-9d8c-86eaa296c591)

![iPhone-14-Pro-393x1752](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/20f343fe-8810-41a6-9060-f73639f770b7)

![iPhone-14-Pro-Max-430x1752](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/f127212b-40fa-45e1-a959-07a2640adc9c)

![Macbook-Air-1559x975](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/4042f7c7-f905-4685-b7a6-31057fb29ca5)

![Pixel-2-XL-375x1752](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/928c6b16-0a7f-491c-a9fa-097d858cd11d)

![Pixel-5-376x1752](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/1a8a4996-7a0b-432a-b5a5-3c95987d7566)

![Pixel-7-Pro-480x1632](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/78bce0ab-54d3-4a0c-a8bc-f5a62cf1645b)

![Pixelbook-Go-1643x924](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/f2cc4690-8ba2-48a8-baae-0c05b75ea266)

![Pixel-Tablet-1575x984](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/563d60b5-8a45-4a21-bc61-cc932fe43f56)

![Pro-Display-XDR-1504x902](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/02896a8b-e204-47e8-84e8-8ce028d442e3)

![Studio-Display-1280x902](https://github.com/HazemAbdo/shipment_tracker/assets/59124058/06bbb7d9-d20a-43c7-8f3c-fc728966c128)

# Quick Tour

https://drive.google.com/file/d/1BP1TotBO3zJT5m-zSn6i-L5MZa9SQ8aF/view?usp=sharing
