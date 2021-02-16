let studentsStr = ["Дмитренко Олександр - ІП-84", "Матвійчук Андрій - ІВ-83", "Лесик Сергій - ІО-82", "Ткаченко Ярослав - ІВ-83", "Аверкова Анастасія - ІО-83", "Соловйов Даніїл - ІО-83", "Рахуба Вероніка - ІО-81", "Кочерук Давид - ІВ-83", "Лихацька Юлія- ІВ-82", "Головенець Руслан - ІВ-83", "Ющенко Андрій - ІО-82", "Мінченко Володимир - ІП-83", "Мартинюк Назар - ІО-82", "Базова Лідія - ІВ-81", "Снігурець Олег - ІВ-81", "Роман Олександр - ІО-82", "Дудка Максим - ІО-81", "Кулініч Віталій - ІВ-81", "Жуков Михайло - ІП-83", "Грабко Михайло - ІВ-81", "Іванов Володимир - ІО-81", "Востриков Нікіта - ІО-82", "Бондаренко Максим - ІВ-83", "Скрипченко Володимир - ІВ-82", "Кобук Назар - ІО-81", "Дровнін Павло - ІВ-83", "Тарасенко Юлія - ІО-82", "Дрозд Світлана - ІВ-81", "Фещенко Кирил - ІО-82", "Крамар Віктор - ІО-83", "Іванов Дмитро - ІВ-82"];

// Завдання 1
// Заповніть словник, де:
// - ключ – назва групи
// - значення – відсортований масив студентів, які відносяться до відповідної групи
let studentsGroups = new Map()

// Ваш код починається тут
studentsGroups.set("IП-84", ["Дмитренко Олександр"])
studentsGroups.set("IВ-83", ["Матвійчук Андрій", "Ткаченко Ярослав", "Кочерук Давид", "Головенець Руслан", "Бондаренко Максим", "Дровнін Павло"].sort())
studentsGroups.set("ІО-82", ["Лесик Сергій", "Ющенко Андрій", "Мартинюк Назар", "Роман Олександр", "Востриков Нікіта", "Тарасенко Юлія", "Фещенко Кирил"].sort())
studentsGroups.set("ІО-83", ["Аверкова Анастасія", "Соловйов Даніїл", "Крамар Віктор"].sort())
studentsGroups.set("ІО-81", ["Рахуба Вероніка", "Дудка Максим", "Іванов Володимир"].sort())
studentsGroups.set("ІВ-82", ["Лихацька Юлія", "Скрипченко Володимир", "Іванов Дмитро"].sort())
studentsGroups.set("ІП-83", ["Мінченко Володимир", "Жуков Михайло"].sort())
studentsGroups.set("ІВ-81", ["Базова Лідія", "Снігурець Олег", "Кулініч Віталій", "Грабко Михайло", "Дрозд Світлана"].sort())
console.log("Завдання 1")
console.log(studentsGroups);
// Ваш код закінчується тут

// Завдання 2
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – масив з оцінками студента (заповніть масив випадковими значеннями, використовуючи функцію `randomValue(maxValue: Int) -> Int`)
let points = [12, 12, 12, 12, 12, 12, 12, 16]
// Ваш код починається тут
function studPoints(points) {
    let newList = []
    
    points.forEach(element => {
        newList.push(Math.ceil(element*Math.random()))
    });
    return newList
}

let studentPoints = {
    "ІП-84": [{"Дмитренко Олександр": studPoints(points)}],
    "IВ-83": [{"Матвійчук Андрій": studPoints(points)}, {"Ткаченко Ярослав": studPoints(points)}, {"Кочерук Давид": studPoints(points)}, {"Головенець Руслан": studPoints(points)}, {"Бондаренко Максим": studPoints(points)}, {"Дровнін Павло": studPoints(points)}],
    "ІО-82": [{"Лесик Сергій": studPoints(points)}, {"Ющенко Андрій": studPoints(points)}, {"Мартинюк Назар": studPoints(points)}, {"Роман Олександр": studPoints(points)}, {"Востриков Нікіта": studPoints(points)}, {"Тарасенко Юлія": studPoints(points)}, {"Фещенко Кирил": studPoints(points)}],
    "ІО-83": [{"Аверкова Анастасія": studPoints(points)}, {"Соловйов Даніїл": studPoints(points)}, {"Крамар Віктор": studPoints(points)}],
    "ІО-81": [{"Рахуба Вероніка": studPoints(points)}, {"Дудка Максим": studPoints(points)}, {"Іванов Володимир": studPoints(points)}],
    "ІВ-82": [{"Лихацька Юлія": studPoints(points)}, {"Скрипченко Володимир": studPoints(points)}, {"Іванов Дмитро": studPoints(points)}],
    "ІП-83": [{"Мінченко Володимир": studPoints(points)}, {"Жуков Михайло": studPoints(points)}],
    "ІВ-81": [{"Базова Лідія": studPoints(points)}, {"Снігурець Олег": studPoints(points)}, {"Кулініч Віталій": studPoints(points)}, {"Грабко Михайло": studPoints(points)}, {"Дрозд Світлана": studPoints(points)}]
} 
// Ваш код закінчується тут
console.log("Завдання 2")
console.log(studentPoints);

// Завдання 3
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – сума оцінок студента

// Ваш код починається тут
function listSummary(newList) {
    let listSum = 0
    for(let i = 0; i < newList.length; i++){
        listSum += newList[i];
    }
    return(listSum);
}

let sumPoints = {
    "ІП-84": [{"Дмитренко Олександр": listSummary(studentPoints["ІП-84"][0]["Дмитренко Олександр"])}],
    "IВ-83": [{"Матвійчук Андрій": listSummary(studentPoints["IВ-83"][0]["Матвійчук Андрій"])}, {"Ткаченко Ярослав": listSummary(studentPoints["IВ-83"][1]["Ткаченко Ярослав"])}, {"Кочерук Давид": listSummary(studentPoints["IВ-83"][2]["Кочерук Давид"])}, {"Головенець Руслан": listSummary(studentPoints["IВ-83"][3]["Головенець Руслан"])}, {"Бондаренко Максим": listSummary(studentPoints["IВ-83"][4]["Бондаренко Максим"])}, {"Дровнін Павло": listSummary(studentPoints["IВ-83"][5]["Дровнін Павло"])}],
    "ІО-82": [{"Лесик Сергій": listSummary(studentPoints["ІО-82"][0]["Лесик Сергій"])}, {"Ющенко Андрій": listSummary(studentPoints["ІО-82"][1]["Ющенко Андрій"])}, {"Мартинюк Назар": listSummary(studentPoints["ІО-82"][2]["Мартинюк Назар"])}, {"Роман Олександр": listSummary(studentPoints["ІО-82"][3]["Роман Олександр"])}, {"Востриков Нікіта": listSummary(studentPoints["ІО-82"][4]["Востриков Нікіта"])}, {"Тарасенко Юлія": listSummary(studentPoints["ІО-82"][5]["Тарасенко Юлія"])}, {"Фещенко Кирил": listSummary(studentPoints["ІО-82"][6]["Фещенко Кирил"])}],
    "ІО-83": [{"Аверкова Анастасія": listSummary(studentPoints["ІО-83"][0]["Аверкова Анастасія"])}, {"Соловйов Даніїл": listSummary(studentPoints["ІО-83"][1]["Соловйов Даніїл"])}, {"Крамар Віктор": listSummary(studentPoints["ІО-83"][2]["Крамар Віктор"])}],
    "ІО-81": [{"Рахуба Вероніка": listSummary(studentPoints["ІО-81"][0]["Рахуба Вероніка"])}, {"Дудка Максим": listSummary(studentPoints["ІО-81"][1]["Дудка Максим"])}, {"Іванов Володимир": listSummary(studentPoints["ІО-81"][2]["Іванов Володимир"])}],
    "ІВ-82": [{"Лихацька Юлія": listSummary(studentPoints["ІВ-82"][0]["Лихацька Юлія"])}, {"Скрипченко Володимир": listSummary(studentPoints["ІВ-82"][1]["Скрипченко Володимир"])}, {"Іванов Дмитро": listSummary(studentPoints["ІВ-82"][2]["Іванов Дмитро"])}],
    "ІП-83": [{"Мінченко Володимир": listSummary(studentPoints["ІП-83"][0]["Мінченко Володимир"])}, {"Жуков Михайло": listSummary(studentPoints["ІП-83"][1]["Жуков Михайло"])}],
    "ІВ-81": [{"Базова Лідія": listSummary(studentPoints["ІВ-81"][0]["Базова Лідія"])}, {"Снігурець Олег": listSummary(studentPoints["ІВ-81"][1]["Снігурець Олег"])}, {"Кулініч Віталій": listSummary(studentPoints["ІВ-81"][2]["Кулініч Віталій"])}, {"Грабко Михайло": listSummary(studentPoints["ІВ-81"][3]["Грабко Михайло"])}, {"Дрозд Світлана": listSummary(studentPoints["ІВ-81"][4]["Дрозд Світлана"])}]
}
// Ваш код закінчується тут
console.log("Завдання 3")
console.log(sumPoints);


// Завдання 4
// Заповніть словник, де:
// - ключ – назва групи
// - значення – середня оцінка всіх студентів групи


// Ваш код починається тут
let groupAvg = {
    "ІП-84": (listSummary([listSummary(studentPoints["ІП-84"][0]["Дмитренко Олександр"])])/sumPoints["ІП-84"].length).toFixed(2),
    "IВ-83": (listSummary([listSummary(studentPoints["IВ-83"][0]["Матвійчук Андрій"]), listSummary(studentPoints["IВ-83"][1]["Ткаченко Ярослав"]), listSummary(studentPoints["IВ-83"][2]["Кочерук Давид"]), listSummary(studentPoints["IВ-83"][3]["Головенець Руслан"]), listSummary(studentPoints["IВ-83"][4]["Бондаренко Максим"]), listSummary(studentPoints["IВ-83"][5]["Дровнін Павло"])])/sumPoints["IВ-83"].length).toFixed(2),
    "ІО-82": (listSummary([listSummary(studentPoints["ІО-82"][0]["Лесик Сергій"]), listSummary(studentPoints["ІО-82"][1]["Ющенко Андрій"]), listSummary(studentPoints["ІО-82"][2]["Мартинюк Назар"]), listSummary(studentPoints["ІО-82"][3]["Роман Олександр"]), listSummary(studentPoints["ІО-82"][4]["Востриков Нікіта"]), listSummary(studentPoints["ІО-82"][5]["Тарасенко Юлія"]), listSummary(studentPoints["ІО-82"][6]["Фещенко Кирил"])])/sumPoints["ІО-82"].length).toFixed(2),
    "ІО-83": (listSummary([listSummary(studentPoints["ІО-83"][0]["Аверкова Анастасія"]), listSummary(studentPoints["ІО-83"][1]["Соловйов Даніїл"]), listSummary(studentPoints["ІО-83"][2]["Крамар Віктор"])])/sumPoints["ІО-83"].length).toFixed(2),
    "ІО-81": (listSummary([listSummary(studentPoints["ІО-81"][0]["Рахуба Вероніка"]), listSummary(studentPoints["ІО-81"][1]["Дудка Максим"]), listSummary(studentPoints["ІО-81"][2]["Іванов Володимир"])])/sumPoints["ІО-81"].length).toFixed(2),
    "ІВ-82": (listSummary([listSummary(studentPoints["ІВ-82"][0]["Лихацька Юлія"]), listSummary(studentPoints["ІВ-82"][1]["Скрипченко Володимир"]), listSummary(studentPoints["ІВ-82"][2]["Іванов Дмитро"])])/sumPoints["ІВ-82"].length).toFixed(2),
    "ІП-83": (listSummary([listSummary(studentPoints["ІП-83"][0]["Мінченко Володимир"]), listSummary(studentPoints["ІП-83"][1]["Жуков Михайло"])])/sumPoints["ІП-83"].length).toFixed(2),
    "ІВ-81": (listSummary([listSummary(studentPoints["ІВ-81"][0]["Базова Лідія"]), listSummary(studentPoints["ІВ-81"][1]["Снігурець Олег"]), listSummary(studentPoints["ІВ-81"][2]["Кулініч Віталій"]), listSummary(studentPoints["ІВ-81"][3]["Грабко Михайло"]), listSummary(studentPoints["ІВ-81"][4]["Дрозд Світлана"])])/sumPoints["ІВ-81"].length).toFixed(2)
}
// Ваш код закінчується тут
console.log("Завдання 4")
console.log(groupAvg);

// Завдання 5
// Заповніть словник, де:
// - ключ – назва групи
// - значення – масив студентів, які мають >= 60 балів

// Ваш код починається тут
console.log("Завдання 5")
// sumPoints = new Map(Object.entries(sumPoints));
// console.log(sumPoints);
const passedPerGroup = {
    "ІП-84": [],
    "IВ-83": [],
    "ІО-82": [],
    "ІО-83": [],
    "ІО-81": [],
    "ІВ-82": [],
    "ІП-83": [],
    "ІВ-81": []
}

    for(let group in sumPoints) {
            for(var fio in sumPoints[group]) {
                
                let someVar = sumPoints[group][fio]
                //console.log(Object.values(sumPoints[group][fio]), Object.keys(sumPoints[group][fio]), group)
                for (let i in Object.values(sumPoints[group][fio])) {
                    if (Object.values(sumPoints[group][fio])[i] >= 60) {
                        //console.log(Object.keys(sumPoints[group][fio]))
                        passedPerGroup[group].push(Object.keys(sumPoints[group][fio]))
                    }
                }
            }
    }

// Ваш код закінчується тут

console.log(passedPerGroup);
