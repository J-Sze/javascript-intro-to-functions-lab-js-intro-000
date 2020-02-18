function shout(string) {
  return string.toUpperCase() 
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
<<<<<<< HEAD
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === 'I love you, Grandma.') {
    return "I love you, too.";
  }
=======
  console.log(logShout.toUpperCase())
>>>>>>> 288a75c8c3600cb82c7aa6fdcb4982d3a4f8cb3f
}