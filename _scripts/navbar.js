
/* navbar.js */


const dirlevel = parseInt(
    document.currentScript.getAttribute( "dirlevel" )
);
const upADir = "../";
const pathPrefix = upADir.repeat( dirlevel );

// Fill NavBar Here
const navbar_content = `
<a href="${pathPrefix}." >Home</a>
<a href="${pathPrefix}Officers/">Officers</a>
<a>Kenya/Panama Team</a>
<a>Rwanda Team</a>
<a>Local Team</a>
<a>Industries Without Borders</a>
<a href="${pathPrefix}Fundraisers/">Fundraisers</a>
<img id="Globe-Logo" src="${pathPrefix}_images/EWB-UCSB-Logo.jpg" height="100px">
`;

const NavBar = document.getElementById("NavBar");

NavBar.innerHTML = navbar_content;
