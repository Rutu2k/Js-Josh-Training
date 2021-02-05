function findOccurences(arr, item) {
    console.log(arr.reduce((a,v) => (v == item ? a + 1: a),0));
}