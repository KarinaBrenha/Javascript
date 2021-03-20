const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()  // nao tem escopo de bloco, entao nao respeita o i