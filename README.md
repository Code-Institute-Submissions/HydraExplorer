# **Milestone Project 2**  - Interactive Frontend Development. 

## 🎵 **Hydrasound - Explorer** - _Find your music professional_

![MPS logo and strap line ](assets/img/hydraEx.png)
visit the deployed website here: ****[Hydrasound Explorer deployed on Github Pages](https://danielboots.github.io/HydraExplorer/):**

--
## 📓 **About the project:**

**Hydrasound Explorer** HydraExplorer is the start of an application i have been wanting to build for a while, where it will allow users to find Hydrasound members with the particular skills they are looking for. 
For example a user can search for Remixers or music consultantcy services and our application will return the relevant results. The results are then associated with their own user page for further infomation and contact details.
I decided to approach the web app using the front end DOM manipulation skills and frameworks i have learned so far from the code institute full stack course. Primarily Javascript and Jquery amonst other technologies.

I aim to build the web application following web best practices and also to fulfill my need to present user information on the application  which is not only well structured but is also mobile responsive. 

It should have a a professional look about it and also is not overly complicated with regards to UX, navigation and content layout so that potential clients can visit the website and find what they are looking for quickly and easily.


## 💻️ **Technologies Used:**
___

* **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML):** - Is the main language used in this project which allowed me to correctly structure the website, whereby using best practices to use semantic tags where appropriate.

* **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS):** - Was used via an external stylesheet using best practices to style format and visually present the HTML.

* **[JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript):** - *As part of Bootstrap* Javascript although i havent programmed it, was included in the site as part of the Bootstrap framework so that some Bootstrap components such as the navigation toggler would work.

* **[JQUERY](https://jquery.com/):** - *Extensive parts of the web application are programmed in Jquery, click event listeners on page loads and loading of the users data all employ the use of JQuery.*

* **[BOOTSTRAP](https://getbootstrap.com/):** - The framework for the site allowing use of the Bootstrap grid and responsive mobile first approach. I Used many components from Bootstrap mainly, the Carousel, Nav bar, forms and modals. 

* **[HANDLEBARS.JS](https://handlebarsjs.com/):** - Handlebars allowed me to template out the user cards on the front page from JSON data. It worked by iterating over the JSON users data and running its templating functionality to provide me with the boostrap cards for users which i needed. Reasoning for this instead of hard coding was ease of use, to add a new user i just add the new user to the JSON data and the templating is handled for me.

* **[GOOGLE MAPS](https://developers.google.com/maps/documentation):** - I used the Google Maps API in order to add in user data to the map providing a visual representation to users of where the 'professional musician' is based.

* **[GITPOD](https://gitpod.io/):** - IDE for this project. Allowed me to fork the Code Institute template from Github and open in Gitpod so that all extenstions were available.

* **[GIT](https://git-scm.com/):** Git employed as version control

* **[GITHUB](https://github.com/):** - Github was used to host the repository for this project.

* **[SQUOOSH](https://squoosh.app/):** - I used Squoosh in order to reduce the image sizes

* **[PHOTOSHOP](https://www.adobe.com/uk/products/photoshop.html):** - For editing images associated with this project.

* **[BALSAMIQ](https://balsamiq.com/):** - Mac version to develop wireframes for this project.

___


## 🧑‍🎨 **UX:** 
___


## 💡 **Strategy plane: The Initial idea.**
___
The basis behind the HydraExplorer idea, was to start a web app which allows users to search for music service, be it a music producer or remixer, consultancy etc. In a very easy and intuitive and visual was regarding UX. My primary aim was to bring together many of the technologies i have learned so far to then use these technologies and display data in a comprehensive way. I aim to bring in user data using JSON and AJAX so that my web app has the ability to expand and grow with ease as users can and will eventually allow themselves to register and upload their own data to the app. For this initial app, i will hard code the JSON data but provide extensive evidence of my knowledge of templating JSON and AJAX to satisfy the assesment criteria. 

The web app, should, display musician data in a clear and unclutted manner,for best UX and also allow the user of the web app to find the correct user by service with extreme ease. I will acomplish this by the use of jQuery to provide hide effects and also to change hero sections based on user selections. 


## **About the business:**

The business is entirely online and is concerned with music production services provided by musicians who can add their details to the Hydra Database (for now this is hard coded in JSON format). From Mixing, mastering, track production, consulting etc with the primary aim of the website to display that information and get the potential client to contact users directly using the forms provided on their individual users page to discuss their needs further.



#### **strategy plane continued in full lengh analysis .pdf**

As i aim to build upon the initial features of this web app i suggest the following strategy in order to allow the web app to grow exponentially without the need for excess page creation.
I am using templating from Handlebars and jQuery to pull in JSON data on a hard coded template page, this will pull in all data related to the user and display it on their very own user page, with their id number. This furthermore allows me to just hard code one page Users.html and not create pages for each individual musician.

## 🧰 **Scope Plane - requirements and functional specifcation**
___
### **What users and stakeholders - Say they need**

* The user visiting this type of website wants a professional website easy to navigate and also find the music professioanl they are looking for, with links to more information and examples of their work, this can be provided through a number of means, for example Spotify, Youtube, Biography  / discog etc.

### **What users and stakeholders - Actually need**
They need a clean and tidy designed website which is mobile responsive, highlighting previous work, the music producer who will be working for them and a list of previous clients and labels who we as the business owners can get them in touch with. They need a site that gives them information based on what they are searching for. So a prioritised section of the website for said services, additional information on the services and an opportunity to discuss the project with a real life person over the phone or on email.

### **What users and stakeholders - Don't know they need.**

* As a working business website, we have to abide by GDPR rules, so a pop up advising the client on our privacy and how we use their information would be needed down the production line. This production app will not have this in place but will be if deployed.

* A merchandise store – an opportunity to increase revenue as a more B2C standard practice. 

* Other desirable features may include, online reviews, more services for music promotion and education through a LMS or one to one coaching. 
* A system to which users can add their own details through registration. These services would beneft not only the user but the business owner as he can monetise these features whilst ofering more services to the client, monetisation may be through allowing user registration for a monthly subscription fee. 

* Social networking feature – not essential but desirable, perhaps a twitter/facebook like entity where users can register to the site share their music tips and advice, this would allow for content to be shared cross platform and to other social media accounts, drastically increasing awareness of our web application.

* An iOS and android app – its true that many users now if these features down the line are implemented that developing an application would be of extreme beneft, it would allow extra monetisation brand awareness and next level professionalism, as far as I am aware there are no such apps with the previous aforementioned features bundled into one. This could be an avenue to explore in the future. I have been exploring this avenue with my mentor Allen and he has suggested that in the future it would be wise if this approach were to be undertaken that it would / should be produced using Dart and Flutter from Google, Reasoning behind this is that i would only be looking at maintaining one code base for the web application iOS and Android applications.

#### **Scope plane continued in full lengh analysis .pdf**


## 🏗️ **Structure: How we present information:**
___

The web application will consist of a typical navigation and structure which will conform to web best practices. By this we would expect the navigation menu items to be located to the top right hand corner of the web app. To the left we will employ a Navigation bar logo which doubles as a main Home or index.html link.
As it stands there will only be 2 pages, this is because i have employed a templating style method to my workflow and web application, end point url for users will be USERS.HTML and an associated user ID. This implementation was chosen as i dont have to create new pages per user, i am gathering all data from a JSON file for my users (which in time users will be able to register their own detail) this process allows my website to grow exponentially (with users) without creating multiple individual pages.

The menu items are only one level consisting of a linear structure, so no nested pages as of yet. The structure is as follows.

#### **HOME---USERS:** 
* For this web app, the home page is employed, users.html wont be available on the nav bar but the users.html is a templated page. An extended menu version may be by separating data off into categories such as 'Remixers, Producers etc' however as my database of users only consists of 6 people i deemed it unessessary at this moment in time.  

### **Information on structure regarding page layout and design.:**
 The general structure of pages will consist of a nav bar, a hero section and then relative content to that page, structured using the projects fonts, font sizing and colour palette.
* As discussed earlier I have opted for a content block approach which will allow me to display content in a clean and structured manner. These two points allow the user to learn the layout and feel of the website quickly.
* Each page will have working navigation whereby the text HYDRAEXPLORER will return the user to the home or landing page.

* The home page will have the Handlebars templating library employed so that it can generate the user cards needed. Speaking with my mentor it was deemed that the user cards be generated above the map section for a better UX experience.

* Users.html will be a hard coded template page which pulls in JSON data using AJAX, this will allow me to create one hard coded page which using javascript allows me to display the correct user data for the selected page. 

* A working example of the above would mean that when a user selects the option for a consultancy agency the options HYDRASOUND and EDDIE GORDON are highlighted. If the user selects Hydrasound, then i have coded that option to have an id of 1. When clicking, data is poipulated in the USERS.HTML to show JSON data from the user with the id of 1. This id is grabbed from the URL using Javascript code in the main.js file. The code to achieve this is below.

``` javascript

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    results = regex.exec(url);
    if (!results) return null;
    if (!results) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let userId = getParameterByName('id');

```


EXPAND 

### **IXD:**
Hero section is not full viewport height with next sections always visible, this promotes scrolling and intrigue.
* Colours fonts and structure are reused throughout the site.
* I did however add an animation class from Animista which was used throughout the site on the hero text and strap line,
it plays once on page load and is a fade animation, which I feel adds a subtle but impressive introduction when visiting pages. No further animations are employed.

#### **structure plane continued in full lengh analysis .pdf**

## ✏️ **Skeleton Plane – Interface design, navigation design and giving form to function:**
___

* As with every project which is to be taken in to production it was essential to frstly wireframe the project. This would allow me to test out diferent ideas layouts, navigation and presentation which is expected when visiting this type of website. I developed the wireframes using the Balsamiq software which allowed me to produce low fdelity mockups of the fnished web application without the need for coding it frst. This saves on production time and allows us to have a 'map' of how to fnally code the app.
Please note – these wireframes may difer slightly from the end result


#### **Landing Page - Wireframe **

#### **Landing Page - Wireframe **
![Wireframing-Landing](/)


#### **USERS - Wireframe **
![Wireframing-Users](/)


### **Skeleton plane cont:**
//ammend this part// 
In this project we are only focusing on data presented, and will be future enhance this project with data at rest and data in motion.
However as we are only concerned with the frontend HTML CSS and a small amount of Javascript I have only focused my UX on data presented.

The data presented should provide good usability and at current is only concerned with a few features, contacting through CTA and presenting the information using tools such as cards and carousels. As there are very few features and a sole aim at contacting through the site this should alleviate cognitive overload from the end user.

Navigation has been assembled in order of priority from left to right and all links and internal links are well displayed (many as buttons) and working.

Furthermore I found no need for pagination to display data and also provided menu items and buttons with relevant font awesome icons to aid in web application learning to the end user. Data is presented the same throughout the web app alongside colours, fonts and branding all aiming to allow the end user to learn the web app easily and enjoy using it.

### 🚀 **Surface plane:**

Using all the planes above and the data presentation and all the research carried out I was able to present all of this with my project.
I hope you enjoy browsing my web app and I look forward to developing it further.
In ending this UXD analysis and a quote I feel summarises this whole process I will leave you with this.

> “ Good UX smells like value. Ask yourself the question whenever you're building a project, does this smell like value?”

Brian O'Grady - Code Institute


## 📦️ **Features:** 
add features: 
* The web app is totally mobile responsive with a collapsible toggler navigation. 

### **_Code Refactoring_:** 
___
In this project i also used the extension to Gitpod called prettier which would format my code, however i then went through each page 
and ensured there were no excess lines of whitespace. I also chose a uniformed way of commenting display, whereby i left a line gap either side of my comments so that people can distinguish between code blocks. I feel it was just a neat way to format my comments. 


## 🧪 **Testing:**
___

Testing was an integral part of the design and build process, responsiveness is cruicial to the success of any online website so a number of steps were employed to ensure that the site worked across a number of platforms and browsers.



## 🧪 **User Experience testing:**


### **Utilising Mentor Sessions:**


### **Further Testing:**
* The use of validation services for **[Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/)** and **[HTML Validator](https://validator.w3.org/)** allowed me to modify and fix any errors in my code, 

* I Used the Gitpod built in html testing as seen below![iframe testing error on HTML validator](/images/testing.png) which ended up being a great learning tool spotting errors or unclosed ```<.div>``` etc.
I should also add that this tool brought to my attention that as i was using multiple forms on pages that my ID's needed to be unique, an issue which was quickly rectified but easily overlooked. 
* I finally used **[GTMETRIX](https://gtmetrix.com/)** which is used to test page website speeds. All testing came back fine apart from image sizes which scored pretty low. Thus i used the free online **[SQUOOSH](https://squoosh.app/)** to reduce massive image sizes upto 80% of their original file size. This is especially important as large image sizes dramatically increase page loading speeds and leads to a bad UX especially on mobile where heavy loading sites can eat data very quickly. 


### **Testing Issues:*

### **_HTML Validation error when using Youtube embed._**
___


## 🏭️ **Deployment:**
This project was developed using the Gitpod IDE which integrates seemlessly with Github, Git pod is a cloud IDE so this allowed me to work at home on my imac or out on my imac using only an internet connection and the website **[GITPOD workspaces](https://gitpod.io/workspaces/).** 

The site was developed inside of the Gitpod IDE and connected to my GitHub repository. 
As sections of the site were completed i ensured that i used version control to maintain copies of my code on the repository. This was achieved via commands on the terminal integrated with Gitpod.

### **Steps in using version control and getting ready for Deployment**

1. `git status` - would give me a list of the files which have been edited and ready for staging.
1. `git add .` - I used this command to add **all** files to the staging area instead of adding each file individually i used the `.` after `Git add` which allowed all files to be added at once, i found this workflow quicker and easier.
1. `git commit -m"Message"` - This is the command to commit the changes and the message allowed me to know what or significant changes had been made.
1. `git push` - Was used to push to the remote repository in this case **GitHub**

When working it was also neccessary to view the changes to the website, for this i mainly used preview, as the save function allowed instant refreshes and updates reflecting my changes. However for fullscreen testing in a separate tab i employed the use of the command `python3 -m http.server"` to open a port on my local machine, instructions were to make the port public then open in browser. 

### **How to clone or run this project natively using HTTPS.**
If you should require to fork or obtain a copy of this website you can follow these instructions. 

1. Visit my Github repo here **[HydraExplorer Repo](https://github.com/danielboots/HydraExplorer):**
1. Click on the GREEN clone or download button, located at the top right of the page see screenshot below.


    ![Repo Clone step](/)

1. Click on the "clipboard" also located on the right now seen as a dropbown box. You can either click the clipboard or the URL, if using URL method remember to right click highlighted URL and copy.
1. Open your IDE and open a new terminal window.
1. Change the directory path to a location in which you want to clone the repo too. 
1. Paste the Git URL and click ok / Clone etc. 


#### **Deploy the site to Github Pages.**
Follow these steps in order to then launch the project using Github pages to be viewed live on the web.

1. Enter the _MPS Repository_ from the Github Dashboard.

    ![GitHub Pages](/)

1. Click on the settings tab.

    ![GitHub Pages](/)

1. Scroll right to the bottom of the page options where you will find the "**GitHub Pages**" Options.

    ![GitHub Pages](/)

From the "Source" option, chose "Master Branch" from the presented options.
The page will refresh and you will receive a notification saying. " _**Your site is published at: [https://danielboots.github.io/HydraExplorer/](https://danielboots.github.io/HydraExplorer/)**_"

___

## 🤝 **Credits Acknowledgements and References.**
___

### **Content**
The content for the website was taken from an old version of https://hydrasound.com my own business website which one of the user search features was in part rebuilt for this project.
So all text and information pertaining to my services is of my own work.

### **Media - images** 
Over the course of my project i used various sources for media - 

* **All other Media images** -  From my own website - which was located at https://musicproductionservice.com 
* original content for these logos came from **Pexels**, **Envato Elements** and **https://Hydrasound.com**

### **Code Snippets** 

* **Carousel** - Bootstrap - https://getbootstrap.com/docs/4.0/components/carousel/
* **NavBar** - Bootstrap -   https://getbootstrap.com/docs/4.0/components/navbar/
* **Modal** - Bootstrap - https://getbootstrap.com/docs/4.0/components/modal/
* **Forms** - Bootstrap - https://getbootstrap.com/docs/4.0/components/forms/
* **Card Deck** - Bootstrap - https://getbootstrap.com/docs/4.0/components/card/

### **Media Embeds** 

* **Music Media** - Soundcloud - https://soundcloud.com
* **Video media** - Youtube -   https://Youtube.com


### **Animation Css External Libraries** 

* **Animation Hero text** - Animista library - https://animista.net/play/text/focus-in/text-focus-in

### **Additional** 
* **Code Institute Projects** - Previous projects were referenced when needing to job memory on **HTML** structure or some **css** classes.
* **[Gitpod Emoji Code 0.9.0](https://github.com/idleberg/vscode-emoji-code#readme):** - Allows emoji use in markdown. 
* **[FavIcon- Instructions](https://www.youtube.com/watch?v=pA8103S-yqk):** - Allowed me to add a FavIcon to my site.
* **[FavIcon- Converter](https://www.icoconverter.com/):** - Allowed me to Convert my 16x16px photoshop image to a .ico file.


### **Thanks** 