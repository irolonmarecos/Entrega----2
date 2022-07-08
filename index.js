const { error, log } = require("console");
const fs = require("fs");
const { wrap } = require("module");
const { join } = require("path/posix");
function calcId (id,dataNuevo){
    if(id == 0 ){
        return 1
    } else{
        return dataNuevo.Productos[dataNuevo.Productos.length - 1].id + 1
    }
}
class Almacen  {
    constructor(title, price, id){
        this.title = title,
        this.price = price
        this.id = id  
    }
} 
class container  {
    async getAll(){
        try{
            const data =  fs.readFileSync("./texto.json", "utf-8");
            let dataNuevo = JSON.parse(data)
            return console.log(dataNuevo);
        }catch(err){
            throw new error ('ERROR')
        }
    }
    async save(){
        try{
            const data = fs.readFileSync("./texto.json", "utf-8")
            const dataNuevo = JSON.parse(data)
            let Id = dataNuevo.Productos.length
            const nvoProd = new Almacen ('e','3',Id)
            nvoProd.id = calcId (nvoProd.id, dataNuevo)
            dataNuevo.Productos.push(nvoProd)
            fs.writeFileSync("./texto.json", JSON.stringify(dataNuevo, null, 2))
        }catch(err){
            throw new error ('ERROR')
        }
    }
    async getById (id){
        try{
            const data = fs.readFileSync("./texto.json", "utf-8")
            const dataNuevo = JSON.parse(data)
            let filtro = dataNuevo.Productos.filter((el) => el.id === id)
            return console.log(filtro);
        } catch(err){
            throw new error ('ERROR')
        }
    }
    async deleteById(id) {
        try{
            const data = fs.readFileSync("./texto.json", "utf-8")
            const dataNuevo = JSON.parse(data)
            const {Productos} = dataNuevo
            let filtro = Productos.filter((el) => el.id !== id)
            dataNuevo.Productos = filtro
            fs.writeFileSync("./texto.json", JSON.stringify(dataNuevo, null, 2))
        }catch(err){
            throw new error ('ERROR')
        }
    } 
    async deleteAll() {
        try{
            const data = fs.readFileSync("./texto.json", "utf-8")
            const dataNuevo = JSON.parse(data)
            const {Productos} = dataNuevo
            let borrado = []
            dataNuevo.Productos = borrado
            fs.writeFileSync("./texto.json", JSON.stringify(dataNuevo, null, 2))
        }catch(err){
            throw new error ('ERROR')
        }
    } 
} 
const viewList = new container()
//viewList.save()
//viewList.deleteById(2)
//viewList.deleteAll()
//viewList.getAll()

