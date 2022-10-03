var userLang = navigator.language || navigator.userLanguage; 
if (userLang == 'ru_RU'){
    let alink = document.createElement('a');
    alink.href = '/meetups/ru/';
    alink.click();
}else{
    let alink = document.createElement('a');
    alink.href = '/meetups/en/';
    alink.click();
}