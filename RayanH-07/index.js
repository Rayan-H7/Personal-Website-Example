function rayquaza(){
    let rayquaza_info = ["dragon type","flying type","sky high pokemon","レックウザ","11.9% catch rate","206.5kg","7 metres tall"]
    let x = 0
    do{
        console.log(rayquaza_info[x + 1])
    }while (x < 100)
    do{
        console.log(rayquaza_info[x-1])
    }while (x > 100)
}
function chess(black, white){
    let chess = [white, black]
    console.log("${white} is playing as white, and ${black} is playing as black.")
}