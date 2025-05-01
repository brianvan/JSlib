

function quickSort(array, start, end) {

    const partition = (array, start, end) => {
        let temp;
        let pivot = array[end];
        let i = start - 1;
        for (let j = start; j <= end - 1; j++) {
            if (array[j] <= pivot) {
                i++;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        temp = array[i + 1];
        array[i + 1] = array[end];
        array[end] = temp;

        return i + 1;

    }

    if (start < end) {
        let i = partition(array, start, end);
        quickSort(array, start, i - 1);
        quickSort(array, i + 1, end);
    }
}

function quickSortIterative(array, start, end) {

    const partition = (array, start, end) => {
        let temp;
        let pivot = array[end];
        let i = start - 1;
        for (let j = start; j <= end - 1; j++) {
            if (array[j] <= pivot) {
                i++;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        temp = array[i + 1];
        array[i + 1] = array[end];
        array[end] = temp;

        return i + 1;

    }

    let stack = new Array(end - start + 1);
    stack.fill(0);

    let top = -1;
    stack[++top] = end;
    stack[++top] = start;

    while (top >= 0) {
        end = stack[top--];
        start = stack[top--];

        let p = partition(array, end, start);

        if (p - 1 > start) {
            stack[++top] = start;
            stack[++top] = p - 1;
        }

        if (p + 1 < end) {
            stack[++top] = p + 1;
            stack[++top] = end;
        }
    }
}