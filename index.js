// code your solution here
function saturdayFun(name="roller-skate"){
    return `This Saturday, I want to ${name}!`;
}

let mondayWork = function(nm='go to the office'){
    return `This Monday, I will ${nm}.`;
}

let wrapAdjective = function(style="/") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }