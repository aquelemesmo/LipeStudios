import discord
from discord.ext import commands

bot = commands.Bot(commands.prefix='lpy!')

class MeuCliente(discord.Client):
    async def on_ready(self):
        print('Logged on as {0}!'.format(self.user))
    async def on_message(ctx):
        await ctx.send('PONG!')
    
bot = MeuCliente()
bot.run('ODg4MTY5MjY3NTI5NDA0NDc1.YUOyFg.vmljtU8RnWh6pzMoE7Oo7xh1my4')