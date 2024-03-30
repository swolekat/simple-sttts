let apiToken;


window.addEventListener('onWidgetLoad', function (obj) {
    apiToken = obj.detail.channel.apiToken;
    setTimeout(() => {
        document.getElementById('api-id').innerHTML = apiToken;
    }, 1000);
});
