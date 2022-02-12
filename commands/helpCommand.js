const Discord = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments) => {
    const channel = message.channel;

  const embed = new Discord.MessageEmbed();
  embed
    .setTitle(`Miaou`)
    .setDescription('Les commandes du serveur sont : \n !test \n !showLevel \n !gratter @someone \n !manger \n !help')
    .setImage('https://pbs.twimg.com/profile_images/1560881833/catscience_400x400.jpg')

  await message.delete();
  await channel.send({
    embeds : [embed]
});
};

module.exports.name = 'help';