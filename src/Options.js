exports.options = {
    baseUrl : "https://api.trello.com/1/",
    boardsUrl : "members/roqueperalta2/boards?",
    apiKey :  "key=e327c3e08523d8b0c0efca2189a7b372",
    token : "token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147",
    idNameFields : "fields=name,id",
    listFields : "lists=open&list_fields=id,name",
    listUrl : "boards/",
    cardFields : "/cards?fields=id,name,desc",
    cardsUrl : "lists/",
    and: "&"
}

exports.getRequest = function(url) {
    fetch('https://mywebsite.com/endpoint/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        })
    })
}