words = set()

def check(word):
  return word.lower() in words

def load(dictionary):
  with open(dictionary) as file:
    words.update(file.read.splitline())
  return True

def size():
  return len(words)

def unload():
  return True