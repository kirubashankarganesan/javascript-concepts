// continue - skip particular iteration and run 

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        if (i === 10) {
            continue;
        }
        console.log(i);
    }
}
// 0 2 4 6 8 12 14 16 18 20