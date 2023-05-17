import { SlashCommandBuilder } from 'discord.js'

export const command =new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')

export const action=async (interaction)=> {
    await interaction.reply('Pong!')
}