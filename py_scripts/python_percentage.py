old_price = float(input("Enter the old price: "))
new_price = float(input("Enter the new price: "))


def percentage_change(old, new):
    change = ((new - old) / old) * 100
    return change

result = abs(percentage_change(old_price, new_price))
print(f"The percentage change is: {result:.2f}%")
