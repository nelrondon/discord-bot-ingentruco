import { SlashCommandBuilder } from "discord.js";

const facts = [
  "José pagale los riales que le debes a Nel.",
  "Mejor bicho en la mano que carajito llorando.",
  "Paso 8: Arriesgar en cada momento (puedes ir preso).",
  "Hombre que siempre está disponible para su mujer, lo ponen de cabron.",
  "Chuchu corona de a 2 mujeres, ufff!",
  "A Gustavo no se le cae el de leche, cuando pase te aviso.",
  "Nunca le des tiempo al tiempo.",
  "Christian que se devuelve se esnuca.",
  "GustaGOD la real cabra.",
  "No digan grocerias, Liliana se molesta.",
  "#HErick (pd: Ni en MasXMenos te respetan).",
  "Dos mujeres juntas es un hombre mal puesto.",
  "Sea cuando sea que veas esto, áun José no le paga sus riales a Nel.",
  "Si una mujer te va a gritar, que sea para decirte que está servida la comida",
];

export const data = new SlashCommandBuilder()
  .setName("factura")
  .setDescription("¿Preparado para un facto? No lo creo.");

export const execute = async (interaction) => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  await interaction.reply({
    content: randomFact,
  });
};
