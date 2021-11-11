<h1>A clean and minimal portfolio template for developers</h1>

<a href="https://portfoliotemplatebyanas.netlify.app/">Demo</a>

<h3>Features</h3>
<hr/>
<ul>
  <li>Using in demand frontend technologies like Next.js and Tailwindcss</li>
  <li>No extra dependencies</li>
  <li>Responsive</li>
  <li>Free and easy to setup</li>
  <li>Working contact form</li>
 </ul>
 
 <hr/>
 
 <h3>How to setup</h3>
 <p>First of all from your terminal, clone the portfolioTemplateByAnas repo</p>
 
```bash
#clone the repository
$git clone https://github.com/Muhammad-Anas-Younus/portfolioTemplateByAnas.git

#cd into repository
$cd portfolioTemplateByAnas

#remove the origin
$git remote remove origin
```

<br/>
Install the dependencies

 ```bash
 #using npm
 $npm install
 
 #using yarn
 $yarn install
 ```
 <br/>
 
 <h3>Editing your information</h3>
 
 <img src='https://i.postimg.cc/QBvk4S2b/capute.png' border='0' alt='capute'/>
 <img src="https://i.postimg.cc/YSp8XPch/data-json.png" alt="data.json file"/>
 In the assets folder i've created a data.json file, open it and edit your information accordingly.
 
  <h3>Editing your image</h3>
  move your image in the assets folder and change the relative path in the index.js file
  <img src="https://i.postimg.cc/T18tc3TX/index.png"/>
  
  <h3>Chaning colors</h3>
 
  In the desktop version of this template, the four elements on the right side of the hero section that move when you move the mouse are png's, so you can't change their color,   but these png's are available in a number of colors on it's creator's website <a href="https://3d.khagwal.co/explorer/"></a> so i recommend that if you're going to change the   color palette of the website, change it according to the color of the png's.
  or you can remove it all together.
  
  Since i'm using tailwind for this template, in case you want to change the colors of the website:
  - go to tailwind.config.js
  - change the colors accordingly
  <img src="https://i.postimg.cc/xCPX6s2T/colors.png"/>
 
