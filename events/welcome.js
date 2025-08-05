export const handleNewMember = async (member) => {
  console.log(`Un nuevo miembro se ha unido al servidor: ${member.user.tag}`);

  const canal = member.guild.channels.cache.find(
    (channel) => channel.name === "bienvenidas"
  );

  if (!canal) {
    console.log("No se encontró un canal de bienvenida.");
    return;
  }

  canal.send(
    `¡Bienvenido al servidor más caballo, ${member}!, aqui hay puro rolo de hombres y lo que sea que te consideres tú.`
  );
};
