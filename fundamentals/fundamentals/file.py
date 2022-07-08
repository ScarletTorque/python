num1 = 42 #variable declaration
num2 = 2.3 #variable declaration
boolean = True #primitive
string = 'Hello World'#primitive
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']#list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}#list
fruit = ('blueberry', 'strawberry', 'banana')#list
print(type(fruit))#log statement
print(pizza_toppings[1])#log statement
pizza_toppings.append('Mushrooms')#add value
print(person['name'])#log statement
person['name'] = 'George'#change value
person['eye_color'] = 'blue'#change value
print(fruit[2])#log statement

if num1 > 45:#if
    print("It's greater")#log statement
else:#else
    print("It's lower")#log statement

if len(string) < 5:#if
    print("It's a short word!")#log statement
elif len(string) > 15:#else if
    print("It's a long word!")#log statement
else:#else
    print("Just right!")#log statement

for x in range(5):#for loop
    print(x)#log statement
for x in range(2,5):#for loop
    print(x)#log statement
for x in range(2,10,3):#for loop
    print(x)#log statement
x = 0#value declaration
while(x < 5):#while loop
    print(x)#log statement
    x += 1#value declaration

pizza_toppings.pop()#delete value
pizza_toppings.pop(1)#delete value

print(person)#log statement
person.pop('eye_color')#delete value
print(person)#log statement

for topping in pizza_toppings:#for loop
    if topping == 'Pepperoni':#if
        continue#for loop
    print('After 1st if statement')#log statement
    if topping == 'Olives':#if
        break#for loop break

def print_hello_ten_times():#log statement
    for num in range(10):#for loop
        print('Hello')#log statement

print_hello_ten_times()#log statement

def print_hello_x_times(x):#log statement
    for num in range(x):#for loop
        print('Hello')#log statement

print_hello_x_times(4)#log statement

def print_hello_x_or_ten_times(x = 10):#log statement
    for num in range(x):#for loop
        print('Hello')#log statement

print_hello_x_or_ten_times()#log statement
print_hello_x_or_ten_times(4)#log statement


"""
Bonus section #multiline comment
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)