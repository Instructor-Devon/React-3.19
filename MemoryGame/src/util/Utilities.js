class Utils {
    randomColor() {
        return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    }
    shuffle(arr) {
        var currIdx = arr.length,
            temp,
            randIdx;
        while(currIdx !== 0) {
            randIdx = Math.floor(Math.random() * currIdx);
            currIdx -= 1;
            temp = arr[currIdx];
            arr[currIdx] = arr[randIdx];
            arr[randIdx] = temp;
        }
        return arr;
    }
}
export default Utils;
