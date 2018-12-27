
function openTab(evt, tabform) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('btn-tab-link');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabform).style.display = 'block';
    evt.currentTarget.className += ' active';
}
document.getElementById("defaultOpen").click();
