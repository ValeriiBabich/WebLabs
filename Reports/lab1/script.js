function openPart(evt, partname) {
    var i, tabcontent, part;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    part = document.getElementsByClassName("part");
    for (i = 0; i < part.length; i++) {
      part[i].className = part[i].className.replace(" active", "");
    }
    document.getElementById(partname).style.display = "block";
    evt.currentTarget.className += " active";
  }