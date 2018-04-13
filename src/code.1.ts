import { Observable } from 'rxjs/Observable';

// There are mulitple way to create an observable.. But this the basic way
var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!');
        setInterval(() => observer.next('Hello buddy'), 2000);
    } catch(e) {
        observer.error(e);
    }
});

//Observer should subscribe to the observable to get the event from observable
//There are three parameters to the subscribe function
//onNext, onError, onComplete
var observer1 = observable.subscribe(
    (x: any) =>  addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);

//Any observer can unsubscribe from the observable by 
// calling the unsubscribe function
setTimeout(() =>  observer1.unsubscribe(), 6001)


//There can be multiple observer for same observable 
// and they are created by same methods
var observer2 = observable.subscribe(
    (x: any) =>  addItem(x)
)

//observer2 will continue to receive update from
// observable, until it unsubscribe from it. In case,
// If we need to keep this observer in sync with some 
// other observer. We should create a parent-child 
// relationship by adding this observer to the parent 
// observer

observer1.add(observer2);


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}