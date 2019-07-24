  document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, {});
  });

  document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {});
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {});
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

  function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("elementoTitle").textContent = "Name S.";
    } else {
      document.getElementById("elementoTitle").textContent = "Name Surname";
    }
  }
  
  var x = window.matchMedia("(max-width: 370px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes 