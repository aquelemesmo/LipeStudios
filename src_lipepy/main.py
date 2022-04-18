import discord
from discord.ext import commands

bot = commands.Bot(commands.prefix='lpy!')

class MeuCliente(discord.Client):
    async def on_ready(self):
        print('Logged on as {0}!'.format(self.user))
    async def on_message(ctx):
        await ctx.send('PONG!')
    
bot = MeuCliente()
bot.run('')
