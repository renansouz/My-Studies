from PIL import Image, ImageFilter

before = Image.open("example.bmp")   # insert any image
after = before.filter(ImageFilter.BoxBlur(10))
after.save("out.bmp") # name of the new