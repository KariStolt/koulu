let arr = [];

let saveToArray = () => {
    var textarea = document.querySelector('textarea');
    arr = textarea.value.split(' ');
}

let changeArray = () => {
    let speed = document.getElementById("wordsPerMinute").value;
    let wpm = 60000/speed;

  
    document.getElementById("readableText").style.visibility = "visible";
    document.getElementById("textArea").style.visibility = "hidden";
    for (let i=0; i<arr.length; i++) {
        let text = arr[i];
        setTimeout( function timer(){
            document.getElementById("readableText").innerText = text;
        }, i*wpm );
    }
} 
