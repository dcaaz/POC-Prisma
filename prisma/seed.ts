// import prisma from "../src/database/db";

// async function main() {
//     await prisma.order.createMany({
//         data: [
//             {
//                 "item": "milho",
//                 "name": "Davi",
//                 "phonetype": 48996395282,
//                 "value": 5,
//                 "referencepoint": "perto da barraca de caipirinha"
//             },
//             {
//                 "item": "água de coco",
//                 "name": "Dani",
//                 "phonetype": 48998215536,
//                 "value": 10,
//                 "referencepoint": "perto da entrada da praia"
//             }
//         ]
//     })
// }

// main()
// .then(() => {
//     console.log("Registro feito com sucesso!")
// })
// .catch(e => {
//     console.error(e);
//     process.exit(1);
// })
// .finally(async () => {
//    await prisma.$disconnect();
// })