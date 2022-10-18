const nameType = prompt('請輸入姓名')
const bornMonth = prompt('請輸入出生月份')
const bornDay = prompt('請輸入出生日期')

let Capricorn = "摩羯"
let Aquarius = "水瓶"
let Pisces = "雙魚"
let Aries = "牡羊"
let Taurus = "金牛"
let Gemini = "雙子"
let Cancer = "巨蟹"
let Leo = "獅子"
let Virgo = "處女"
let Libra = "天秤"
let Scorpio = "天蠍"
let Sagittarius = "射手"

let constellation = ""


if (bornMonth == 1) {
    if (bornDay <= 20) {
        constellation = Capricorn
    }
    else {
        constellation = Aquarius
    }
}
if (bornMonth == 2) {
    if (bornDay <= 18) {
        constellation = Aquarius
    }
    else {
        constellation = Pisces
    }
}
if (bornMonth == 3) {
    if (bornDay <= 20) {
        constellation = Pisces
    }
    else {
        constellation = Aries
    }
}
if (bornMonth == 4) {
    if (bornDay <= 19) {
        constellation = Aries
    }
    else {
        constellation = Taurus
    }
}
if (bornMonth == 5) {
    if (bornDay <= 20) {
        constellation = Taurus
    }
    else {
        constellation = Gemini
    }
}
if (bornMonth == 6) {
    if (bornDay <= 21) {
        constellation = Gemini
    }
    else {
        constellation = Cancer
    }
}
if (bornMonth == 7) {
    if (bornDay <= 22) {
        constellation = Cancer
    }
    else {
        constellation = Leo
    }
}
if (bornMonth == 8) {
    if (bornDay <= 22) {
        constellation = Leo
    }
    else {
        constellation = Virgo
    }
}
if (bornMonth == 9) {
    if (bornDay <= 22) {
        constellation = Virgo
    }
    else {
        constellation = Libra
    }
}
if (bornMonth == 10) {
    if (bornDay <= 23) {
        constellation = Libra
    }
    else {
        constellation = Scorpio
    }
}
if (bornMonth == 11) {
    if (bornDay <= 22) {
        constellation = Scorpio
    }
    else {
        constellation = Sagittarius
    }
}
if (bornMonth == 12) {
    if (bornDay <= 21) {
        constellation = Sagittarius
    }
    else {
        constellation = Capricorn
    }
}


console.log(bornMonth);
console.log(constellation);

if (bornMonth <= 12) {
    if (bornDay <= 31) {
        alert(nameType + "你好" + "你的星座是" + constellation + "座")
    } else {
        alert("你輸入錯誤的【日期】了！")
    }
} else if (bornDay >= 31) {
    alert("你輸入錯誤的【日期】【月分】了！")
} else {
    alert("你輸入錯誤的【月分】了！")
}