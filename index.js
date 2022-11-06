


dom()
function dom(){
    var pronoun = ['the','our', 'they', 'we', 'us', 'them', 'my'];

    var adj = ['great', 'big', 'handsome', 'happy', 'high', 'long'];

    var noun = ['jogger','racoon', 'bird', 'police', 'person'];

    var end = ['.com', '.net', '.org', '.co']

    let concatenacion = [pronoun, adj, noun, end]; //concatenacion.lenght

    let domain = "";

    for (let i = 0; i < concatenacion.length; i++){
        let anotherNumber = Math.floor(Math.random() * concatenacion[i].length)
        domain = domain + concatenacion[i][anotherNumber];
    }

    console.log(domain)

    document.getElementById("generator").innerText = domain;
    
}
    


