function entrys()
{
    var l = document.getElementById('latitude').value;
    var latitude = parseFloat(l);
    var lg = document.getElementById('longitude').value;
    var longitude = parseFloat(lg);
    var number = document.getElementById('number').value;
    var status = document.getElementById('status').value;
    var boothnum = parseInt(number);
    console.log('boothnum');
    var title = document.getElementById('title').value;

    if(entrys == "")
    {
        window.alert('Please Fill in the data');
    }
    else
    {
        firebase.database().ref('LoadPlace/' + number).set({
            l : latitude,
            lg : longitude,
            number : boothnum,
            status : status,
            title: title
        });
        window.alert('Successfully Sent!');
        document.getElementById('latitude').value = "";
        document.getElementById('longitude').value = "";
        document.getElementById('number').value = "";
        document.getElementById('status').value = "";
        document.getElementById('title').value = "";
    }
}