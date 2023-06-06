import os
import json
import openpyxl

menu_dir = "public/menu2"  # replace with the actual directory path
menu_data = []

# iterate over every image file in the directory
for file_name in os.listdir(menu_dir):
    if file_name.endswith(".jpg") or file_name.endswith(".JPG") or file_name.endswith(".jpeg") or file_name.endswith(".png"):
        # assume the file name is the dish name without the extension
        dish_name = os.path.splitext(file_name)[0]
        # construct the URL of the image file
        image_url = f"/menu/{file_name}"
        # generate a random price between $5 and $25
        price = 0
        # create a dictionary for the menu item
        item = {"dish_name": dish_name, "image_url": image_url, "price": price}
        # append the item to the list of menu data
        menu_data.append(item)

# write the menu data to a JSON file
with open("menu.json", "w") as f:
    json.dump(menu_data, f)

# create an Excel workbook and sheet
workbook = openpyxl.Workbook()
sheet = workbook.active

# write headers to the sheet
sheet["A1"] = "Dish Name"
sheet["B1"] = "Image URL"
sheet["C1"] = "Price"

# iterate over the menu data and write each item to a row in the sheet
for i, item in enumerate(menu_data):
    row = i + 2
    sheet[f"A{row}"] = item["dish_name"]
    sheet[f"B{row}"] = item["image_url"]
    sheet[f"C{row}"] = item["price"]

# save the workbook to an Excel file
workbook.save("menu.xlsx")
