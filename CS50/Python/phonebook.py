  # dictionary
people = {
  "Carter": "+1-617-49511",
  "David": "+1-617-4922",
  "John": "+1-617-4933"
}

name = input("Name: ")

if name in people:
  number = people[name]
  print(f"Found {number}")
else:
  print("Not found")




# names = ["Carter", "David", "John"]

# name = input("Name: ")

# if name in names:
#     print("Found")

# else:
#     print("Not Found")