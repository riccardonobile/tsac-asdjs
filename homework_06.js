function sort(myarray) {
    if (myarray.length == 0 || myarray.length == 1) {
        return myarray;
    } else {
        var n = Math.cell(myarray / 2);
        var primo = myarray.slice(0, n);
        var secondo = myarray.slice(n, myarray.length);
        return sort(primo).concat(sort(secondo));
    }
}