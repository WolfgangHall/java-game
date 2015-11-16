function incrementIndex() {
 index += 1;
} 

var addEvent = window.addEventListener ? function (elem, type, method) {
 elem.addEventListener(type, method, false);
} : function (elem, type, method) {
 elem.attachEvent('on' + type, method);
};

addEvent(poke-pic[0], 'click', incrementIndex);