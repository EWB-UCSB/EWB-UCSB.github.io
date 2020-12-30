
/* navbar.js */


const dirlevel = parseInt(
    document.currentScript.getAttribute( "dirlevel" )
);
const upADir = "../";
const pathPrefix = upADir.repeat( dirlevel );

// Fill NavBar Here
const navbar_content = `
<a href="${pathPrefix}." class="dropbtn">Home</a>
<div class ="dropdown">
    <a class="dropbtn">Project Teams</a>
    <div id="myDropdown" class="dropdown-content">
    <a>Kenya/Panama Team</a>
    <a>Rwanda Team</a>
    <a>Local Team</a>
    </div>
</div>
<a href="${pathPrefix}Officers/">Officers</a>
<a>Industries Without Borders</a>
<a href="${pathPrefix}Fundraisers/">Fundraisers</a>
<img id="Globe-Logo" src="${pathPrefix}_images/EWB-UCSB-Logo.jpg" height="100px">
`;

const NavBar = document.getElementById("NavBar");

NavBar.innerHTML = navbar_content;

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }