// Function to show search results in the dropdown
function showSearchResults() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const menuItems = document.querySelectorAll(".navbar-menu li a");
  const searchResults = document.getElementById("search-results");

  // Clear previous results
  searchResults.innerHTML = "";

  if (searchTerm === "") {
    searchResults.style.display = "none";
    return;
  }

  // Filter matching menu items
  let found = false;
  menuItems.forEach((item) => {
    if (item.textContent.toLowerCase().includes(searchTerm)) {
      const resultLink = document.createElement("a");
      resultLink.textContent = item.textContent;
      resultLink.href = item.href;
      resultLink.onclick = (e) => {
        e.preventDefault();
        item.click(); // Simulate a click on the matching menu item
        clearSearchBar(); // Clear the search bar
      };
      searchResults.appendChild(resultLink);
      found = true;
    }
  });

  // Show or hide the dropdown
  if (found) {
    searchResults.style.display = "block";
  } else {
    searchResults.style.display = "none";
  }
}

// Function to handle the search button
function searchMenu() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const menuItems = document.querySelectorAll(".navbar-menu li a");

  let found = false;
  menuItems.forEach((item) => {
    if (item.textContent.toLowerCase().includes(searchTerm)) {
      item.click(); // Simulate a click on the matching menu item
      clearSearchBar(); // Clear the search bar
      found = true;
    }
  });

  if (!found) {
    alert("No matching topic found. Please try again.");
  }
}

// Function to clear the search bar
function clearSearchBar() {
  document.getElementById("search-bar").value = ""; // Clear the search bar
  document.getElementById("search-results").style.display = "none"; // Hide the dropdown
}

// Function to toggle the sidebar
function toggleSidebar(menu) {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  const initialContent = document.getElementById("initial-content");
  const iframe = document.querySelector("iframe");

  // Close sidebar if it's already open
  if (sidebar.classList.contains("active") && sidebar.dataset.menu === menu) {
    sidebar.classList.remove("active");
    content.classList.remove("active");
    sidebar.dataset.menu = "";
    initialContent.classList.remove("hidden"); // Show initial content
    iframe.classList.add("hidden"); // Hide iframe
    return;
  }

  // Open sidebar and load content
  sidebar.classList.add("active");
  content.classList.add("active");
  sidebar.dataset.menu = menu;
  initialContent.classList.add("hidden"); // Hide initial content
  iframe.classList.remove("hidden"); // Show iframe

  // Load sidebar content dynamically
  const sidebarMenu = document.getElementById("sidebar-menu");
  const sidebarTitle = document.getElementById("sidebar-title");

  // Clear existing content
  sidebarMenu.innerHTML = "";

  // Add new content based on the selected menu
  if (menu === "html") {
    sidebarTitle.textContent = "HTML Tutorial";

    const htmlLinks = [
      // HTML Tutorial Section
      { type: "heading", name: "HTML Tutorial" },
      { name: "HTML Home", link: "home.html" },
      { name: "HTML Introduction", link: "introduction.html" },
      { name: "HTML Editors", link: "editor.html" },
      { name: "HTML Basic", link: "basics.html" },
      { name: "HTML Elements", link: "elements.html" },
      { name: "HTML Attributes", link: "attributes.html" },
      { name: "HTML Headings", link: "headings.html" },
      { name: "HTML Paragraphs", link: "paragraphs.html" },
      { name: "HTML Styles", link: "styles.html" },
      { name: "HTML Formatting", link: "formatting.html" },
      { name: "HTML Quotations", link: "quotations.html" },
      { name: "HTML Comments", link: "comments.html" },
      {
        name: "HTML Colors",
        dropdown: [
          { name: "Colors", link: "colors.html" },
          { name: "RGB", link: "rgb.html" },
          { name: "HEX", link: "hex.html" },
          { name: "HSL", link: "hsl.html" },
        ],
      },
      { name: "HTML CSS", link: "html/css.html" },
      {
        name: "HTML Links",
        dropdown: [
          { name: "Links", link: "links.html" },
          { name: "Link Colors", link: "linkcolors.html" },
          { name: "Link Bookmarks", link: "linkbookmarks.html" },
        ],
      },
      {
        name: "HTML Images",
        dropdown: [
          { name: "Images", link: "images.html" },
          { name: "Image Map", link: "imagemap.html" },
          { name: "Background Images", link: "backgroundimages.html" },
          { name: "The Picture Element", link: "pictureelement.html" },
        ],
      },
      { name: "HTML Favicon", link: "favicon.html" },
      { name: "HTML Page Title", link: "title.html" },
      {
        name: "HTML Tables",
        link: "#",
        dropdown: [
          { name: "Tables", link: "tables.html" },
          { name: "Table Borders", link: "tableborders.html" },
          { name: "Table Size", link: "tablesizes.html" },
          { name: "Table Headers", link: "head.html" },
          { name: "Padding & Spacing", link: "padding&spacing.html" },
          { name: "Colspan & Rowspan", link: "colspan&rowspan.html" },
          { name: "Table Styling", link: "tablestyling.html" },
          { name: "Table Colgroup", link: "colgroup.html" },
        ],
      },
      {
        name: "HTML Lists",
        dropdown: [
          { name: "Unordered Lists", link: "unorderedlists.html" },
          { name: "Ordered Lists", link: "orderedlist.html" },
          { name: "Other Lists", link: "otherlist.html" },
        ],
      },
      { name: "HTML Block & Inline", link: "blockline&inline.html" },
      { name: "HTML Div", link: "div.html" },
      { name: "HTML Classes", link: "classes.html" },
      { name: "HTML Id", link: "id.html" },
      { name: "HTML Iframes", link: "iframes.html" },
      { name: "HTML JavaScript", link: "javascript.html" },
      { name: "HTML File Paths", link: "filepaths.html" },
      { name: "HTML Head", link: "head.html" },
      { name: "HTML Layout", link: "layout.html" },
      { name: "HTML Responsive", link: "responsive.html" },
      { name: "HTML Computercode", link: "computercode.html" },
      { name: "HTML Semantics", link: "semantics.html" },
      { name: "HTML Style Guide", link: "styleguide.html" },
      { name: "HTML Entities", link: "entities.html" },
      { name: "HTML Symbols", link: "symbols.html" },
      { name: "HTML Emojis", link: "emojis.html" },
      { name: "HTML Charsets", link: "charsets.html" },
      { name: "HTML URL Encode", link: "urlencode.html" },
      { name: "HTML vs. XHTML", link: "htmlvsxhtml.html" },

      // HTML Forms Section
      { type: "heading", name: "HTML Forms" },
      { name: "HTML Forms", link: "forms.html" },
      { name: "HTML Form Attributes", link: "formattributes.html" },
      { name: "HTML Form Elements", link: "formelements.html" },
      { name: "HTML Input Types", link: "inputtypes.html" },
      { name: "HTML Input Attributes", link: "inputattributes.html" },
      {
        name: "Input Form Attributes",
        link: "inputformatattributes.html",
      },

      // HTML Graphics Section
      { type: "heading", name: "HTML Graphics" },
      { name: "HTML Canvas", link: "canvas.html" },
      { name: "HTML SVG", link: "svg.html" },

      // HTML Media Section
      { type: "heading", name: "HTML Media" },
      { name: "HTML Media", link: "media.html" },
      { name: "HTML Video", link: "video.html" },
      { name: "HTML Audio", link: "audio.html" },
      { name: "HTML Plug-ins", link: "plugins.html" },
      { name: "HTML YouTube", link: "youtube.html" },

      // HTML API Section
      { type: "heading", name: "HTML API" },
      { name: "HTML Geolocation", link: "geolocation.html" },
      { name: "HTML Drag and Drop", link: "dragdrop.html" },
      { name: "HTML Web Storage", link: "webstorage.html" },
      { name: "HTML Web Workers", link: "webworkers.html" },
      { name: "HTML SSE", link: "sse.html" },
    ];

    // Clear existing menu items
    sidebarMenu.innerHTML = "";

    // Loop through the links and create menu items
    htmlLinks.forEach((item) => {
      if (item.type === "heading") {
        // Add a heading
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading"); // Add a class for styling
        sidebarMenu.appendChild(heading);
      } else {
        // Add a menu item
        const li = document.createElement("li");

        if (item.dropdown) {
          // Add a dropdown menu
          li.innerHTML = `
          <div class="dropdown">
            <a href="#" class="dropdown-toggle">${item.name}</a>
            <ul class="dropdown-menu">
              ${item.dropdown
                .map(
                  (subItem) =>
                    `<li><a href="${subItem.link}" target="contentFrame">${subItem.name}</a></li>`
                )
                .join("")}
            </ul>
          </div>
        `;
        } else {
          // Add a regular link
          li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        }

        sidebarMenu.appendChild(li);
      }
    });

    // Add event listeners for dropdown menus
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = e.target.closest(".dropdown");
        dropdown.classList.toggle("active");
      });
    });

    // Load the first item (HTML Home) in the iframe
    iframe.src = "home.html";
  }
  if (menu === "css") {
    sidebarTitle.textContent = "CSS Tutorial";
    const htmlLinks = [
      { type: "heading", name: "CSS Tutorial" },
      { name: "CSS Home", link: "csshome.html" },
      { name: "CSS Introduction", link: "cssintroduction.html" },
      { name: "CSS syntax", link: "csssyntax.html" },
      { name: "CSS Selectors", link: "selectors.html" },
      { name: "CSS How To", link: "howto.html" },
      { name: "CSS Comments", link: "csscomments.html" },
      { name: "CSS Backgrounds", link: "cssbackgrounds.html" },
      { name: "CSS Borders", link: "cssborders.html" },
      { name: "CSS Margins", link: "margins.html" },
      { name: "CSS Padding", link: "padding.html" },
      { name: "CSS Height/Width", link: "height&weight.html" },
      { name: "CSS Box Model", link: "boxmodel.html" },
      {
        name: "CSS Outline",
        dropdown: [
          { name: "Outline", link: "outline.html" },
          { name: "Outline Width", link: "outlinewidth.html" },
          { name: "Outline  Color", link: "outlinecolor.html" },
          { name: "Outline Shorthand", link: "outlineshorthand.html" },
          { name: "Outline Offset", link: "outlineoffset.html" },
        ],
      },
      {
        name: "CSS Text",
        dropdown: [
          { name: "Text Color", link: "textcolor.html" },
          { name: "Text Alignment", link: "textalignment.html" },
          { name: "Text Decoration", link: "textdecoration.html" },
          { name: "Text Transformation", link: "texttransformation.html" },
          { name: "Text Spacing", link: "textspacing.html" },
          { name: "Text Shadow", link: "textshadow.html" },
        ],
      },
      {
        name: "CSS Fonts",
        dropdown: [
          { name: "Font Family", link: "fontfamily.html" },
          { name: "Font Web Safe", link: "fontwebsafe.html" },
          { name: "Font Fallbacks", link: "fontfallbacks.html" },
          { name: "Font Style", link: "fontstyle.html" },
          { name: "Font Size", link: "fontsize.html" },
          { name: "Font Google", link: "fontgoogle.html" },
          { name: "Font Pairings", link: "fontpairings.html" },
          { name: "Font Shorthand", link: "fontshorthand.html" },
        ],
      },
      { name: "CSS Icons", link: "icons.html" },
      { name: "CSS Links", link: "csslinks.html" },
      { name: "CSS Lists", link: "csslists.html" },
      { name: "CSS Tables", link: "csstables.html" },
      { name: "CSS Display", link: "cssdisplay.html" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
    ];
    // Clear existing menu items
    sidebarMenu.innerHTML = "";

    // Loop through the links and create menu items
    htmlLinks.forEach((item) => {
      if (item.type === "heading") {
        // Add a heading
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading"); // Add a class for styling
        sidebarMenu.appendChild(heading);
      } else {
        // Add a menu item
        const li = document.createElement("li");

        if (item.dropdown) {
          // Add a dropdown menu
          li.innerHTML = `
          <div class="dropdown">
            <a href="#" class="dropdown-toggle">${item.name}</a>
            <ul class="dropdown-menu">
              ${item.dropdown
                .map(
                  (subItem) =>
                    `<li><a href="${subItem.link}" target="contentFrame">${subItem.name}</a></li>`
                )
                .join("")}
            </ul>
          </div>
        `;
        } else {
          // Add a regular link
          li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        }

        sidebarMenu.appendChild(li);
      }
    });

    // Add event listeners for dropdown menus
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = e.target.closest(".dropdown");
        dropdown.classList.toggle("active");
      });
    });

    // Load the first item (HTML Home) in the iframe
    iframe.src = "csshome.html";
  }
  if (menu === "javascript") {
    sidebarTitle.textContent = "CSS Tutorial";
    const htmlLinks = [
      { type: "heading", name: "Javascript Tutorial" },
      { name: "JS Home", link: "jshome.html" },
      { name: "JS Introduction", link: "jsintroduction.html" },
      { name: "JS Where To", link: "jswhereto.html" },
      { name: "JS Output", link: "jsoutput.html" },
      { name: "JS Statements", link: "jsstatements.html" },
      { name: "JS Syntax", link: "jssyntax.html" },
      { name: "JS Comments", link: "jscomments.html" },
      { name: "JS Variables", link: "jsvariables.html" },
      { name: "JS Let", link: "jslet.html" },
      { name: "JS Const", link: "jsconst.html" },
      { name: "JS Operators", link: "jsoperators.html" },
      { name: "JS Arithmetic", link: "jsarithmetic.html" },
      { name: "JS Assignment", link: "jsassignment.html" },
      { name: "JS Data Types", link: "jsdatatypes.html" },
      { name: "JS Functions", link: "jsfunctions.html" },
      { name: "JS Objects", link: "jsobjects.html" },
      { name: "JS Object Properties", link: "jsobjectproperties.html" },
    ];
    // Clear existing menu items
    sidebarMenu.innerHTML = "";

    // Loop through the links and create menu items
    htmlLinks.forEach((item) => {
      if (item.type === "heading") {
        // Add a heading
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading"); // Add a class for styling
        sidebarMenu.appendChild(heading);
      } else {
        // Add a menu item
        const li = document.createElement("li");

        if (item.dropdown) {
          // Add a dropdown menu
          li.innerHTML = `
          <div class="dropdown">
            <a href="#" class="dropdown-toggle">${item.name}</a>
            <ul class="dropdown-menu">
              ${item.dropdown
                .map(
                  (subItem) =>
                    `<li><a href="${subItem.link}" target="contentFrame">${subItem.name}</a></li>`
                )
                .join("")}
            </ul>
          </div>
        `;
        } else {
          // Add a regular link
          li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        }

        sidebarMenu.appendChild(li);
      }
    });

    // Add event listeners for dropdown menus
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = e.target.closest(".dropdown");
        dropdown.classList.toggle("active");
      });
    });

    // Load the first item (HTML Home) in the iframe
    iframe.src = "jshome.html";
  }
  if (menu === "sql") {
    sidebarTitle.textContent = "SQL Tutorial";
    const htmlLinks = [
      { type: "heading", name: "SQL Tutorial" },
      { name: "SQL Home", link: "sqlhome.html" },
      { name: "SQL Intro", link: "sqlintro.html" },
      { name: "SQL Syntax", link: "sqlsyntax.html" },
      { name: "SQL Select", link: "sqlselect.html" },
      { name: "SQL Select distinct", link: "sqlselectdistinct.html" },
      { name: "SQL Where", link: "sqlwhere.html" },
      { name: "SQL Order By", link: "sqlorderby.html" },
      { name: "SQL And", link: "sqland.html" },
      { name: "SQL Or", link: "sqlor.html" },
      { name: "SQL Not", link: "sqlnot.html" },
      { name: "SQL Insert Into ", link: "sqlinsertinto.html" },
      { name: "SQL Null Values", link: "sqlnullvalues.html" },
      { name: "SQL Update", link: "sqlupdate.html" },
      { name: "SQL Delete", link: "sqldelete.html" },
      { name: "SQL Select Top", link: "sqlselecttop.html" },
      { name: "SQL Aggregate Functions", link: "sqlaggregatefunctions.html" },
      { name: "SQL Min and Max", link: "sqlminandmax.html" },
    ];
    // Clear existing menu items
    sidebarMenu.innerHTML = "";

    // Loop through the links and create menu items
    htmlLinks.forEach((item) => {
      if (item.type === "heading") {
        // Add a heading
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading"); // Add a class for styling
        sidebarMenu.appendChild(heading);
      } else {
        // Add a menu item
        const li = document.createElement("li");

        if (item.dropdown) {
          // Add a dropdown menu
          li.innerHTML = `
          <div class="dropdown">
            <a href="#" class="dropdown-toggle">${item.name}</a>
            <ul class="dropdown-menu">
              ${item.dropdown
                .map(
                  (subItem) =>
                    `<li><a href="${subItem.link}" target="contentFrame">${subItem.name}</a></li>`
                )
                .join("")}
            </ul>
          </div>
        `;
        } else {
          // Add a regular link
          li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        }

        sidebarMenu.appendChild(li);
      }
    });

    // Add event listeners for dropdown menus
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = e.target.closest(".dropdown");
        dropdown.classList.toggle("active");
      });
    });

    // Load the first item (HTML Home) in the iframe
    iframe.src = "sqlhome.html";
  }
  if (menu === "python") {
    sidebarTitle.textContent = "Python Tutorial";
    const htmlLinks = [
      { type: "heading", name: "Python Tutorial" },
      { name: "Python Home", link: "pythonhome.html" },
      { name: "Python Intro", link: "python.html" },
      { name: "Python GetStarted", link: "python.html" },
      { name: "Python Syntax", link: "python.html" },
      { name: "Python Comments", link: "python.html" },
      { name: "Python Variables", link: "python.html" },
      { name: "Python Data Types", link: "python.html" },
      { name: "Python Numbers", link: "python.html" },
      { name: "Python Casting", link: "python.html" },
      { name: "Python Strings", link: "python.html" },
      { name: "Python Booleans", link: "python.html" },
      { name: "Python Operators", link: "python.html" },
      { name: "Python Lists", link: "python.html" },
      { name: "Python Tuples", link: "python.html" },
      { name: "Python Sets", link: "python.html" },
      { name: "Python Dictionaries", link: "python.html" },
      { name: "Python If...else", link: "python.html" },
    ];
    // Clear existing menu items
    sidebarMenu.innerHTML = "";

    // Loop through the links and create menu items
    htmlLinks.forEach((item) => {
      if (item.type === "heading") {
        // Add a heading
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading"); // Add a class for styling
        sidebarMenu.appendChild(heading);
      } else {
        // Add a menu item
        const li = document.createElement("li");

        if (item.dropdown) {
          // Add a dropdown menu
          li.innerHTML = `
          <div class="dropdown">
            <a href="#" class="dropdown-toggle">${item.name}</a>
            <ul class="dropdown-menu">
              ${item.dropdown
                .map(
                  (subItem) =>
                    `<li><a href="${subItem.link}" target="contentFrame">${subItem.name}</a></li>`
                )
                .join("")}
            </ul>
          </div>
        `;
        } else {
          // Add a regular link
          li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        }

        sidebarMenu.appendChild(li);
      }
    });

    // Add event listeners for dropdown menus
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = e.target.closest(".dropdown");
        dropdown.classList.toggle("active");
      });
    });

    // Load the first item (HTML Home) in the iframe
    iframe.src = "pythonhome.html";
  }
  if (menu === "java") {
    sidebarTitle.textContent = "JAVA Tutorial";
    const htmlLinks = [
      { type: "heading", name: "Java Tutorial" },
      { name: "JAVA Home", link: "sqlhome.html" },
      { name: "JAVA Intro", link: "java.html" },
      { name: "JAVA Get Started", link: "java.html" },
      { name: "JAVA Syntax", link: "java.html" },
      { name: "JAVA Output", link: "java.html" },
      { name: "JAVA Comments", link: "java.html" },
      { name: "JAVA Variables", link: "java.html" },
      { name: "JAVA Data Types", link: "java.html" },
      { name: "JAVA Type Casting", link: "java.html" },
      { name: "JAVA Operators", link: "java.html" },
      { name: "JAVA Strings", link: "java.html" },
      { name: "JAVA Math", link: "java.html" },
      { name: "JAVA Booleans", link: "java.html" },
      { name: "JAVA If....else", link: "java.html" },
      { name: "JAVA Switch", link: "java.html" },
      { name: "JAVA While Loop", link: "java.html" },
      { name: "JAVA For Loop", link: "java.html" },
    ];
    // Clear existing menu items
    sidebarMenu.innerHTML = "";

    // Loop through the links and create menu items
    htmlLinks.forEach((item) => {
      if (item.type === "heading") {
        // Add a heading
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading"); // Add a class for styling
        sidebarMenu.appendChild(heading);
      } else {
        // Add a menu item
        const li = document.createElement("li");

        if (item.dropdown) {
          // Add a dropdown menu
          li.innerHTML = `
          <div class="dropdown">
            <a href="#" class="dropdown-toggle">${item.name}</a>
            <ul class="dropdown-menu">
              ${item.dropdown
                .map(
                  (subItem) =>
                    `<li><a href="${subItem.link}" target="contentFrame">${subItem.name}</a></li>`
                )
                .join("")}
            </ul>
          </div>
        `;
        } else {
          // Add a regular link
          li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        }

        sidebarMenu.appendChild(li);
      }
    });

    // Add event listeners for dropdown menus
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = e.target.closest(".dropdown");
        dropdown.classList.toggle("active");
      });
    });

    // Load the first item (HTML Home) in the iframe
    iframe.src = "javahome.html";
  }
  if (menu === "php") {
    sidebarTitle.textContent = "PHP Tutorial";
    const phpLinks = [
      { type: "heading", name: "PHP Tutorial" },
      { name: "PHP Home", link: "php-home.html" },
      { name: "PHP Intro", link: "php-intro.html" },
      { name: "PHP Syntax", link: "php-syntax.html" },
      { name: "PHP Variables", link: "php-variables.html" },
      { name: "PHP Echo/Print", link: "php-echo-print.html" },
      { name: "PHP Data Types", link: "php-data-types.html" },
      { name: "PHP Strings", link: "php-strings.html" },
      { name: "PHP Constants", link: "php-constants.html" },
      { name: "PHP Operators", link: "php-operators.html" },
      { name: "PHP If...Else", link: "php-if-else.html" },
      { name: "PHP Switch", link: "php-switch.html" },
      { name: "PHP Loops", link: "php-loops.html" },
      { name: "PHP Functions", link: "php-functions.html" },
      { name: "PHP Arrays", link: "php-arrays.html" },
      { name: "PHP Superglobals", link: "php-superglobals.html" },
      { name: "PHP Forms", link: "php-forms.html" },
      { name: "PHP File Handling", link: "php-file-handling.html" },
      { name: "PHP Cookies", link: "php-cookies.html" },
      { name: "PHP Sessions", link: "php-sessions.html" },
      { name: "PHP Filters", link: "php-filters.html" },
      { name: "PHP JSON", link: "php-json.html" },
      { name: "PHP OOP", link: "php-oop.html" },
      { name: "PHP MySQLi", link: "php-mysqli.html" },
      { name: "PHP PDO", link: "php-pdo.html" },
    ];
    sidebarMenu.innerHTML = "";

    phpLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "php-home.html";
  } else if (menu === "howto") {
    sidebarTitle.textContent = "How To Tutorial";
    const howToLinks = [
      { type: "heading", name: "How To Tutorial" },
      { name: "How To Home", link: "howto-home.html" },
      { name: "How To Create a Website", link: "howto-create-website.html" },
      { name: "How To Style a Website", link: "howto-style-website.html" },
      {
        name: "How To Add Interactivity",
        link: "howto-add-interactivity.html",
      },
      { name: "How To Use Forms", link: "howto-use-forms.html" },
      { name: "How To Use APIs", link: "howto-use-apis.html" },
      { name: "How To Deploy a Website", link: "howto-deploy-website.html" },
      { name: "How To Use Git", link: "howto-use-git.html" },
      { name: "How To Debug Code", link: "howto-debug-code.html" },
      {
        name: "How To Optimize Performance",
        link: "howto-optimize-performance.html",
      },
      { name: "How To Secure a Website", link: "howto-secure-website.html" },
      { name: "How To Use Bootstrap", link: "howto-use-bootstrap.html" },
      { name: "How To Use React", link: "howto-use-react.html" },
      { name: "How To Use Node.js", link: "howto-use-nodejs.html" },
      { name: "How To Use MongoDB", link: "howto-use-mongodb.html" },
      { name: "How To Use MySQL", link: "howto-use-mysql.html" },
      { name: "How To Use Python", link: "howto-use-python.html" },
      { name: "How To Use PHP", link: "howto-use-php.html" },
      { name: "How To Use JavaScript", link: "howto-use-javascript.html" },
      { name: "How To Use CSS", link: "howto-use-css.html" },
      { name: "How To Use HTML", link: "howto-use-html.html" },
      { name: "How To Use APIs", link: "howto-use-apis.html" },
      { name: "How To Use Docker", link: "howto-use-docker.html" },
      { name: "How To Use Kubernetes", link: "howto-use-kubernetes.html" },
    ];
    sidebarMenu.innerHTML = "";

    howToLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "howto-home.html";
  } else if (menu === "w3css") {
    sidebarTitle.textContent = "W3.CSS Tutorial";
    const w3cssLinks = [
      { type: "heading", name: "W3.CSS Tutorial" },
      { name: "W3.CSS Home", link: "w3css-home.html" },
      { name: "W3.CSS Intro", link: "w3css-intro.html" },
      { name: "W3.CSS Colors", link: "w3css-colors.html" },
      { name: "W3.CSS Containers", link: "w3css-containers.html" },
      { name: "W3.CSS Panels", link: "w3css-panels.html" },
      { name: "W3.CSS Buttons", link: "w3css-buttons.html" },
      { name: "W3.CSS Forms", link: "w3css-forms.html" },
      { name: "W3.CSS Tables", link: "w3css-tables.html" },
      { name: "W3.CSS Grid", link: "w3css-grid.html" },
      { name: "W3.CSS Animations", link: "w3css-animations.html" },
      { name: "W3.CSS Responsive", link: "w3css-responsive.html" },
      { name: "W3.CSS Themes", link: "w3css-themes.html" },
      { name: "W3.CSS Utilities", link: "w3css-utilities.html" },
      { name: "W3.CSS Icons", link: "w3css-icons.html" },
      { name: "W3.CSS Navbar", link: "w3css-navbar.html" },
      { name: "W3.CSS Cards", link: "w3css-cards.html" },
      { name: "W3.CSS Modals", link: "w3css-modals.html" },
      { name: "W3.CSS Tooltips", link: "w3css-tooltips.html" },
      { name: "W3.CSS Dropdowns", link: "w3css-dropdowns.html" },
      { name: "W3.CSS Tabs", link: "w3css-tabs.html" },
      { name: "W3.CSS Accordions", link: "w3css-accordions.html" },
      { name: "W3.CSS Carousel", link: "w3css-carousel.html" },
      { name: "W3.CSS Flexbox", link: "w3css-flexbox.html" },
      { name: "W3.CSS Shadows", link: "w3css-shadows.html" },
    ];
    sidebarMenu.innerHTML = "";

    w3cssLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "w3css-home.html";
  } else if (menu === "c") {
    sidebarTitle.textContent = "C Tutorial";
    const cLinks = [
      { type: "heading", name: "C Tutorial" },
      { name: "C Home", link: "c-home.html" },
      { name: "C Intro", link: "c-intro.html" },
      { name: "C Syntax", link: "c-syntax.html" },
      { name: "C Variables", link: "c-variables.html" },
      { name: "C Data Types", link: "c-data-types.html" },
      { name: "C Operators", link: "c-operators.html" },
      { name: "C If...Else", link: "c-if-else.html" },
      { name: "C Loops", link: "c-loops.html" },
      { name: "C Functions", link: "c-functions.html" },
      { name: "C Arrays", link: "c-arrays.html" },
      { name: "C Pointers", link: "c-pointers.html" },
      { name: "C Strings", link: "c-strings.html" },
      { name: "C Structures", link: "c-structures.html" },
      { name: "C File Handling", link: "c-file-handling.html" },
      { name: "C Dynamic Memory", link: "c-dynamic-memory.html" },
      { name: "C Preprocessor", link: "c-preprocessor.html" },
      { name: "C Recursion", link: "c-recursion.html" },
      { name: "C Linked Lists", link: "c-linked-lists.html" },
      { name: "C Stacks", link: "c-stacks.html" },
      { name: "C Queues", link: "c-queues.html" },
      { name: "C Trees", link: "c-trees.html" },
      { name: "C Graphs", link: "c-graphs.html" },
      { name: "C Sorting", link: "c-sorting.html" },
      { name: "C Searching", link: "c-searching.html" },
    ];
    sidebarMenu.innerHTML = "";

    cLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "c-home.html";
  } else if (menu === "cplusplus") {
    sidebarTitle.textContent = "C++ Tutorial";
    const cppLinks = [
      { type: "heading", name: "C++ Tutorial" },
      { name: "C++ Home", link: "cpp-home.html" },
      { name: "C++ Intro", link: "cpp-intro.html" },
      { name: "C++ Syntax", link: "cpp-syntax.html" },
      { name: "C++ Variables", link: "cpp-variables.html" },
      { name: "C++ Data Types", link: "cpp-data-types.html" },
      { name: "C++ Operators", link: "cpp-operators.html" },
      { name: "C++ If...Else", link: "cpp-if-else.html" },
      { name: "C++ Loops", link: "cpp-loops.html" },
      { name: "C++ Functions", link: "cpp-functions.html" },
      { name: "C++ Classes", link: "cpp-classes.html" },
      { name: "C++ Inheritance", link: "cpp-inheritance.html" },
      { name: "C++ Polymorphism", link: "cpp-polymorphism.html" },
      { name: "C++ Abstraction", link: "cpp-abstraction.html" },
      { name: "C++ Encapsulation", link: "cpp-encapsulation.html" },
      { name: "C++ Pointers", link: "cpp-pointers.html" },
      { name: "C++ Arrays", link: "cpp-arrays.html" },
      { name: "C++ Strings", link: "cpp-strings.html" },
      { name: "C++ File Handling", link: "cpp-file-handling.html" },
      { name: "C++ Templates", link: "cpp-templates.html" },
      { name: "C++ STL", link: "cpp-stl.html" },
      { name: "C++ Exceptions", link: "cpp-exceptions.html" },
      { name: "C++ Multithreading", link: "cpp-multithreading.html" },
      { name: "C++ Networking", link: "cpp-networking.html" },
      { name: "C++ Graphics", link: "cpp-graphics.html" },
    ];
    sidebarMenu.innerHTML = "";

    cppLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "cpp-home.html";
  } else if (menu === "csharp") {
    sidebarTitle.textContent = "C# Tutorial";
    const csharpLinks = [
      { type: "heading", name: "C# Tutorial" },
      { name: "C# Home", link: "csharp-home.html" },
      { name: "C# Intro", link: "csharp-intro.html" },
      { name: "C# Syntax", link: "csharp-syntax.html" },
      { name: "C# Variables", link: "csharp-variables.html" },
      { name: "C# Data Types", link: "csharp-data-types.html" },
      { name: "C# Operators", link: "csharp-operators.html" },
      { name: "C# If...Else", link: "csharp-if-else.html" },
      { name: "C# Loops", link: "csharp-loops.html" },
      { name: "C# Functions", link: "csharp-functions.html" },
      { name: "C# Classes", link: "csharp-classes.html" },
      { name: "C# Inheritance", link: "csharp-inheritance.html" },
      { name: "C# Polymorphism", link: "csharp-polymorphism.html" },
      { name: "C# Abstraction", link: "csharp-abstraction.html" },
      { name: "C# Encapsulation", link: "csharp-encapsulation.html" },
      { name: "C# Arrays", link: "csharp-arrays.html" },
      { name: "C# Strings", link: "csharp-strings.html" },
      { name: "C# File Handling", link: "csharp-file-handling.html" },
      { name: "C# Exceptions", link: "csharp-exceptions.html" },
      { name: "C# Delegates", link: "csharp-delegates.html" },
      { name: "C# Events", link: "csharp-events.html" },
      { name: "C# LINQ", link: "csharp-linq.html" },
      { name: "C# Multithreading", link: "csharp-multithreading.html" },
      { name: "C# Networking", link: "csharp-networking.html" },
      { name: "C# GUI", link: "csharp-gui.html" },
    ];
    sidebarMenu.innerHTML = "";

    csharpLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "csharp-home.html";
  } else if (menu === "bootstrap") {
    sidebarTitle.textContent = "Bootstrap Tutorial";
    const bootstrapLinks = [
      { type: "heading", name: "Bootstrap Tutorial" },
      { name: "Bootstrap Home", link: "bootstrap-home.html" },
      { name: "Bootstrap Intro", link: "bootstrap-intro.html" },
      { name: "Bootstrap Grid", link: "bootstrap-grid.html" },
      { name: "Bootstrap Buttons", link: "bootstrap-buttons.html" },
      { name: "Bootstrap Forms", link: "bootstrap-forms.html" },
      { name: "Bootstrap Navbar", link: "bootstrap-navbar.html" },
      { name: "Bootstrap Cards", link: "bootstrap-cards.html" },
      { name: "Bootstrap Modals", link: "bootstrap-modals.html" },
      { name: "Bootstrap Carousel", link: "bootstrap-carousel.html" },
      { name: "Bootstrap Tooltips", link: "bootstrap-tooltips.html" },
      { name: "Bootstrap Popovers", link: "bootstrap-popovers.html" },
      { name: "Bootstrap Alerts", link: "bootstrap-alerts.html" },
      { name: "Bootstrap Badges", link: "bootstrap-badges.html" },
      { name: "Bootstrap Progress Bars", link: "bootstrap-progress-bars.html" },
      { name: "Bootstrap Pagination", link: "bootstrap-pagination.html" },
      { name: "Bootstrap List Groups", link: "bootstrap-list-groups.html" },
      { name: "Bootstrap Tables", link: "bootstrap-tables.html" },
      { name: "Bootstrap Images", link: "bootstrap-images.html" },
      { name: "Bootstrap Jumbotron", link: "bootstrap-jumbotron.html" },
      { name: "Bootstrap Spinners", link: "bootstrap-spinners.html" },
      { name: "Bootstrap Toasts", link: "bootstrap-toasts.html" },
      { name: "Bootstrap Collapse", link: "bootstrap-collapse.html" },
      { name: "Bootstrap Utilities", link: "bootstrap-utilities.html" },
      { name: "Bootstrap Flexbox", link: "bootstrap-flexbox.html" },
    ];
    sidebarMenu.innerHTML = "";

    bootstrapLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "bootstrap-home.html";
  } else if (menu === "react") {
    sidebarTitle.textContent = "React Tutorial";
    const reactLinks = [
      { type: "heading", name: "React Tutorial" },
      { name: "React Home", link: "react-home.html" },
      { name: "React Intro", link: "react-intro.html" },
      { name: "React JSX", link: "react-jsx.html" },
      { name: "React Components", link: "react-components.html" },
      { name: "React Props", link: "react-props.html" },
      { name: "React State", link: "react-state.html" },
      { name: "React Events", link: "react-events.html" },
      { name: "React Hooks", link: "react-hooks.html" },
      { name: "React Router", link: "react-router.html" },
      { name: "React Forms", link: "react-forms.html" },
      { name: "React Context API", link: "react-context-api.html" },
      { name: "React Redux", link: "react-redux.html" },
      { name: "React Styling", link: "react-styling.html" },
      { name: "React Animations", link: "react-animations.html" },
      { name: "React Testing", link: "react-testing.html" },
      { name: "React Deployment", link: "react-deployment.html" },
      { name: "React Performance", link: "react-performance.html" },
      { name: "React Best Practices", link: "react-best-practices.html" },
      { name: "React FAQs", link: "react-faqs.html" },
      { name: "React Examples", link: "react-examples.html" },
      {
        name: "React Interview Questions",
        link: "react-interview-questions.html",
      },
      { name: "React Cheatsheet", link: "react-cheatsheet.html" },
      { name: "React Resources", link: "react-resources.html" },
      { name: "React Community", link: "react-community.html" },
    ];
    sidebarMenu.innerHTML = "";

    reactLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "react-home.html";
  } else if (menu === "mysql") {
    sidebarTitle.textContent = "MySQL Tutorial";
    const mysqlLinks = [
      { type: "heading", name: "MySQL Tutorial" },
      { name: "MySQL Home", link: "mysql-home.html" },
      { name: "MySQL Intro", link: "mysql-intro.html" },
      { name: "MySQL Create DB", link: "mysql-create-db.html" },
      { name: "MySQL Create Table", link: "mysql-create-table.html" },
      { name: "MySQL Insert", link: "mysql-insert.html" },
      { name: "MySQL Select", link: "mysql-select.html" },
      { name: "MySQL Update", link: "mysql-update.html" },
      { name: "MySQL Delete", link: "mysql-delete.html" },
      { name: "MySQL Where Clause", link: "mysql-where.html" },
      { name: "MySQL Order By", link: "mysql-order-by.html" },
      { name: "MySQL Joins", link: "mysql-joins.html" },
      { name: "MySQL Group By", link: "mysql-group-by.html" },
      { name: "MySQL Having Clause", link: "mysql-having.html" },
      { name: "MySQL Indexes", link: "mysql-indexes.html" },
      { name: "MySQL Transactions", link: "mysql-transactions.html" },
      { name: "MySQL Views", link: "mysql-views.html" },
      { name: "MySQL Stored Procedures", link: "mysql-stored-procedures.html" },
      { name: "MySQL Triggers", link: "mysql-triggers.html" },
      { name: "MySQL Backup", link: "mysql-backup.html" },
      { name: "MySQL Security", link: "mysql-security.html" },
      { name: "MySQL Performance", link: "mysql-performance.html" },
      { name: "MySQL Optimization", link: "mysql-optimization.html" },
      { name: "MySQL FAQs", link: "mysql-faqs.html" },
      { name: "MySQL Cheatsheet", link: "mysql-cheatsheet.html" },
    ];
    sidebarMenu.innerHTML = "";

    mysqlLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "mysql-home.html";
  } else if (menu === "jquery") {
    sidebarTitle.textContent = "jQuery Tutorial";
    const jqueryLinks = [
      { type: "heading", name: "jQuery Tutorial" },
      { name: "jQuery Home", link: "jquery-home.html" },
      { name: "jQuery Intro", link: "jquery-intro.html" },
      { name: "jQuery Syntax", link: "jquery-syntax.html" },
      { name: "jQuery Selectors", link: "jquery-selectors.html" },
      { name: "jQuery Events", link: "jquery-events.html" },
      { name: "jQuery Effects", link: "jquery-effects.html" },
      { name: "jQuery HTML", link: "jquery-html.html" },
      { name: "jQuery CSS", link: "jquery-css.html" },
      { name: "jQuery AJAX", link: "jquery-ajax.html" },
      { name: "jQuery Plugins", link: "jquery-plugins.html" },
      { name: "jQuery UI", link: "jquery-ui.html" },
      { name: "jQuery Mobile", link: "jquery-mobile.html" },
      { name: "jQuery Examples", link: "jquery-examples.html" },
      { name: "jQuery FAQs", link: "jquery-faqs.html" },
      { name: "jQuery Cheatsheet", link: "jquery-cheatsheet.html" },
      { name: "jQuery Resources", link: "jquery-resources.html" },
      { name: "jQuery Community", link: "jquery-community.html" },
      {
        name: "jQuery Interview Questions",
        link: "jquery-interview-questions.html",
      },
      { name: "jQuery Best Practices", link: "jquery-best-practices.html" },
      { name: "jQuery Performance", link: "jquery-performance.html" },
      { name: "jQuery Debugging", link: "jquery-debugging.html" },
      { name: "jQuery Security", link: "jquery-security.html" },
      { name: "jQuery Deployment", link: "jquery-deployment.html" },
      { name: "jQuery Tools", link: "jquery-tools.html" },
    ];
    sidebarMenu.innerHTML = "";

    jqueryLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "jquery-home.html";
  } else if (menu === "excel") {
    sidebarTitle.textContent = "Excel Tutorial";
    const excelLinks = [
      { type: "heading", name: "Excel Tutorial" },
      { name: "Excel Home", link: "excel-home.html" },
      { name: "Excel Intro", link: "excel-intro.html" },
      { name: "Excel Basics", link: "excel-basics.html" },
      { name: "Excel Formulas", link: "excel-formulas.html" },
      { name: "Excel Functions", link: "excel-functions.html" },
      { name: "Excel Charts", link: "excel-charts.html" },
      { name: "Excel Pivot Tables", link: "excel-pivot-tables.html" },
      { name: "Excel Macros", link: "excel-macros.html" },
      { name: "Excel Data Analysis", link: "excel-data-analysis.html" },
      { name: "Excel VBA", link: "excel-vba.html" },
      { name: "Excel Examples", link: "excel-examples.html" },
      { name: "Excel FAQs", link: "excel-faqs.html" },
      { name: "Excel Cheatsheet", link: "excel-cheatsheet.html" },
      { name: "Excel Resources", link: "excel-resources.html" },
      { name: "Excel Community", link: "excel-community.html" },
      {
        name: "Excel Interview Questions",
        link: "excel-interview-questions.html",
      },
      { name: "Excel Best Practices", link: "excel-best-practices.html" },
      { name: "Excel Performance", link: "excel-performance.html" },
      { name: "Excel Debugging", link: "excel-debugging.html" },
      { name: "Excel Security", link: "excel-security.html" },
      { name: "Excel Deployment", link: "excel-deployment.html" },
      { name: "Excel Tools", link: "excel-tools.html" },
      { name: "Excel Templates", link: "excel-templates.html" },
      { name: "Excel Add-ins", link: "excel-addins.html" },
    ];
    sidebarMenu.innerHTML = "";

    excelLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "excel-home.html";
  } else if (menu === "xml") {
    sidebarTitle.textContent = "XML Tutorial";
    const xmlLinks = [
      { type: "heading", name: "XML Tutorial" },
      { name: "XML Home", link: "xml-home.html" },
      { name: "XML Intro", link: "xml-intro.html" },
      { name: "XML Syntax", link: "xml-syntax.html" },
      { name: "XML Elements", link: "xml-elements.html" },
      { name: "XML Attributes", link: "xml-attributes.html" },
      { name: "XML Namespaces", link: "xml-namespaces.html" },
      { name: "XML Schema", link: "xml-schema.html" },
      { name: "XML DTD", link: "xml-dtd.html" },
      { name: "XML XPath", link: "xml-xpath.html" },
      { name: "XML XSLT", link: "xml-xslt.html" },
      { name: "XML DOM", link: "xml-dom.html" },
      { name: "XML SAX", link: "xml-sax.html" },
      { name: "XML Examples", link: "xml-examples.html" },
      { name: "XML FAQs", link: "xml-faqs.html" },
      { name: "XML Cheatsheet", link: "xml-cheatsheet.html" },
      { name: "XML Resources", link: "xml-resources.html" },
      { name: "XML Community", link: "xml-community.html" },
      { name: "XML Interview Questions", link: "xml-interview-questions.html" },
      { name: "XML Best Practices", link: "xml-best-practices.html" },
      { name: "XML Performance", link: "xml-performance.html" },
      { name: "XML Debugging", link: "xml-debugging.html" },
      { name: "XML Security", link: "xml-security.html" },
      { name: "XML Deployment", link: "xml-deployment.html" },
      { name: "XML Tools", link: "xml-tools.html" },
    ];
    sidebarMenu.innerHTML = "";

    xmlLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "xml-home.html";
  } else if (menu === "django") {
    sidebarTitle.textContent = "Django Tutorial";
    const djangoLinks = [
      { type: "heading", name: "Django Tutorial" },
      { name: "Django Home", link: "django-home.html" },
      { name: "Django Intro", link: "django-intro.html" },
      { name: "Django Installation", link: "django-installation.html" },
      { name: "Django Setup", link: "django-setup.html" },
      { name: "Django Models", link: "django-models.html" },
      { name: "Django Views", link: "django-views.html" },
      { name: "Django Templates", link: "django-templates.html" },
      { name: "Django Forms", link: "django-forms.html" },
      { name: "Django Admin", link: "django-admin.html" },
      { name: "Django Authentication", link: "django-authentication.html" },
      { name: "Django REST Framework", link: "django-rest-framework.html" },
      { name: "Django Deployment", link: "django-deployment.html" },
      { name: "Django Examples", link: "django-examples.html" },
      { name: "Django FAQs", link: "django-faqs.html" },
      { name: "Django Cheatsheet", link: "django-cheatsheet.html" },
      { name: "Django Resources", link: "django-resources.html" },
      { name: "Django Community", link: "django-community.html" },
      {
        name: "Django Interview Questions",
        link: "django-interview-questions.html",
      },
      { name: "Django Best Practices", link: "django-best-practices.html" },
      { name: "Django Performance", link: "django-performance.html" },
      { name: "Django Debugging", link: "django-debugging.html" },
      { name: "Django Security", link: "django-security.html" },
      { name: "Django Tools", link: "django-tools.html" },
      { name: "Django Plugins", link: "django-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    djangoLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "django-home.html";
  } else if (menu === "numpy") {
    sidebarTitle.textContent = "NumPy Tutorial";
    const numpyLinks = [
      { type: "heading", name: "NumPy Tutorial" },
      { name: "NumPy Home", link: "numpy-home.html" },
      { name: "NumPy Intro", link: "numpy-intro.html" },
      { name: "NumPy Installation", link: "numpy-installation.html" },
      { name: "NumPy Arrays", link: "numpy-arrays.html" },
      { name: "NumPy Data Types", link: "numpy-data-types.html" },
      { name: "NumPy Indexing", link: "numpy-indexing.html" },
      { name: "NumPy Slicing", link: "numpy-slicing.html" },
      {
        name: "NumPy Shape Manipulation",
        link: "numpy-shape-manipulation.html",
      },
      {
        name: "NumPy Mathematical Functions",
        link: "numpy-math-functions.html",
      },
      {
        name: "NumPy Statistical Functions",
        link: "numpy-stat-functions.html",
      },
      { name: "NumPy Linear Algebra", link: "numpy-linear-algebra.html" },
      { name: "NumPy Random", link: "numpy-random.html" },
      { name: "NumPy Examples", link: "numpy-examples.html" },
      { name: "NumPy FAQs", link: "numpy-faqs.html" },
      { name: "NumPy Cheatsheet", link: "numpy-cheatsheet.html" },
      { name: "NumPy Resources", link: "numpy-resources.html" },
      { name: "NumPy Community", link: "numpy-community.html" },
      {
        name: "NumPy Interview Questions",
        link: "numpy-interview-questions.html",
      },
      { name: "NumPy Best Practices", link: "numpy-best-practices.html" },
      { name: "NumPy Performance", link: "numpy-performance.html" },
      { name: "NumPy Debugging", link: "numpy-debugging.html" },
      { name: "NumPy Security", link: "numpy-security.html" },
      { name: "NumPy Tools", link: "numpy-tools.html" },
      { name: "NumPy Plugins", link: "numpy-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    numpyLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "numpy-home.html";
  } else if (menu === "pandas") {
    sidebarTitle.textContent = "Pandas Tutorial";
    const pandasLinks = [
      { type: "heading", name: "Pandas Tutorial" },
      { name: "Pandas Home", link: "pandas-home.html" },
      { name: "Pandas Intro", link: "pandas-intro.html" },
      { name: "Pandas Installation", link: "pandas-installation.html" },
      { name: "Pandas Series", link: "pandas-series.html" },
      { name: "Pandas DataFrames", link: "pandas-dataframes.html" },
      { name: "Pandas Indexing", link: "pandas-indexing.html" },
      { name: "Pandas Slicing", link: "pandas-slicing.html" },
      { name: "Pandas Data Cleaning", link: "pandas-data-cleaning.html" },
      {
        name: "Pandas Data Manipulation",
        link: "pandas-data-manipulation.html",
      },
      {
        name: "Pandas Data Visualization",
        link: "pandas-data-visualization.html",
      },
      { name: "Pandas GroupBy", link: "pandas-groupby.html" },
      { name: "Pandas Merging", link: "pandas-merging.html" },
      { name: "Pandas Time Series", link: "pandas-time-series.html" },
      { name: "Pandas Examples", link: "pandas-examples.html" },
      { name: "Pandas FAQs", link: "pandas-faqs.html" },
      { name: "Pandas Cheatsheet", link: "pandas-cheatsheet.html" },
      { name: "Pandas Resources", link: "pandas-resources.html" },
      { name: "Pandas Community", link: "pandas-community.html" },
      {
        name: "Pandas Interview Questions",
        link: "pandas-interview-questions.html",
      },
      { name: "Pandas Best Practices", link: "pandas-best-practices.html" },
      { name: "Pandas Performance", link: "pandas-performance.html" },
      { name: "Pandas Debugging", link: "pandas-debugging.html" },
      { name: "Pandas Security", link: "pandas-security.html" },
      { name: "Pandas Tools", link: "pandas-tools.html" },
    ];
    sidebarMenu.innerHTML = "";

    pandasLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "pandas-home.html";
  } else if (menu === "nodejs") {
    sidebarTitle.textContent = "Node.js Tutorial";
    const nodejsLinks = [
      { type: "heading", name: "Node.js Tutorial" },
      { name: "Node.js Home", link: "nodejs-home.html" },
      { name: "Node.js Intro", link: "nodejs-intro.html" },
      { name: "Node.js Installation", link: "nodejs-installation.html" },
      { name: "Node.js Modules", link: "nodejs-modules.html" },
      { name: "Node.js Events", link: "nodejs-events.html" },
      { name: "Node.js File System", link: "nodejs-file-system.html" },
      { name: "Node.js HTTP Module", link: "nodejs-http-module.html" },
      { name: "Node.js NPM", link: "nodejs-npm.html" },
      { name: "Node.js Express", link: "nodejs-express.html" },
      { name: "Node.js REST API", link: "nodejs-rest-api.html" },
      { name: "Node.js MongoDB", link: "nodejs-mongodb.html" },
      { name: "Node.js Authentication", link: "nodejs-authentication.html" },
      { name: "Node.js Deployment", link: "nodejs-deployment.html" },
      { name: "Node.js Examples", link: "nodejs-examples.html" },
      { name: "Node.js FAQs", link: "nodejs-faqs.html" },
      { name: "Node.js Cheatsheet", link: "nodejs-cheatsheet.html" },
      { name: "Node.js Resources", link: "nodejs-resources.html" },
      { name: "Node.js Community", link: "nodejs-community.html" },
      {
        name: "Node.js Interview Questions",
        link: "nodejs-interview-questions.html",
      },
      { name: "Node.js Best Practices", link: "nodejs-best-practices.html" },
      { name: "Node.js Performance", link: "nodejs-performance.html" },
      { name: "Node.js Debugging", link: "nodejs-debugging.html" },
      { name: "Node.js Security", link: "nodejs-security.html" },
      { name: "Node.js Tools", link: "nodejs-tools.html" },
    ];
    sidebarMenu.innerHTML = "";

    nodejsLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "nodejs-home.html";
  } else if (menu === "dsa") {
    sidebarTitle.textContent = "DSA Tutorial";
    const dsaLinks = [
      { type: "heading", name: "DSA Tutorial" },
      { name: "DSA Home", link: "dsa-home.html" },
      { name: "DSA Intro", link: "dsa-intro.html" },
      { name: "DSA Arrays", link: "dsa-arrays.html" },
      { name: "DSA Linked Lists", link: "dsa-linked-lists.html" },
      { name: "DSA Stacks", link: "dsa-stacks.html" },
      { name: "DSA Queues", link: "dsa-queues.html" },
      { name: "DSA Trees", link: "dsa-trees.html" },
      { name: "DSA Graphs", link: "dsa-graphs.html" },
      { name: "DSA Sorting", link: "dsa-sorting.html" },
      { name: "DSA Searching", link: "dsa-searching.html" },
      { name: "DSA Hashing", link: "dsa-hashing.html" },
      { name: "DSA Dynamic Programming", link: "dsa-dynamic-programming.html" },
      { name: "DSA Greedy Algorithms", link: "dsa-greedy-algorithms.html" },
      { name: "DSA Backtracking", link: "dsa-backtracking.html" },
      { name: "DSA Examples", link: "dsa-examples.html" },
      { name: "DSA FAQs", link: "dsa-faqs.html" },
      { name: "DSA Cheatsheet", link: "dsa-cheatsheet.html" },
      { name: "DSA Resources", link: "dsa-resources.html" },
      { name: "DSA Community", link: "dsa-community.html" },
      { name: "DSA Interview Questions", link: "dsa-interview-questions.html" },
      { name: "DSA Best Practices", link: "dsa-best-practices.html" },
      { name: "DSA Performance", link: "dsa-performance.html" },
      { name: "DSA Debugging", link: "dsa-debugging.html" },
      { name: "DSA Tools", link: "dsa-tools.html" },
    ];
    sidebarMenu.innerHTML = "";

    dsaLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "dsa-home.html";
  } else if (menu === "typescript") {
    sidebarTitle.textContent = "TypeScript Tutorial";
    const typescriptLinks = [
      { type: "heading", name: "TypeScript Tutorial" },
      { name: "TypeScript Home", link: "typescript-home.html" },
      { name: "TypeScript Intro", link: "typescript-intro.html" },
      { name: "TypeScript Installation", link: "typescript-installation.html" },
      { name: "TypeScript Types", link: "typescript-types.html" },
      { name: "TypeScript Variables", link: "typescript-variables.html" },
      { name: "TypeScript Functions", link: "typescript-functions.html" },
      { name: "TypeScript Classes", link: "typescript-classes.html" },
      { name: "TypeScript Interfaces", link: "typescript-interfaces.html" },
      { name: "TypeScript Generics", link: "typescript-generics.html" },
      { name: "TypeScript Modules", link: "typescript-modules.html" },
      { name: "TypeScript Decorators", link: "typescript-decorators.html" },
      { name: "TypeScript Examples", link: "typescript-examples.html" },
      { name: "TypeScript FAQs", link: "typescript-faqs.html" },
      { name: "TypeScript Cheatsheet", link: "typescript-cheatsheet.html" },
      { name: "TypeScript Resources", link: "typescript-resources.html" },
      { name: "TypeScript Community", link: "typescript-community.html" },
      {
        name: "TypeScript Interview Questions",
        link: "typescript-interview-questions.html",
      },
      {
        name: "TypeScript Best Practices",
        link: "typescript-best-practices.html",
      },
      { name: "TypeScript Performance", link: "typescript-performance.html" },
      { name: "TypeScript Debugging", link: "typescript-debugging.html" },
      { name: "TypeScript Security", link: "typescript-security.html" },
      { name: "TypeScript Tools", link: "typescript-tools.html" },
      { name: "TypeScript Plugins", link: "typescript-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    typescriptLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "typescript-home.html";
  } else if (menu === "angular") {
    sidebarTitle.textContent = "Angular Tutorial";
    const angularLinks = [
      { type: "heading", name: "Angular Tutorial" },
      { name: "Angular Home", link: "angular-home.html" },
      { name: "Angular Intro", link: "angular-intro.html" },
      { name: "Angular Installation", link: "angular-installation.html" },
      { name: "Angular Components", link: "angular-components.html" },
      { name: "Angular Directives", link: "angular-directives.html" },
      { name: "Angular Services", link: "angular-services.html" },
      { name: "Angular Routing", link: "angular-routing.html" },
      { name: "Angular Forms", link: "angular-forms.html" },
      { name: "Angular HTTP", link: "angular-http.html" },
      {
        name: "Angular State Management",
        link: "angular-state-management.html",
      },
      { name: "Angular Deployment", link: "angular-deployment.html" },
      { name: "Angular Examples", link: "angular-examples.html" },
      { name: "Angular FAQs", link: "angular-faqs.html" },
      { name: "Angular Cheatsheet", link: "angular-cheatsheet.html" },
      { name: "Angular Resources", link: "angular-resources.html" },
      { name: "Angular Community", link: "angular-community.html" },
      {
        name: "Angular Interview Questions",
        link: "angular-interview-questions.html",
      },
      { name: "Angular Best Practices", link: "angular-best-practices.html" },
      { name: "Angular Performance", link: "angular-performance.html" },
      { name: "Angular Debugging", link: "angular-debugging.html" },
      { name: "Angular Security", link: "angular-security.html" },
      { name: "Angular Tools", link: "angular-tools.html" },
      { name: "Angular Plugins", link: "angular-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    angularLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "angular-home.html";
  } else if (menu === "git") {
    sidebarTitle.textContent = "Git Tutorial";
    const gitLinks = [
      { type: "heading", name: "Git Tutorial" },
      { name: "Git Home", link: "git-home.html" },
      { name: "Git Intro", link: "git-intro.html" },
      { name: "Git Installation", link: "git-installation.html" },
      { name: "Git Basics", link: "git-basics.html" },
      { name: "Git Branching", link: "git-branching.html" },
      { name: "Git Merging", link: "git-merging.html" },
      { name: "Git Remote", link: "git-remote.html" },
      { name: "Git Stashing", link: "git-stashing.html" },
      { name: "Git Rebasing", link: "git-rebasing.html" },
      { name: "Git Tagging", link: "git-tagging.html" },
      { name: "Git Hooks", link: "git-hooks.html" },
      { name: "Git Examples", link: "git-examples.html" },
      { name: "Git FAQs", link: "git-faqs.html" },
      { name: "Git Cheatsheet", link: "git-cheatsheet.html" },
      { name: "Git Resources", link: "git-resources.html" },
      { name: "Git Community", link: "git-community.html" },
      { name: "Git Interview Questions", link: "git-interview-questions.html" },
      { name: "Git Best Practices", link: "git-best-practices.html" },
      { name: "Git Performance", link: "git-performance.html" },
      { name: "Git Debugging", link: "git-debugging.html" },
      { name: "Git Security", link: "git-security.html" },
      { name: "Git Tools", link: "git-tools.html" },
      { name: "Git Plugins", link: "git-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    gitLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "git-home.html";
  } else if (menu === "postgresql") {
    sidebarTitle.textContent = "PostgreSQL Tutorial";
    const postgresqlLinks = [
      { type: "heading", name: "PostgreSQL Tutorial" },
      { name: "PostgreSQL Home", link: "postgresql-home.html" },
      { name: "PostgreSQL Intro", link: "postgresql-intro.html" },
      { name: "PostgreSQL Installation", link: "postgresql-installation.html" },
      { name: "PostgreSQL Basics", link: "postgresql-basics.html" },
      { name: "PostgreSQL Data Types", link: "postgresql-data-types.html" },
      { name: "PostgreSQL Tables", link: "postgresql-tables.html" },
      { name: "PostgreSQL Indexes", link: "postgresql-indexes.html" },
      { name: "PostgreSQL Queries", link: "postgresql-queries.html" },
      { name: "PostgreSQL Joins", link: "postgresql-joins.html" },
      { name: "PostgreSQL Views", link: "postgresql-views.html" },
      { name: "PostgreSQL Functions", link: "postgresql-functions.html" },
      { name: "PostgreSQL Triggers", link: "postgresql-triggers.html" },
      { name: "PostgreSQL Transactions", link: "postgresql-transactions.html" },
      { name: "PostgreSQL Examples", link: "postgresql-examples.html" },
      { name: "PostgreSQL FAQs", link: "postgresql-faqs.html" },
      { name: "PostgreSQL Cheatsheet", link: "postgresql-cheatsheet.html" },
      { name: "PostgreSQL Resources", link: "postgresql-resources.html" },
      { name: "PostgreSQL Community", link: "postgresql-community.html" },
      {
        name: "PostgreSQL Interview Questions",
        link: "postgresql-interview-questions.html",
      },
      {
        name: "PostgreSQL Best Practices",
        link: "postgresql-best-practices.html",
      },
      { name: "PostgreSQL Performance", link: "postgresql-performance.html" },
      { name: "PostgreSQL Debugging", link: "postgresql-debugging.html" },
      { name: "PostgreSQL Security", link: "postgresql-security.html" },
      { name: "PostgreSQL Tools", link: "postgresql-tools.html" },
    ];
    sidebarMenu.innerHTML = "";

    postgresqlLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "postgresql-home.html";
  } else if (menu === "mongodb") {
    sidebarTitle.textContent = "MongoDB Tutorial";
    const mongodbLinks = [
      { type: "heading", name: "MongoDB Tutorial" },
      { name: "MongoDB Home", link: "mongodb-home.html" },
      { name: "MongoDB Intro", link: "mongodb-intro.html" },
      { name: "MongoDB Installation", link: "mongodb-installation.html" },
      { name: "MongoDB Basics", link: "mongodb-basics.html" },
      { name: "MongoDB CRUD", link: "mongodb-crud.html" },
      { name: "MongoDB Indexes", link: "mongodb-indexes.html" },
      { name: "MongoDB Aggregation", link: "mongodb-aggregation.html" },
      { name: "MongoDB Transactions", link: "mongodb-transactions.html" },
      { name: "MongoDB Security", link: "mongodb-security.html" },
      { name: "MongoDB Performance", link: "mongodb-performance.html" },
      { name: "MongoDB Examples", link: "mongodb-examples.html" },
      { name: "MongoDB FAQs", link: "mongodb-faqs.html" },
      { name: "MongoDB Cheatsheet", link: "mongodb-cheatsheet.html" },
      { name: "MongoDB Resources", link: "mongodb-resources.html" },
      { name: "MongoDB Community", link: "mongodb-community.html" },
      {
        name: "MongoDB Interview Questions",
        link: "mongodb-interview-questions.html",
      },
      { name: "MongoDB Best Practices", link: "mongodb-best-practices.html" },
      { name: "MongoDB Debugging", link: "mongodb-debugging.html" },
      { name: "MongoDB Tools", link: "mongodb-tools.html" },
      { name: "MongoDB Plugins", link: "mongodb-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    mongodbLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "mongodb-home.html";
  } else if (menu === "asp") {
    sidebarTitle.textContent = "ASP Tutorial";
    const aspLinks = [
      { type: "heading", name: "ASP Tutorial" },
      { name: "ASP Home", link: "asp-home.html" },
      { name: "ASP Intro", link: "asp-intro.html" },
      { name: "ASP Installation", link: "asp-installation.html" },
      { name: "ASP Basics", link: "asp-basics.html" },
      { name: "ASP Controls", link: "asp-controls.html" },
      { name: "ASP Data Binding", link: "asp-data-binding.html" },
      { name: "ASP State Management", link: "asp-state-management.html" },
      { name: "ASP Security", link: "asp-security.html" },
      { name: "ASP Performance", link: "asp-performance.html" },
      { name: "ASP Examples", link: "asp-examples.html" },
      { name: "ASP FAQs", link: "asp-faqs.html" },
      { name: "ASP Cheatsheet", link: "asp-cheatsheet.html" },
      { name: "ASP Resources", link: "asp-resources.html" },
      { name: "ASP Community", link: "asp-community.html" },
      { name: "ASP Interview Questions", link: "asp-interview-questions.html" },
      { name: "ASP Best Practices", link: "asp-best-practices.html" },
      { name: "ASP Debugging", link: "asp-debugging.html" },
      { name: "ASP Tools", link: "asp-tools.html" },
      { name: "ASP Plugins", link: "asp-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    aspLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "asp-home.html";
  } else if (menu === "ai") {
    sidebarTitle.textContent = "AI Tutorial";
    const aiLinks = [
      { type: "heading", name: "AI Tutorial" },
      { name: "AI Home", link: "ai-home.html" },
      { name: "AI Intro", link: "ai-intro.html" },
      { name: "AI Basics", link: "ai-basics.html" },
      { name: "AI Machine Learning", link: "ai-machine-learning.html" },
      { name: "AI Deep Learning", link: "ai-deep-learning.html" },
      { name: "AI Neural Networks", link: "ai-neural-networks.html" },
      { name: "AI Natural Language Processing", link: "ai-nlp.html" },
      { name: "AI Computer Vision", link: "ai-computer-vision.html" },
      {
        name: "AI Reinforcement Learning",
        link: "ai-reinforcement-learning.html",
      },
      { name: "AI Examples", link: "ai-examples.html" },
      { name: "AI FAQs", link: "ai-faqs.html" },
      { name: "AI Cheatsheet", link: "ai-cheatsheet.html" },
      { name: "AI Resources", link: "ai-resources.html" },
      { name: "AI Community", link: "ai-community.html" },
      { name: "AI Interview Questions", link: "ai-interview-questions.html" },
      { name: "AI Best Practices", link: "ai-best-practices.html" },
      { name: "AI Performance", link: "ai-performance.html" },
      { name: "AI Debugging", link: "ai-debugging.html" },
      { name: "AI Tools", link: "ai-tools.html" },
      { name: "AI Plugins", link: "ai-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    aiLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "ai-home.html";
  } else if (menu === "r") {
    sidebarTitle.textContent = "R Tutorial";
    const rLinks = [
      { type: "heading", name: "R Tutorial" },
      { name: "R Home", link: "r-home.html" },
      { name: "R Intro", link: "r-intro.html" },
      { name: "R Installation", link: "r-installation.html" },
      { name: "R Basics", link: "r-basics.html" },
      { name: "R Data Types", link: "r-data-types.html" },
      { name: "R Variables", link: "r-variables.html" },
      { name: "R Operators", link: "r-operators.html" },
      { name: "R Functions", link: "r-functions.html" },
      { name: "R Data Frames", link: "r-data-frames.html" },
      { name: "R Data Visualization", link: "r-data-visualization.html" },
      { name: "R Machine Learning", link: "r-machine-learning.html" },
      { name: "R Examples", link: "r-examples.html" },
      { name: "R FAQs", link: "r-faqs.html" },
      { name: "R Cheatsheet", link: "r-cheatsheet.html" },
      { name: "R Resources", link: "r-resources.html" },
      { name: "R Community", link: "r-community.html" },
      { name: "R Interview Questions", link: "r-interview-questions.html" },
      { name: "R Best Practices", link: "r-best-practices.html" },
      { name: "R Performance", link: "r-performance.html" },
      { name: "R Debugging", link: "r-debugging.html" },
      { name: "R Tools", link: "r-tools.html" },
      { name: "R Plugins", link: "r-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    rLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "r-home.html";
  } else if (menu === "go") {
    sidebarTitle.textContent = "Go Tutorial";
    const goLinks = [
      { type: "heading", name: "Go Tutorial" },
      { name: "Go Home", link: "go-home.html" },
      { name: "Go Intro", link: "go-intro.html" },
      { name: "Go Installation", link: "go-installation.html" },
      { name: "Go Basics", link: "go-basics.html" },
      { name: "Go Data Types", link: "go-data-types.html" },
      { name: "Go Variables", link: "go-variables.html" },
      { name: "Go Operators", link: "go-operators.html" },
      { name: "Go Functions", link: "go-functions.html" },
      { name: "Go Structs", link: "go-structs.html" },
      { name: "Go Interfaces", link: "go-interfaces.html" },
      { name: "Go Concurrency", link: "go-concurrency.html" },
      { name: "Go Examples", link: "go-examples.html" },
      { name: "Go FAQs", link: "go-faqs.html" },
      { name: "Go Cheatsheet", link: "go-cheatsheet.html" },
      { name: "Go Resources", link: "go-resources.html" },
      { name: "Go Community", link: "go-community.html" },
      { name: "Go Interview Questions", link: "go-interview-questions.html" },
      { name: "Go Best Practices", link: "go-best-practices.html" },
      { name: "Go Performance", link: "go-performance.html" },
      { name: "Go Debugging", link: "go-debugging.html" },
      { name: "Go Tools", link: "go-tools.html" },
      { name: "Go Plugins", link: "go-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    goLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "go-home.html";
  } else if (menu === "kotlin") {
    sidebarTitle.textContent = "Kotlin Tutorial";
    const kotlinLinks = [
      { type: "heading", name: "Kotlin Tutorial" },
      { name: "Kotlin Home", link: "kotlin-home.html" },
      { name: "Kotlin Intro", link: "kotlin-intro.html" },
      { name: "Kotlin Installation", link: "kotlin-installation.html" },
      { name: "Kotlin Basics", link: "kotlin-basics.html" },
      { name: "Kotlin Data Types", link: "kotlin-data-types.html" },
      { name: "Kotlin Variables", link: "kotlin-variables.html" },
      { name: "Kotlin Operators", link: "kotlin-operators.html" },
      { name: "Kotlin Functions", link: "kotlin-functions.html" },
      { name: "Kotlin Classes", link: "kotlin-classes.html" },
      { name: "Kotlin Inheritance", link: "kotlin-inheritance.html" },
      { name: "Kotlin Interfaces", link: "kotlin-interfaces.html" },
      { name: "Kotlin Examples", link: "kotlin-examples.html" },
      { name: "Kotlin FAQs", link: "kotlin-faqs.html" },
      { name: "Kotlin Cheatsheet", link: "kotlin-cheatsheet.html" },
      { name: "Kotlin Resources", link: "kotlin-resources.html" },
      { name: "Kotlin Community", link: "kotlin-community.html" },
      {
        name: "Kotlin Interview Questions",
        link: "kotlin-interview-questions.html",
      },
      { name: "Kotlin Best Practices", link: "kotlin-best-practices.html" },
      { name: "Kotlin Performance", link: "kotlin-performance.html" },
      { name: "Kotlin Debugging", link: "kotlin-debugging.html" },
      { name: "Kotlin Tools", link: "kotlin-tools.html" },
      { name: "Kotlin Plugins", link: "kotlin-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    kotlinLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "kotlin-home.html";
  } else if (menu === "saas") {
    sidebarTitle.textContent = "SaaS Tutorial";
    const saasLinks = [
      { type: "heading", name: "SaaS Tutorial" },
      { name: "SaaS Home", link: "saas-home.html" },
      { name: "SaaS Intro", link: "saas-intro.html" },
      { name: "SaaS Basics", link: "saas-basics.html" },
      { name: "SaaS Architecture", link: "saas-architecture.html" },
      { name: "SaaS Development", link: "saas-development.html" },
      { name: "SaaS Deployment", link: "saas-deployment.html" },
      { name: "SaaS Security", link: "saas-security.html" },
      { name: "SaaS Performance", link: "saas-performance.html" },
      { name: "SaaS Examples", link: "saas-examples.html" },
      { name: "SaaS FAQs", link: "saas-faqs.html" },
      { name: "SaaS Cheatsheet", link: "saas-cheatsheet.html" },
      { name: "SaaS Resources", link: "saas-resources.html" },
      { name: "SaaS Community", link: "saas-community.html" },
      {
        name: "SaaS Interview Questions",
        link: "saas-interview-questions.html",
      },
      { name: "SaaS Best Practices", link: "saas-best-practices.html" },
      { name: "SaaS Debugging", link: "saas-debugging.html" },
      { name: "SaaS Tools", link: "saas-tools.html" },
      { name: "SaaS Plugins", link: "saas-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    saasLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "saas-home.html";
  }
  if (menu === "vue") {
    sidebarTitle.textContent = "Vue Tutorial";
    const vueLinks = [
      { type: "heading", name: "Vue Tutorial" },
      { name: "Vue Home", link: "vue-home.html" },
      { name: "Vue Intro", link: "vue-intro.html" },
      { name: "Vue Installation", link: "vue-installation.html" },
      { name: "Vue Basics", link: "vue-basics.html" },
      { name: "Vue Components", link: "vue-components.html" },
      { name: "Vue Directives", link: "vue-directives.html" },
      { name: "Vue Routing", link: "vue-routing.html" },
      { name: "Vue State Management", link: "vue-state-management.html" },
      { name: "Vue Examples", link: "vue-examples.html" },
      { name: "Vue FAQs", link: "vue-faqs.html" },
      { name: "Vue Cheatsheet", link: "vue-cheatsheet.html" },
      { name: "Vue Resources", link: "vue-resources.html" },
      { name: "Vue Community", link: "vue-community.html" },
      { name: "Vue Interview Questions", link: "vue-interview-questions.html" },
      { name: "Vue Best Practices", link: "vue-best-practices.html" },
      { name: "Vue Performance", link: "vue-performance.html" },
      { name: "Vue Debugging", link: "vue-debugging.html" },
      { name: "Vue Tools", link: "vue-tools.html" },
      { name: "Vue Plugins", link: "vue-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    vueLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "vue-home.html";
  } else if (menu === "genai") {
    sidebarTitle.textContent = "GenAI Tutorial";
    const genaiLinks = [
      { type: "heading", name: "GenAI Tutorial" },
      { name: "GenAI Home", link: "genai-home.html" },
      { name: "GenAI Intro", link: "genai-intro.html" },
      { name: "GenAI Basics", link: "genai-basics.html" },
      { name: "GenAI Models", link: "genai-models.html" },
      { name: "GenAI Applications", link: "genai-applications.html" },
      { name: "GenAI Examples", link: "genai-examples.html" },
      { name: "GenAI FAQs", link: "genai-faqs.html" },
      { name: "GenAI Cheatsheet", link: "genai-cheatsheet.html" },
      { name: "GenAI Resources", link: "genai-resources.html" },
      { name: "GenAI Community", link: "genai-community.html" },
      {
        name: "GenAI Interview Questions",
        link: "genai-interview-questions.html",
      },
      { name: "GenAI Best Practices", link: "genai-best-practices.html" },
      { name: "GenAI Performance", link: "genai-performance.html" },
      { name: "GenAI Debugging", link: "genai-debugging.html" },
      { name: "GenAI Tools", link: "genai-tools.html" },
      { name: "GenAI Plugins", link: "genai-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    genaiLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "genai-home.html";
  } else if (menu === "script") {
    sidebarTitle.textContent = "Script Tutorial";
    const scriptLinks = [
      { type: "heading", name: "Script Tutorial" },
      { name: "Script Home", link: "script-home.html" },
      { name: "Script Intro", link: "script-intro.html" },
      { name: "Script Basics", link: "script-basics.html" },
      { name: "Script Variables", link: "script-variables.html" },
      { name: "Script Functions", link: "script-functions.html" },
      { name: "Script Examples", link: "script-examples.html" },
      { name: "Script FAQs", link: "script-faqs.html" },
      { name: "Script Cheatsheet", link: "script-cheatsheet.html" },
      { name: "Script Resources", link: "script-resources.html" },
      { name: "Script Community", link: "script-community.html" },
      {
        name: "Script Interview Questions",
        link: "script-interview-questions.html",
      },
      { name: "Script Best Practices", link: "script-best-practices.html" },
      { name: "Script Performance", link: "script-performance.html" },
      { name: "Script Debugging", link: "script-debugging.html" },
      { name: "Script Tools", link: "script-tools.html" },
      { name: "Script Plugins", link: "script-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    scriptLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "script-home.html";
  } else if (menu === "cybersecurity") {
    sidebarTitle.textContent = "Cybersecurity Tutorial";
    const cybersecurityLinks = [
      { type: "heading", name: "Cybersecurity Tutorial" },
      { name: "Cybersecurity Home", link: "cybersecurity-home.html" },
      { name: "Cybersecurity Intro", link: "cybersecurity-intro.html" },
      { name: "Cybersecurity Basics", link: "cybersecurity-basics.html" },
      { name: "Cybersecurity Threats", link: "cybersecurity-threats.html" },
      { name: "Cybersecurity Tools", link: "cybersecurity-tools.html" },
      { name: "Cybersecurity Examples", link: "cybersecurity-examples.html" },
      { name: "Cybersecurity FAQs", link: "cybersecurity-faqs.html" },
      {
        name: "Cybersecurity Cheatsheet",
        link: "cybersecurity-cheatsheet.html",
      },
      { name: "Cybersecurity Resources", link: "cybersecurity-resources.html" },
      { name: "Cybersecurity Community", link: "cybersecurity-community.html" },
      {
        name: "Cybersecurity Interview Questions",
        link: "cybersecurity-interview-questions.html",
      },
      {
        name: "Cybersecurity Best Practices",
        link: "cybersecurity-best-practices.html",
      },
      {
        name: "Cybersecurity Performance",
        link: "cybersecurity-performance.html",
      },
      { name: "Cybersecurity Debugging", link: "cybersecurity-debugging.html" },
      { name: "Cybersecurity Plugins", link: "cybersecurity-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    cybersecurityLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "cybersecurity-home.html";
  } else if (menu === "datascience") {
    sidebarTitle.textContent = "Data Science Tutorial";
    const datascienceLinks = [
      { type: "heading", name: "Data Science Tutorial" },
      { name: "Data Science Home", link: "datascience-home.html" },
      { name: "Data Science Intro", link: "datascience-intro.html" },
      { name: "Data Science Basics", link: "datascience-basics.html" },
      { name: "Data Science Tools", link: "datascience-tools.html" },
      { name: "Data Science Examples", link: "datascience-examples.html" },
      { name: "Data Science FAQs", link: "datascience-faqs.html" },
      { name: "Data Science Cheatsheet", link: "datascience-cheatsheet.html" },
      { name: "Data Science Resources", link: "datascience-resources.html" },
      { name: "Data Science Community", link: "datascience-community.html" },
      {
        name: "Data Science Interview Questions",
        link: "datascience-interview-questions.html",
      },
      {
        name: "Data Science Best Practices",
        link: "datascience-best-practices.html",
      },
      {
        name: "Data Science Performance",
        link: "datascience-performance.html",
      },
      { name: "Data Science Debugging", link: "datascience-debugging.html" },
      { name: "Data Science Plugins", link: "datascience-plugins.html" },
    ];
    sidebarMenu.innerHTML = "";

    datascienceLinks.forEach((item) => {
      if (item.type === "heading") {
        const heading = document.createElement("h3");
        heading.textContent = item.name;
        heading.classList.add("sidebar-heading");
        sidebarMenu.appendChild(heading);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="contentFrame">${item.name}</a>`;
        sidebarMenu.appendChild(li);
      }
    });

    iframe.src = "datascience-home.html";
  }
}
