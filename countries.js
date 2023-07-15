const countryCodes = {
    'ar': 'Argentina',
    'au': 'Australia',
    'be': 'Belgium',
    'br': 'Brazil',
    'ca': 'Canada',
    'cn': 'China',
    'co': 'Colombia',
    'cu': 'Cuba',
    'cz': 'Czech Republic',
    'eg': 'Egypt',
    'fr': 'France',
    'de': 'Germany',
    'gr': 'Greece',
    'hk': 'Hong Kong',
    'hu': 'Hungary',
    'in': 'India',
    'id': 'Indonesia',
    'ie': 'Ireland',
    'il': 'Israel',
    'it': 'Italy',
    'jp': 'Japan',
    'kr': 'South Korea',
    'lv': 'Latvia',
    'lt': 'Lithuania',
    'my': 'Malaysia',
    'mx': 'Mexico',
    'ma': 'Morocco',
    'nl': 'Netherlands',
    'nz': 'New Zealand',
    'ng': 'Nigeria',
    'no': 'Norway',
    'ph': 'Philippines',
    'pl': 'Poland',
    'pt': 'Portugal',
    'ro': 'Romania',
    'ru': 'Russia',
    'sa': 'Saudi Arabia',
    'rs': 'Serbia',
    'sg': 'Singapore',
    'sk': 'Slovakia',
    'si': 'Slovenia',
    'za': 'South Africa',
    'es': 'Spain',
    'se': 'Sweden',
    'ch': 'Switzerland',
    'tw': 'Taiwan',
    'th': 'Thailand',
    'tr': 'Turkey',
    'ae': 'United Arab Emirates',
    'ua': 'Ukraine',
    'gb': 'United Kingdom',
    'us': 'United States',
    've': 'Venezuela',
    'vn': 'Vietnam'
  };

  



// .flex-container {
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// }

// .right-div {
//   width: 20%;
//   background-color: #f8f8f8;
//   border-radius: 10px;
//   margin-top: 15px;
//   margin-left: 0px;
//   margin-right: 350px;
// }

// main {
// perspective: 1000px;
// display: flex;
// flex-wrap: wrap;
// max-width: 70%;
// margin: 20px auto;
// }

// .div1 {
// align-items: center;
// background-color: rgb(28, 43, 43);
// display: flex;
// grid-area: 1 / 1 / 2 / 4;
// height: 80px;
// text-align: center;
// width: 100%;
// }

// .div1 img {
// height: 70%;
// margin-left: 20px;
// }

// .div2 {
//   width: fit-content;
//   margin: 0 auto;
// }
// #nameInput {
// width: 27%;
// }

// .panel-container {
//   margin-left: 220px;
// }

// .panel {
// position: absolute;
// transform: rotate(0deg);
// opacity: 1;
// transition: transform 2s, opacity 2s;
// background-color: #f8f8f8;
// border: 1px solid #ddd;
// border-radius: 10px;
// padding: 15px 0 15px 15px;
// margin-bottom: 20px;
// box-shadow: 0 2px 5px rgba(0, 0, 0, 0.75);
// transition: all 0.2s ease;
// max-width: 600px;
// min-width: 600px;
// margin-left: -255px;
// margin-right: 0px;
// background-color: rgb(173, 216, 230);
// }

// .panel:hover {
// box-shadow: 0px 30px 60px -5px rgba(0, 0, 0, 0.75);
// }

// .panel-title {
// font-size: 1.5em;
// font-weight: bold;
// margin-bottom: 5px;
// text-decoration: underline;
// padding: 5px;
// }

// .panel-country {
// font-size: 1em;
// color: rgb(84, 81, 81);
// margin-bottom: 5px;
// }

// .panel-language {
// font-size: 0.8em;
// color: rgb(84, 81, 81);
// margin-bottom: 15px;
// }

// .panel-description {
// font-size: 0.9em;
// color: #491010;
// margin-bottom: 10px;
// box-shadow: 0 2px 5px rgba(0, 0, 0, 0.75);
// border-radius: 10px;
// font-weight: bold;
// font-size: 20px;
// text-decoration: underline;
// }

// .panel-category {
// font-size: 0.9em;
// color: rgb(84, 81, 81);
// margin-bottom: 10px;
// }

// .business {
//   color: blue;
// }

// .entertainment {
//   color: yellow;
// }

// .general {
//   color: black;
// }

// .health {
//   color: cyan;
// }

// .science {
//   color: green;
// }

// .sports {
//   color: red;
// }

// .technology {
//   color: rgb(25, 98, 98);
// }

// .panel-link {
// font-size: 0.9em;
// text-decoration: none;
// color: #491010;
// padding: 4px 16px;
// border: 2px solid 337ab7;
// border-radius: 20px;
// margin: 2px 0 6px 0;
// transition: transform 0.3s ease, box-shadow 0.3s ease;
// transform: translateY(-3px);
// box-shadow: 0 2px 5px rgba(0, 0, 0, 0.75);
// }

// .form {
//   background-color: #f8f8f8;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
// }
// .width {
//   min-width: 190px;
//   flex-grow: 1;
// }

// .round-button {
// margin-right: 10px;
// background-image: (".");
// }

// .round-button,
// #search-button {
// display: inline-block;
// width: 50px;
// height: 50px;
// background-color: rgb(28, 43, 43);
// border: none;
// border-radius: 50%;
// color: white;
// text-align: center;
// font-size: 13px;
// line-height: 50px;
// transition: background-color 0.3s;
// margin-left: 20px;
// }

// .round-button:hover {
// background-color: #ee3124;
// }

// input[type="text"],
// .input-field {
// padding: 10px;
// border: 2px solid #ccc;
// border-radius: 5px;
// font-size: 16px;
// transition: border-color 0.3s ease;
// }

// #search-button:hover {
//   background-color: #ff0000;
//   color: #fff;
// }

// footer video {
//   display: flex;
//   position: absolute;
//   bottom: 0px;
//   right: 43%;
//   padding-bottom: 10px;
//   margin-top: 5px;
//   padding-top: 5px;
// }

// .bottom-div {
//   border-radius: 10px;
//   background-color: #f8f8f8;
//   position: absolute;
//   width: 250px;
//   height: 300px;
//   bottom: 10px;
//   left: 380px;
//   padding: 5px;
// }

// .center-div {
//   border-radius: 10px;
//   background-color: #f8f8f8;
//   position: absolute;
//   width: 300px;
//   height: 80px;
//   bottom: 230px;
//   left: 673px;
//   padding: 5px;
// }


// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <title></title>
//   <meta name="description" content="">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <link rel="stylesheet" href="newsfeed.css">
// </head>
// <body class="parent">
//   <header class="div1">
//     <img src="./assets/jones_journal.png" alt="Jones Journal Logo">
//   </header>

//   <section class="centered">
//     <div class="div2">
//       <form action="queryForm" id="queryForm" class="form">
//         <button class="round-button" onclick="window.location.href='index.html'">Home</button>
//         <button id="search-button" type="submit" value="Search">Search</button>
//         <input type="text" name="categoryInput" id="categoryInput" placeholder="Category">
//         <input type="text" name="countryInput" id="countryInput" placeholder="Country">
//         <label for="languageInput">
//           <select id="languageInput" class="input-field">
//             <option value="">All</option>
//             <option value="ar">Arabic</option>
//             <option value="de">German</option>
//             <option value="en">English</option>
//             <option value="es">Spanish</option>
//           </select>
//           <input type="text" name="nameInput" id="nameInput" class="width" placeholder="ABC, Al Jazeera English...">
//         </form>
//       <br>
//       <div id="return-to-page-message"></div>
//     </div>

//     <main id="main">
//       <div class="panel-container"></div>
//     </main>

//     <div class="right-div">
//       <h2>Lorem ipsum dolor</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque hic libero. Perspiciatis veritatis deleniti at! Asperiores incidunt consectetur fuga nisi magni deleniti, vitae illo, illum aperiam aspernatur consequatur! Exercitationem.</p>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, ut consequatur. Necessitatibus mollitia quas voluptates? Architecto eos fugiat, id dicta voluptatum tempora natus, aut nobis sunt voluptas magni in minima?</p>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo dolore voluptates ipsa porro ullam saepe nostrum, exercitationem recusandae sed, inventore facere corrupti veritatis illum optio cum et. Veritatis, iure!</p>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque dolor nostrum repellendus, aperiam reiciendis reiciendis.</p>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque dolor nostrum repellendus, aperiam reiciendis reiciendis.</p>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque dolor nostrum repellendus, aperiam reiciendis reiciendis.</p>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>    </div>
    
//     <div class="bottom-div">
//       <h2>Lorem ipsum</h2>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita placeat sequi aut nobis autem doloribus sunt ex laborum hic eveniet, sit molestias vitae aspernatur voluptates voluptas! Accusantium qui vitae eum?</p>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa modi itaque quibusdam maiores, optio totam! Quaerata dipisicing elit Aliasad ipisicing elit alias.</p>    </div>

//     <div class="center-div">
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa modi itaque quibusdam maiores, optio totam! Quaerat.</p>    </div>

//     <footer>
//       <video width="320" height="240" controls>
//         <source src="./assets/ad.mp4" type="video/mp4">
//         Your browser does not support the video tag.
//       </video>
//     </footer>
//   </section>

//   <script src="login.js"></script>
//   <script src="custom.js"></script>
// </body>
// </html>
// <!-- <a href="#" class="nav-link" id="scrollToTopLink">Top</a> -->



// const categoryElement = document.querySelector(".panel-category");

// const category = categoryElement.textContent;

// if (category === "Business") {
//   categoryElement.classList.add("business");
// } else if (category === "ENTERTAINMENT") {
//   categoryElement.classList.add("entertainment");
// } else if (category === "GENERAL") {
//   categoryElement.classList.add("general");
// } else if (category === "HEALTH") {
//   categoryElement.classList.add("health");
// } else if (category === "SCIENCE") {
//   categoryElement.classList.add("science");
// } else if (category === "TECHNOLOGY") {
//   categoryElement.classList.add("technology");
// } else if (category === "SPORTS") {
//   categoryElement.classList.add("sports");
// }
// };