presentar = () => {
    var container = document.getElementsByTagName("container");
    var section = document.getElementsByTagName("section");
    var div = document.getElementsByTagName("div");
    var h1 = document.getElementsByTagName("h1");
    var img = document.getElementsByTagName('img');
    var h4 = document.getElementsByTagName("h4");
    var legend = document.getElementsByTagName("legend");
    var button = document.getElementsByTagName("button");
    var a = document.getElementsByTagName("a");
    var ol = document.getElementsByTagName("ol");
    var li = document.getElementsByTagName("li");
    var ul = document.getElementsByTagName("ul");
    var table = document.getElementsByTagName("table");
    var tr = document.getElementsByTagName("tr");
    var th = document.getElementsByTagName("th");
    var p = document.getElementsByTagName("p");
    var span = document.getElementsByTagName("span");
    alert("Existen: \n" +
            "-"+container.length + " container\n" + 
            "-"+section.length + " section\n" +
            "-"+div.length + " div\n" +
            "-"+h1.length + " h1\n" + 
            "-"+h4.length + " h4\n" +
            "-"+img.length + " img\n" +
            "-"+legend.length + " legend\n" + 
            "-"+button.length + " button\n" +
            "-"+a.length + " a\n" + 
            "-"+p.length + " p\n"+
            "-"+span.length + " span\n"+
            "-"+ol.length + " ol\n" +
            "-"+li.length + " li\n" + 
            "-"+ul.length + " ul\n" +
            "-"+table.length + " table\n" + 
            "-"+tr.length + " tr\n" +
            "-"+th.length + " th");
        
    for (var i = 0; i < container.length; i++) {
        container[i].style.border = "2px solid #DB5461";
    }
    for (var i = 0; i < section.length; i++) {
        section[i].style.border = "2px solid #ECFFB0";
    }
    for (var i = 0; i < h1.length; i++) {
        h1[i].style.border = "2px solid #8AA29E";
    }
    for (var i = 0; i < img.length; i++) {
        img[i].style.border = "2px solid #54577C";
    }
    for (var i = 0; i < h4.length; i++) {
        h4[i].style.border = "2px solid #F25F5C";
    }
    for (var i = 0; i < button.length; i++) {
        button[i].style.border = "2px solid #235789";
    }
    for (var i = 0; i < a.length; i++) {
        a[i].style.border = "2px solid #C1292E";
    }
    for (var i = 0; i < ol.length; i++) {
        ol[i].style.border = "2px solid #6F975";
    }
    for (var i = 0; i < li.length; i++) {
        li[i].style.border = "2px solid #BD8B9C";
    }
    for (var i = 0; i < ul.length; i++) {
        ul[i].style.border = "2px solid #AF125A";
    }
    for (var i = 0; i < table.length; i++) {
        table[i].style.border = "2px solid #DB9D47";
    }
    for (var i = 0; i < tr.length; i++) {
        tr[i].style.border = "2px solid #410B13";
    }
    for (var i = 0; i < th.length; i++) {
        th[i].style.border = "2px solid #F0C808";
    }
}