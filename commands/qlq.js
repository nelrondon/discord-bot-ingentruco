import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("qlq")
  .setDescription("Este es un saludo carleuo")
  .addUserOption((option) =>
    option
      .setName("user")
      .setDescription("Usuario al que quieres saludar.")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("message")
      .setDescription("Mensaje personalizado para el usuario.")
      .setRequired(false)
  )
  .addBooleanOption((option) =>
    option
      .setName("send_dm")
      .setDescription("Enviar mensaje privado al usuario.")
      .setRequired(false)
  );

export const execute = async (interaction) => {
  const userObj = interaction.options.getUser("user");
  const message = interaction.options.getString("message");
  const sendDm = interaction.options.getBoolean("send_dm") ?? false;

  const content = `¡Hola ${userObj}!, ${message || "qlq menorcito"}`;

  await interaction.reply({
    content,
    ephemeral: true,
  });

  if (sendDm) {
    try {
      await userObj.send(content);
    } catch (error) {
      await interaction.followUp({
        content: `No pude enviar un mensaje directo a ${userObj.username}.`,
        ephemeral: true,
      });
    }
  }
};
