//arr = [1,2,3,4,5,6]
//arr2 = [1,2]

function excludeEle(arr,arr2) {
    console.log(arr.filter(a => !arr2.includes(a)));
}
//excludeEle(arr,arr2)
excludeEle([1,2,3,4,5],[3,4])
