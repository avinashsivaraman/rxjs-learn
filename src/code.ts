import { from } from "rxjs/Observable/from";
import "rxjs/add/operator/pluck";

const EmployeeList = [
    {
        name: 'Avinash Sivaraman',
        id: '1231',
        phone: '838383838'
    },
    {
        name: 'Abishek Sivaraman',
        id: '1232',
        phone: '8389383838'
    },
    {
        name: 'Avinash Den',
        id: '1233',
        phone: '8383983838'
    }

]


from(EmployeeList)
    .pluck('name')
    .subscribe((e:any) => addItem(e))


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}