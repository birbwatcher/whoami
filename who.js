async function getMyip(){
    let myIp = await (await fetch('https://api.ipify.org?format=json')).json();
    console.log(myIp.ip)
    return myIp.ip
}

async function getMyInfo() {
    let result = await (await fetch('http://ip-api.com/json/' + await getMyip() + '?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,reverse,mobile,proxy,hosting,query')).json();
    // console.log(result.country);
    // console.log(result.city);
    // console.log(result.isp);
    // console.log(result.timezone);
    // console.log(result.mobile);
    // console.log(result.proxy);
    // console.log(result.query)
    // console.log(result);
    return result;
}

async function getFlagImage(country) {
    let flags = await (await fetch('https://flagcdn.com/en/codes.json')).json();
        for (let key in flags) {
            if (flags[key] === country) {
                console.log(`https://flagcdn.com/40x30/${key}.png`);
                return `https://flagcdn.com/40x30/${key}.png`
            }
        }

}

showInfo();