let mobileValue = document.body.querySelector('.mobile-value');
let proxyValue = document.body.querySelector('.proxy-value');

//get ip adress
async function getMyip(){
    let myIp = await (await fetch('https://api.ipify.org?format=json')).json();
    document.body.querySelector('.user-ip-value').innerHTML = myIp.ip;
    return myIp.ip;

}

getMyip();

//get provider, city, mobile usage and proxy usage
async function getMyInfo() {
    document.body.querySelector('.user-ip .loading').remove();
    let result = await (await fetch('http://ip-api.com/json/' + await getMyip() + '?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,reverse,mobile,proxy,hosting,query')).json();
    document.body.querySelector('.user-provider .loading').remove();
    document.body.querySelector('.provider-value').innerHTML = '<p>' + result.isp + '</p>';
    document.body.querySelector('.user-city .loading').remove();
    document.body.querySelector('.city-value').innerHTML ='<p>' + result.city + '</p>';
    document.body.querySelector('.use-mobile .loading').remove();
    if (result.mobile == true) {
        mobileValue.innerHTML ='<p> Yes </p>'; 
    } else {
        mobileValue.innerHTML ='<p> No </p>'
    }
    document.body.querySelector('.use-proxy .loading').remove();
    if (result.proxy == true) {
        proxyValue.innerHTML = '<p> Yes </p>'; 
    } else {
        proxyValue.innerHTML = '<p> No </p>'
    }
    getFlagImage(result.country);
}
getMyInfo()

//get country flag image
async function getFlagImage(country) {
    let flags = await (await fetch('https://flagcdn.com/en/codes.json')).json();
        for (let key in flags) {
            if (flags[key] === country) {
                document.body.querySelector('.countryflag').innerHTML = "<img src = " + `https://flagcdn.com/40x30/${key}.png` + ">";
                return `https://flagcdn.com/40x30/${key}.png`
            }
        }
}

// getting OS and Browser version
async function getOs() {
   let result = await (await fetch ('https://api.apicagent.com/?ua=' + navigator.userAgent)).json();
   document.body.querySelector('.user-os .loading').remove();
   document.body.querySelector('.os-value').innerHTML = '<p>' + result.os.name + ' ' +result.os.version + '</p>';
   document.body.querySelector('.user-browser .loading').remove();
   document.body.querySelector('.browser-value').innerHTML ='<p>' +  result.client.name + ' ' +result.os.version + '</p>';;

}

getOs();

