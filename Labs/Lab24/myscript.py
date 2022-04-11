import os, time 
from operator import itemgetter

#Splash Screen
print('''
▒█▀▀▀       ▒█▀▀▀ ▒█▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀
▒█▀▀   ▀▀▀  ▒▀▀▀█ ▒█▄▄█ ░█░░█ ▒█▄▄▀ ▒▒█░░ ░▀▀▀█
▒█▄▄█       ▒█▄▄█ ▒█░░░ ▒█▄▄█ ▒█░▒█ ▒▒█░░ ▒█▄▄█
Some Teams win, others lose forever…''')
time.sleep(2)
os.system('clear')
teams = []
players = []
rounds = []

## Try to open the text files
try:
  f = open("teams.txt", "r")
  teams = eval(f.readline())
  f.close()
except:
  pass
try:
  f = open("players.txt", "r")
  players = eval(f.readline())
  f.close()
except:
  pass
try:
  f = open("rounds.txt", "r")
  rounds = eval(f.readline())
  f.close()
except:
  pass

def addTeam():
  print("\nNote you must add in three players to make a team (type in -1 to cancel process): \n")
  for player in players:
    print("Player: " + player)
  if(len(players) >=3):
    name = input("\nTeam Name: ")
    while(name != "-1"): 
      row = [name]
      for i in range( 1,4):
          name = ""
          validPlayer= True
          while(len(name) <=0 or len(name) > 20 or not validPlayer):
            name = input("Enter Valid Player "+ str(i) + " name between 1 and 20 characters: ")
            validPlayer = False
            for player in players:
              if name.lower() == player.lower():
                validPlayer = True
            for entry in row:
              if entry == name:
                validPlayer = False
                print("Player already in team.")
          row.append(name)
            
      teams.append(row)
    
      print("Added successfully")
      time.sleep(1)
      break
  else:
    print("Create at least three players first!")
    time.sleep(1)
  f = open("teams.txt", "w")
  f.write(str(teams))
  f.close() 
  
def addPlayer():
  name = input("\nEnter player name: -1 to cancel:   ")
  if(name!= "-1"): 
    while(len(name) <=0 or len(name) > 20):
      name = input("Enter name between 1 and 20 characters:  ")
    if(name != "-1"):
      players.append(name)
      f = open("players.txt", "w")
      f.write(str(players))
      f.close()
  
def addRound():
  if len(teams)>0:
    print()
    viewTeams()
    print()
    validTeam = False
    team1 = input("Enter in team name: ")
    roundNumber = int(input("Enter in a round number: "))
    for team in teams:
      if(team1.lower() == team[0].lower()):
        validTeam = True
      if(validTeam):
        index =0
        for player in team:
          if index != 0:
            print("\n"+player + "'s' stat entry...\n")
            validNum = False
            while(validNum == False):
              try:
                kills = int(input("Enter in num Kills: "))
                validNum = True
              except ValueError:
                validNum = False
            validNum = False
            while(validNum == False):
              try:
                deaths = int(input("Enter in num Deaths: "))
                validNum = True
              except ValueError:
                validNum = False
            if deaths ==0:
              kdr = kills
            else:
              kdr = round(float(kills/deaths), 2)
            row = [roundNumber, player, team[0], kills, deaths, kdr]
            rounds.append(row)
            f = open("rounds.txt", "w")
            f.write(str(rounds))
            f.close()
          index += 1
    if(validTeam == False):
      print("Team name entered not a valid team")
    
def checkNumValid(num):
  validNum = False
  choice = num
  while(validNum == False):
    try:
      choice = int(choice)
      validNum = True
    except ValueError:
      validNum = False
      choice = input("Enter valid int: ")
  return choice
  
def checkTextTeamValid(teamName):
  if len(teams) > 0:
    # print(teamName)
    validTeam = False
    while(validTeam == False):
      for team in teams:
        print(team)
        print(teamName)
        if(teamName.lower() == team[0].lower()):
          validTeam = True
      if(validTeam):
        return teamName
        
def checkTextPlayerValid(playerName):
  if len(players) > 0:
    choice = playerName
    validPlayer = False
    while(validPlayer == False):
      for player in players:
        print(player)
        print(choice)
        if choice.lower() == player.lower():
          validPlayer = True
          return choice
        print(validPlayer)
      validPlayer = False
      choice = input("\nEnter in Player: ")
          
def viewTeams():
  print("\n========  Teams  ========\n")
  print("[ TEAM  | PLAYER 1  | Player 2  | Player 3  ]")
  if(len(teams) >0):
    for item in teams:
      print(item, end="\t")
      print()
  else:
    print("        ADD SOME TEAMS        ")
    print()
  input("\nPress any enter to continue...\n")

def viewRound(roundNum):
  if len(rounds )> 0:
    print("==== ROUND NUMBER " + str(roundNum) + " RESULTS ====")
    temp =[]
    for round in rounds:
      if roundNum == int(round[0]):
        temp.append(round)
    if len(temp) > 0:
      sorted(temp, key=itemgetter(1))
      print("===========================================================\n")
      print("|ROUND  |  NAME  | TEAM |  KILLS  |  DEATHS  |  KD Ratio  |")
      for sortedRound in temp:
        print("|", end=" ")
        print(sortedRound, end="\t  |")
        print()
  input("\n\nPRESS ANY KEY TO CONTINUE...")

def viewTeamRounds(team):
  print(team)
  print("==== " + team.upper() + " RESULTS ====")
  temp =[]
  for round in rounds:
    if team.lower() == round[2].lower():
      temp.append(round)
  if len(temp) > 0:
    sorted(temp, key=itemgetter(0))
    print("===========================================================\n")
    print("|ROUND  |  NAME  | TEAM |  KILLS  |  DEATHS  |  KD Ratio  |")
    for sortedRound in temp:
      print("|", end=" ")
      print(sortedRound, end="\t  |")
      print()
  input("\n\nPRESS ANY KEY TO CONTINUE...")

def viewPlayerRounds(player):
  print("==== " + player.upper() + " RESULTS ====")
  temp =[]
  for round in rounds:
    if player.lower() == round[1].lower():
      temp.append(round)
  if len(temp) > 0:
    sorted(temp, key=itemgetter(0))
    print("===========================================================\n")
    print("|ROUND  |  NAME  | TEAM |  KILLS  |  DEATHS  |  KD Ratio  |")
    for sortedRound in temp:
      print("|", end=" ")
      print(sortedRound, end="\t  |")
      print()
  input("\n\nPRESS ANY KEY TO CONTINUE...")
  
def viewAllRounds():
  if len(rounds) > 0:
    print("==== ALL ROUND RESULTS ====")
    temp =[]
    for round in rounds:
       temp.append(round)
    sorted(temp, key=itemgetter(0))
    print("===========================================================\n")
    print("|ROUND  |  NAME  | TEAM |  KILLS  |  DEATHS  |  KD Ratio  |")
    for sortedRound in temp:
      print("|", end=" ")
      print(sortedRound, end="\t  |")
      print()
  else:
    print("NO PLAYERS OR NO ROUND DATA")
  input("\n\nPRESS ANY KEY TO CONTINUE...")

def showAllPlayers():
  print()
  for player in players:
    print("Player: " + player)
  input("\nPRESS ANY KEY TO CONTINUE...")
  
######################### HERE ######################################
def removeCheater():
  if len(rounds)> 0:
    userInput = input("1 for team, 2 for player, -1 to exit" +
                   "\n** WARNING RESULTS FROM INDIVIDUAL ROUNDS WILL BE ELIMINATED **\n\nChoice:  ")
    if userInput == "1":
      name = input("Enter team name to remove results: ")
      name = checkTextTeamValid(name)
      temp = []
      for round in rounds:
        if (round[2].lower() != name.lower()):
          temp.append(round)
      rounds.clear()
      for entry in temp:
        rounds.append(entry)
    elif userInput == "2":
      temp =[]
      name = input("Enter Player Name: ")
      checkTextPlayerValid(name)
      for round in rounds:
        if round[1].lower() != name.lower():
          temp.append(round)
      print("Successfully removed " + name)
      rounds.clear()
      for entry in temp:
        rounds.append(entry)
  else:
    print("\nNO ROUNDS...")
  f = open("rounds.txt", "w")
  f.write(str(rounds))
  f.close()
  input("\nPress enter to continue...\n")

def showWinningTeam():
  if len(rounds) > 0:
    highestKD = 0
    winningTeam = ""
    for team in teams:
      totalKD =0
      currentKDAvg = 0
      for rnd in rounds:
        if rnd[2].lower() == team[0].lower():
          totalKD += rnd[5]
      currentKDAvg = round(float(totalKD/(len(team)-1)),2)
      if currentKDAvg > highestKD:
        highestKD = currentKDAvg
      winningTeam = team[0]
  return winningTeam
  
def showWinningPlayer(roundNum):
  
  if len(rounds) > 0:
    highestKD = 0
    winningPlayer = ""
    for player in players:
      totalKD =0
      currentKDAvg = 0
      for round in rounds:
        if round[1].lower() == round[1].lower() and round[0] == roundNum:
          totalKD += round[6]
      currentKDAvg = totalKD
      if currentKDAvg > highestKD:
        highestKD = currentKDAvg
      winningPlayer = player
  return winningPlayer
  
def showWinningPlayerAllRounds():
  if len(rounds) > 0:
    highestKD = 0
    winningPlayer = ""
    for player in players:
      totalKD =0
      currentKDAvg = 0
      index = 1
      for rnd in rounds:
        if rnd[1].lower() == rnd[1].lower():
          totalKD += rnd[5]
          index +=1
      currentKDAvg = round(float(totalKD/index),2)
      if currentKDAvg > highestKD:
        highestKD = currentKDAvg
      winningPlayer = player
      
  return winningPlayer

while(True):

  print("ESPORTS")
  print("Press a number to select an option")
  print(" 1: Add Player")
  print(" 2: Add Team")
  print(" 3: Add Round Information")
  print(" 4: View Teams")
  print(" 5: Remove Cheater")
  print(" 6: Show Winning Team")
  print(" 7: Show Winning Player For Specific Round")
  print(" 8: Show Winning Player For All Rounds")
  print(" 9: Show all Players")
  print("10: View Rounds")
  print("11: Exit")
  #You probably want to start here

  menuChoice = input("> ")

  if(menuChoice=="1"):
    addPlayer()
  elif(menuChoice=="2"):
    addTeam()
  elif(menuChoice=="3"):
    addRound()
  elif(menuChoice=="4"):
    viewTeams()
  elif(menuChoice=="5"):
    removeCheater()
  elif(menuChoice=="6"):
    print("Winning team is: " + showWinningTeam())
    input("\nPRESS ENTER TO CONTINUE...")
  elif(menuChoice=="7"):
    choice = input("Enter in a round number: ")
    checkNumValid(choice)
    print("Winner for round " + str(choice) + " is: " + showWinningPlayer(choice))
    input("\nPRESS ENTER TO CONTINUE...")
  elif(menuChoice=="8"):
    print("Winner of All Rounds Overall: " +showWinningPlayerAllRounds())
    input("\nPRESS ENTER TO CONTINUE...")
  elif(menuChoice=="9"):
    showAllPlayers()
  elif(menuChoice=="10"):
    choice2 = int(input("View Rounds: \n" +
                   "  1: All\n" +
                   "  2: By Specific Team\n" +
                   "  3: By Round\n" +
                   "  4: By Player\n" +
                   "  Any other number: Main Menu\n"))
    checkNumValid(int(choice))
    if(choice2 == 1):
      viewAllRounds()
    elif(choice2 == 2):
      viewTeams()
      choice2 = input("Enter team Name: ")
      viewTeamRounds(checkTextTeamValid(choice2))
    elif(choice2 == 3):
      choice2 = int(input("Enter round number: "))
      viewRound(checkNumValid(choice))
    elif(choice2 == 4):
      showAllPlayers()
      choice2 = input("Enter Player Name:  ")
      viewPlayerRounds(checkTextPlayerValid(choice2))
    else:
      os.system('clear')
  elif(menuChoice=="11"):
    break
  else:
    print("ERROR: Not a valid selection")

  time.sleep(1)
  os.system('clear')


  f = open("players.txt", "w")
  f.write(str(players))
  f.close()
  f = open("teams.txt", "w")
  f.write(str(teams))
  f.close()
  f = open("rounds.txt", "w")
  f.write(str(rounds))
  f.close()

exit()