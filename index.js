// create function submitData
function submitData(string1, string2) {
    const userDataObj = {
        name: string1,
        email: string2
    };
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userDataObj)
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        appendToDom(data)
    })
    .catch(error => errorDom(error));
};

//submitData('Dave', 'fakeemail@whocares.com');

//create appendToDom fuinction 
function appendToDom (user) {
    let post = document.createElement('h1');
    post.innerHTML = `${user.id}`;
    console.log(`${user.id}`);
    console.log(document.querySelector('h1'));
    return document.querySelector('body').appendChild(post);
};

//create errorDom function
function errorDom (error) {
    let errorMessage = document.createElement('h1');
    errorMessage.innerHTML = `${error.message}`;
    return document.querySelector('body').appendChild(errorMessage);
};


