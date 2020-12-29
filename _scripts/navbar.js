
/* navbar.js */



console.log("Hello world!");
const navbar_content = `
<a>Home</a>
<a href="Officers/">Officers</a>
<a>Kenya/Panama Team</a>
<a>Rwanda Team</a>
<a>Local Team</a>
<a>Industries Without Borders</a>
<a>Fundraisers</a>
<img id="Globe-Logo" src="_images/EWB-UCSB-Logo.jpg" height="100px">
`;
const NavBar = document.getElementById("NavBar");
console.log(NavBar);
NavBar.innerHTML = navbar_content;