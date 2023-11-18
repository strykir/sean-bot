const { SlashCommandBuilder, EmbedBuilder, Client } = require('discord.js');
const ultimateBravery = require('../../helper-functions/ultimate-bravery/ultimate-bravery.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ultimatebravery')
		.setDescription('Gives you a random champion, summoner spells, items and runes.'),
	async execute(interaction) {
		// inside a command, event listener, etc.
		let champName = ultimateBravery.generateRandomChampion();
		const exampleEmbed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle(`${interaction.user.username}\'s Ultimate Bravery`)
		.setAuthor({ name: 'Sean Bot'})
		.setDescription('Heheheha fun gamemode')
		.setThumbnail(ultimateBravery.generateChampLink(champName))
		.addFields(
			{ name: 'Champion', value: champName, inline: true},
			{ name: 'Summoner Spells', value: ultimateBravery.generateRandomSumms() },
			{ name: 'Runes', value: ultimateBravery.generateRandomRunes() }, 
			{ name: 'Items', value: ultimateBravery.generateRandomItems()}
		)
		.setImage('https://cdn.discordapp.com/attachments/1120162955837853696/1175241457611845723/image.png?ex=656a83e6&is=65580ee6&hm=ba414730fa72ae873f5c02b49a88ceb44788fba2dbc6b1f9cffa04ea2e865ee7&')
		.setTimestamp()
		await interaction.reply({ embeds: [exampleEmbed] });
	}
};