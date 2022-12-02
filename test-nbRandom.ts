let tab: number[] = [];

for (let i = 1; i < 10000; i++) {
  tab.push(Math.floor(Math.random() * (6 - 1 + 1) + 1));
}

let tab2: number[] = [];

tab.forEach((el) => {
  if (!tab2.includes(el)) {
    tab2.push(el);
  }
});

console.log(tab2);
