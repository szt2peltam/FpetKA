

const formElement = document.querySelector("form");
const localEmelent = document.querySelector(".localstorage");
const sessionEmelent = document.querySelector(".sessionstorage");

let dropDownSelection = document.getElementById("selectStorageType");
const inputKey = document.getElementById("key");
const inputValue = document.getElementById("value");

let StorageType = "";


function init(){
    let localitems = Object.keys(localStorage);
    let sessionitems = Object.keys(sessionStorage);
    if(localitems.length != 0){
        
        localitems.forEach(key => {
            let html = `<li>${key}:${localStorage.getItem(key)}</li>`;
            document.querySelector(".locallist").insertAdjacentHTML("beforeend",html);
    
        });
    }

    if(sessionitems.length != 0){
        
        sessionitems.forEach(key => {
            let html = `<li>${key}:${sessionStorage.getItem(key)}</li>`;
            document.querySelector(".sessionlist").insertAdjacentHTML("beforeend",html);
    
        });

    }

}
init();
formElement.addEventListener("submit",(e) =>{
    e.preventDefault();

    SaveDataToStorage();

});

function SaveDataToStorage(){
    let Selection = dropDownSelection.value;
    if(inputKey.value.length == 0) return;
    if(inputValue.value.length == 0) return;
    if(Selection == "LocalStorage"){
        localStorage.setItem(inputKey.value,inputValue.value );
        DisplayItemsInStorages("LocalStorage",inputKey.value,inputValue.value);
        
    }else if(Selection == "SessionStorage"){
        sessionStorage.setItem(inputKey.value,inputValue.value );
        DisplayItemsInStorages("SessionStorage", inputKey.value,inputValue.value);

    }
}




function DisplayItemsInStorages(storageType, key ,value){
    if(storageType == "LocalStorage"){


        let html = `<li>${key}:${value}</li>`;
        document.querySelector(".locallist").insertAdjacentHTML("beforeend",html);
    }else{
        let html = `<li>${key}:${value}</li>`;
        document.querySelector(".sessionlist").insertAdjacentHTML("beforeend",html);

    }

}


function DeleteLocalStorage(){
    localStorage.clear();
    document.querySelector(".locallist").innerHTML = "";
}

function DeleteSessionStorage(){
    sessionStorage.clear();
    document.querySelector(".sessionlist").innerHTML = "";

}