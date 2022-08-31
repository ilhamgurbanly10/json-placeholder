
const result = document.querySelector("#result");
const url = "https://ilhamgurbanly10.github.io/json-placeholder/users";

// http://localhost:3000/users


function requestAll() {
    fetch(""+url+"")
    .then(responses => responses.json())
    .then((responses) => { 
        console.log(responses); 
        for (const response of responses) {
            for (const key in response) {
                result.innerHTML += key + ": " + response[key] + "<br>";
            }
        }
        
    })
}


function request() {
    fetch(""+url+"/1")
    .then(responses => responses.json())
    .then((responses) => { 
        console.log(responses); 
        result.innerHTML = "";
        for (const key in responses) {
            result.innerHTML += key + ": " + responses[key] + "<br>";
        }
        
    })
}


function edit() {
    fetch(''+url+'/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 2,
            name: 'Johna',
            surname: 'Doe',
            age: "25",
            companyId: 2,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(responses => responses.json())
        .then((responses) => { 
            console.log(responses); 
            for (const key in responses) {
                result.innerHTML += key + ": " + responses[key] + "<br>";
            }
            
        })
}


function add() {

    fetch(''+url+'', {
        method: 'POST',
        body: JSON.stringify({
            name: 'Aysu',
            surname: 'Gurbanly',
            age: "19",
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((responses) => responses.json())
        .then((responses) => { 
            console.log(responses); 
            result.innerHTML = "";
            for (const key in responses) {
                result.innerHTML += key + ": " + responses[key] + "<br>";
            }
            
        })

}


function remove() {
    fetch(''+url+'/6', {
        method: 'DELETE',
    });
}





