function mergesort(myarray) {
    var l = myarray.length / 2;
    var left = myarray.slice(0, Math.ceil((l)));
    var right = myarray.slice(Math.ceil(l));
    return merge(mergesort(left), mergesort(right));
}