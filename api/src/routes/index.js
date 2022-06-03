const { Router } = require('express');
const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
const router = Router();
require('dotenv').config();
const{ API_KEY } = process.env 

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);





const getApiInfo = async () => {
    const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    let apiInfo = await dogApi.data.map((dog) => {  
        return {
            
            id: dog.id,
            name: dog.name,
            height: dog.height.metric, 
            weight: dog.weight.metric,
            life_span: dog.life_span,
            image: dog.image.url,
            temperament: dog.temperament
            
        };
    });
    return apiInfo;
};



const getDbInfo = async () => {
    return await Dog.findAll({            
        include: {                       
            model: Temperament, //me trigo la informacion de la base de datos
            attributes: ["name"],//por que sino al crear un perro nunca va a  traer el perro con el temperamento
            through: {
                attributes: [],
            },
        }
    })
}

const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const totalInfo = apiInfo.concat(dbInfo);
    return totalInfo;
}

//aca estan los getde busqueda por nombre estan en la misma ruta por que trae la misma informacion "degun el nombre ingresado" 
//query va x url

router.get("/dogs", async (req, res, next) => {  
    try {
        const name = req.query.name
        let dogsTotal = await getAllDogs();      
        if (name) {                               
            let dogName = await dogsTotal.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()))
            dogName.length ?                     
            res.status(200).send(dogName)  :
            res.status(404).send({ info: "Sorry, the dog you are looking for is not here." });
        } else {
            res.status(200).send(dogsTotal)    
        } 
    } catch (error) {
        next(error)
        };
    });


    router.get("/temperament", async (req, res) => {   
        const temperamentApi = (await axios.get(
            `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
        )).data
        let temperaments = temperamentApi.map((ob) => ob.temperament);
        temperaments = temperaments.join().split(",");
        temperaments = temperaments.filter (ob => ob)
        temperaments = [...new Set (temperaments)].sort(); //creo un objeto donde guardo los valores
         console.log(temperaments)                  //     cuando le paso el array temperaments sus elementos son agregados al nuevo set y con el sort se ordenan 
        temperaments.forEach((ob) => {   
          Temperament.findOrCreate({    //chequeo si el elemento ya existe en la db cuando no existe lo crea
            where: { name: ob },       //crea los temperamentos donde se encuentre el nombre mapeado
          });
        });
        const allTemperaments = await Temperament.findAll();
        res.send(allTemperaments);
      });
 

router.get("/dogs/:id", async function(req, res, next) {
    try {
        const id = req.params.id;
        const dogTotal = await getAllDogs();   
        if (id){
        let dogId = await dogTotal.filter(el => el.id == id) // filtro por id todos los perros
        dogId.length?                                        //si no encuentra entra en res.status
        res.status(200).send(dogId) :
        res.status(404).send({ info: "Dog not found" })
        }
    } catch (error) {
        next(error)
    };
});

router.post("/dog", async (req, res, next) => {
    try {
        const { name, height, weight, life_span, image, createdInDb, temperament} = req.body;    // del body traigo lo que necesito
        const newDog = await Dog.create({    //creo el perro con el model Dog y le paso lo mismo menos los temperamentso que los encuentra en un modelo que ya esta
            
            name, 
            height, 
            weight, 
            life_span, 
            image, 
            createdInDb
        
        })
        let temperamentDb = await Temperament.findAll({ //dentro del mi modelo encuentra todos los temperaments que coinceden on lo que le paso por body
            where: { name : temperament} //name es igual al temperamneto quen llega por el body  
        })
        await newDog.addTemperament(temperamentDb)  //al dog creado agregále el temperamento encontrado en la Bd que le llegó por body
        res.status(201).send({ info: "Dog created successfully!" })
    } catch (error) {
        next(error)
    };
});





module.exports = router;
