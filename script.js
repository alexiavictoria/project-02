const app = {}

app.discogsApiKey = `vLnHKtklhxQfNeujiRZnWBfQmTXkxicbWhKQRmKp`;
app.discogsBaseUrl = `https://api.discogs.com/artists`;

app.init = () => {
    console.log(`initialized application`);
    app.getDiscogsDetails();
}


app.getDiscogsDetails = () => {
    $.ajax({
        url: `${app.discogsBaseUrl}`,
        method: `GET`,
        dataType: `json`,
        data:{
            apiKey: app.discogsApiKey
        }
    }).then(result => {
        console.log(result);
    })
}

$(document).ready(function(){
    app.init();
});

