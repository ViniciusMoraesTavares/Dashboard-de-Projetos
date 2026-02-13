function semaforo(){
    setTimeout(
        ()=>{
        console.log('vermelho:')
        console.log('amarelo:')
        console.log('verde:#####\n')
    },1000)
    setTimeout(
        ()=>{
            console.log('vermelho:')
            console.log('amarelo:#####')
            console.log('verde:\n')
    },7000)
    setTimeout(
        ()=>{
            console.log('vermelho:#####')
            console.log('amarelo:')
            console.log('verde:\n')
            semaforo()
    },9000)    
    
}

semaforo()