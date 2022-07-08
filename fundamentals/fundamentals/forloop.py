#basic
from tkinter import Variable


for i in range (1, 151, 1):
    print(i)
#multiples of five
for i in range (0, 1001, 1):
    if i%5==0:
        print(i)
#counting, the dojo way
for i in range (0, 101, 1):
    if(i%10==0):
        print("coding dojo")
    elif(i%5==0):
        print("coding")
    else:
        print(i)
#whoa. that suckers huge
v = 0
for i in range (0, 500001, 1):
    if(i%2!=0):
        v+=i
print(v)
#countdown by fours
for i in range (2018, 0, -1):
    if(i%4==0):
        print(i)
#flexible counter
lowNum=2
highNum=9
mult=3
for i in range (lowNum, highNum, 1):
    if i%mult==0:
        print(i)