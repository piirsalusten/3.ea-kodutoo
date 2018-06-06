document.addEventListener('DOMContentLoaded', function() {
  let openLabTabs = document.getElementById('openLabTabs')
  let openTluTabs = document.getElementById('openTluTabs')
  let openNewsTabs = document.getElementById('openNewsTabs')
  openLabTabs.addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://calendar.google.com/calendar/embed?src=tlu.ee_4hf4nnchr92fjbuoq18215fjcg@group.calendar.google.com&title=SDLAB%20A-303&showPrint=0&showCalendars=0&mode=WEEK&height=600&wkst=2&hl=en&bgcolor=%23FFFFFF&ctz=Europe/Tallinn' })
    chrome.tabs.create({ url: 'http://www.tlu.ee/asio/kalenterit2/index.php?av_v=1&av=180531180531180531&ctila=3191&kt=tila&laji=%25%7C%7C%25&guest=intranet%2Ftu&lang=est&ui=&apvm=170925&tiedot=kaikki&ss_ttkal=&ccv=&yhopt=&__cm=&b=1527714676&av_y=0' })
    chrome.tabs.create({ url: 'https://docs.google.com/forms/d/e/1FAIpQLSflbbyWXOA7sOKpilQl24QmKxEduLL4eUumjtsAReMSHBhnEw/viewform' })
  })
  openTluTabs.addEventListener('click',function(){
    chrome.tabs.create({ url: 'https://ois2.tlu.ee/tluois/uus_ois2.tud_leht' })
    chrome.tabs.create({ url: 'https://www.tlu.ee/asio/kalenterit2/index.php?kt=lk&yks=&cluokka=IFIFB-1&av=180604180610180607&guest=intranet%2Ftu&lang=est&jagu=4' })
  })
  openNewsTabs.addEventListener('click',function(){
    chrome.tabs.create({ url: 'https://geenius.ee/' })
    chrome.tabs.create({ url: 'http://www.delfi.ee/' })
    chrome.tabs.create({ url: 'https://www.technewsworld.com/' })
  })
})
