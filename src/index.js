
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if(matrix){
    for (let i = 0; i < matrix.length; i++) {
      if(i % 2 !== 0){
        matrix[i].reverse()
      }
      arr = arr.concat(matrix[i])
    }
    return arr
  }else{
    return []
  }
  

  
}
