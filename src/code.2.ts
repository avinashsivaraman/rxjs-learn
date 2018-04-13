import { Subject } from 'rxjs/Subject';

var subject = new Subject();
var subjectBus = new Subject();

subject.subscribe(
    (data: any) => addItem('Observer 1  :'+data)
)
subject.next(' Hey I am sending a message');

var subject2 = subject.subscribe(
    (data: any) => addItem('Observer 2  :'+data)
)

subject.next(' Did you got this message');

var subject2 = subjectBus.subscribe(
    (data: any) => addItem('Observer 2  :'+data)
)

subjectBus.next(' Subject Bus !!!! ');

subject.next(' Did you got this message 2');

subject2.unsubscribe();
subject2.unsubscribe();


subjectBus.next(' Subject Bus 2 !!!! ');

subject.next(' Did you got this message 3');
subjectBus.next(' Subject Bus 2 !!!! ');

subject.next(' Did you got this message 3');
subjectBus.next(' Subject Bus 2 !!!! ');

subject.next(' Did you got this message 3');
subjectBus.next(' Subject Bus 2 !!!! ');

subject.next(' Did you got this message 3');
subjectBus.next(' Subject Bus 2 !!!! ');

subject.next(' Did you got this message 3');



function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}