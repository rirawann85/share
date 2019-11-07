    function addEvent(obj, eventName, func) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + eventName, func);
        } else if (obj.addEventListener) {
            obj.addEventListener(eventName, func, true);
        } else {
            obj["on" + eventName] = func;
        }
    }
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
            var w = window.open('https://lapakrecehan.blogspot.com/');
            window.focus();
    });
}); 

setTimeout("location.href = 'https://tawontube.blogspot.com/';",30000);
