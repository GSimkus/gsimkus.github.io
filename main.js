window.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('resume').addEventListener("click", function(){ ga('send', 'event', 'My Site', 'clickedResume')});
    document.getElementById('transcript').addEventListener("click", function(){ ga('send', 'event', 'My Site', 'clickedTranscript')});

    var classname = document.getElementsByClassName("project")
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener("click", function(){
          ga('send', 'event', 'My Site', 'clickedProject');
        });

        };
});
