function solution(D) {
    const temp = { 'Mon': undefined, 'Tue': undefined, 'Wed': undefined, 'Thur': undefined, 'Fri': undefined, 'Sat': undefined, 'Sun': undefined }

    var newmp = new Map(Object.entries(temp));
    // console.log(newmp);

    D.forEach((value, key) => {
        var dt = new Date(key);
        // console.log(dt);
        var dayname = weekday[dt.getDay()];
        if (newmp.get(dayname) === undefined) {
            newmp.set(dayname, value);
        }
        else {
            newmp.set(dayname, newmp.get(dayname) + value);
        }
    })
    console.log(newmp);
    let arr = [];

    newmp.forEach((value, key) => {
        arr.push({ key: key, value: value })
    })


    for (let i = 1; i < arr.length - 1; i++) {
        let prev = arr[i - 1].value;
        let next = arr[i + 1].value;
        if (next === undefined) {
            let count = 0;
            let j = i;

            while (next === undefined) {
                j++;
                count++;
                next = arr[j].value
            }

            if (arr[i].value === undefined) {
                var d = (next - prev) / (count + 1);
                // console.log(count);
                arr[i].value = prev + d;
            }
        }
        else if (arr[i].value===undefined) {
            arr[i].value = (prev + next) / 2
        }
        else {
            arr[i].value=arr[i].value;
        }
    }

    // arr.forEach((value,key)=>{
    //     console.log(key,value);
    // })
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].key , arr[i].value);
    }
}

// const days = { '2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07': 4 }
const days={'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2}

const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

var mp = new Map(Object.entries(days));


solution(mp);