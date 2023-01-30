   import prisma from "../src/database/db.js";

   async function main() {
       await prisma.order.createMany({
           data: [
               {
                    "item": "Açai", 
                    "name": "Shiva", 
                    "phonetype": 48996385290, 
                    "value": 5, 
                    "referencepoint": "perto da barraca de caipirinha",
                    "category": 2
               },
               {
                   "item": "água de coco",
                   "name": "Dani",
                   "phonetype": 48998215589,
                   "value": 10,
                   "referencepoint": "perto da entrada da praia",
                   "category": 1
               }
           ]
       })
   }

   main()
   .then(() => {
       console.log("Registro feito com sucesso!")
   })
   .catch(e => {
       console.error(e);
       process.exit(1);
   })
   .finally(async () => { //encerrar conexão/desconectar do banco caso
    //aconteça algum erro, vazamento de dados
      await prisma.$disconnect();
   })