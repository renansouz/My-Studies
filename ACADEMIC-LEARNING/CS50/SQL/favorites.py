from cs50 import SQL

db = SQL("sqlite:///favorites.db")

favorite = input("favorite: ")

rows = db.execute("SELECT COUNT (*) AS n FROM favorites WHERE problem = ?", favorite)
row = rows[0]

print(row["n"])


# PYTHON VERSION


# import csv

# from collections import Counter

#   # SIMULATION OF A FILE IN CSV WITH INFORMATION OF FAVORITE PROGRAM LANGUAGE


# with open("favorites.csv", "r") as file:
#   reader = csv.DictReader(file)
#   counts = Counter()

#   for row in reader:
#     favorite = row["problem"]
#     counts[favorite] += 1

# favorite = input("Favorite: ")
# print(f"{favorite}: {counts[favorite]}")



# SHORT WAY

#   counts = {}

#   for row in reader:
#     favorite = row["language"]
#     if favorite in counts:
#       counts[favorite] += 1
#     else:
#       counts[favorite] = 1

# for favorite in sorted(counts, key=counts.get, reverse=True):
#   print(f"{favorite}: {counts[favorite]}")




# BIG WAY TO DO BELOW

#   scratch, c, python = 0, 0, 0

#   for row in reader:
#     favorite = row["language"]
#     if favorite == "Scratch":
#       scratch += 1
#     elif favorite == "C":
#       c += 1
#     elif favorite == "Python":
#       python += 1

# print(f"Scratch: {scratch}")
# print(f"C: {c}")
# print(f"Python: {python}")