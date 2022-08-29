//Java Script Full Course


function result(){
    let mytext = document.querySelector('#mytext')
    let message = document.querySelector('#message')

    if (mytext.value == 515){
        message.innerHTML = "ዉጤት: አለሙ ከበደ >>> 82"
    }

    else if (mytext.value == 615){
        message.innerHTML = "ዉጤት፡ አበበ ሽመልስ ››› 92 "
    }

    else{
        message.innerHTML = "የማይታወቅ ኮድ አስገብተዋል አባከዎ እንደገና ይሞክሩ"
    }
}
