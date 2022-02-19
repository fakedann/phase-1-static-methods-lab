class Formatter {
  //add static methods here
  static capitalize(strng){
    let aux = strng.slice(1)
    let aux2 = strng.charAt(0).toUpperCase()+aux
    return aux2
  }

  static sanitize(strng){
    return strng.replace(/[^A-Za-z0-9- ']+/g, "")
  }

  static titleize(strng){
    const newArray = []
    let aux = strng.split(' ')
    newArray.push(this.capitalize(aux[0]))

    for(let i=1; i < aux.length; i++){
      if( aux[i] === 'a' || aux[i] === 'an' || aux[i] === 'but' || aux[i] === 'of' || aux[i] === 'and' || aux[i] === 'for' || aux[i] === 'at' || aux[i] === 'by' || aux[i] === 'from' || aux[i] === 'the'){
        newArray.push(aux[i])
      }else{
        newArray.push(this.capitalize(aux[i]))
      }
    }
    console.log(newArray.join(' '))
    return newArray.join(' ')
  }
}