import {CommandInteraction, Client} from 'discord.js';
import {Command} from '../config/Command';

export const Hello: Command = {
  name: 'hello',
  description: 'Returns a greeting',
  type: 1,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = 'Hello there!';

    setInterval(() => {
      repeat();
    }, 3000);

    const repeat = async () => {
      await interaction.followUp({
        content,
      });
    };
  },
};
