function shout(string) {
    return string.toUpperCase();
}
'Hello!' .toUpperCase();

function whisper(string) {
    return string.toLowerCase();
}
'Hello!' .toLowerCase();

function logShout(string) {
    console.log(string.toUpperCase());
}
'Hello!' .toUpperCase();

function logWhisper(string) {
    console.log(string.toLowerCase());
}
'Hello!' .toLowerCase();

function sayHiToGrandma(string) {
    if (string===string.toLowerCase()){
        return "I can't hear you!";
    }
    if (string===string.toUpperCase()){
        return "YES INDEED!";
    }
    if (string==="I love you, Grandma."){
        return "I love you, too.";
    }
    }
    console.log(sayHiToGrandma("Hello."));
