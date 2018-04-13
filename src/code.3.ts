import { ReplaySubject } from 'rxjs/ReplaySubject';


// There are three types of subjects
// ReplaySubject, AsyncSubject and BehaviourSubject

//BehaviousSubject
// var subject =  new BehviourSubject('First')

// This subject will retain the last emitted value in the message bus. If there is any new subscription, The observer will get the latest message

//AsyncSubject
// var subject = new AsyncSubject()
// The observer will be called only at the completion of subject with last value in the bus. The observers are not notified until the subject is completed

// ReplaySubject
// The subject with extra funtionailty of remembering how many message the subject has to remember or how much time subject have to remember given number of message




var subject = new ReplaySubject(30, 2000);

subject.subscribe(
    (data: any) => addItem('Observer 1  :'+data)
)
subject.next(' Hey I am sending a message');

subject.next(' Did you got this message');

subject.next(' Did you got this message 2');

var i = 2
var interval = setInterval(() => subject.next(' Did you got this message' + i++), 1000)


setTimeout(() => {
    var subject2 = subject.subscribe(
        (data: any) => addItem('Observer 2  :'+data)
    )
}, 4000)


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}