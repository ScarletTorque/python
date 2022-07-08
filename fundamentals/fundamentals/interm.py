x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0]=15
students[0][1]="Bryant"
sports_directory['soccer'][0]="Andreas"
z[0][1]=30

def iterateDictionary(some_list):
    for i in range(0, len(some_list), 1):
        print("first_name - " + some_list[i]['first_name'] + ", last_name - " + some_list[i]['last_name'])

iterateDictionary(students)

def iterateDictionary2(key_name, some_list):
    for i in range(0, len(some_list), 1):
        print(some_list[i][key_name])

iterateDictionary2('first_name', students)

def printInfo(some_dict):
    for i in range(0, len(some_dict['basketball']), 1):
        print(some_dict['basketball'][i])

print(len(sports_directory['basketball']), "players")

printInfo(sports_directory)

def printInfo2(some_dict):
    for i in range(0, len(some_dict['soccer']), 1):
        print(some_dict['soccer'][i])

print(len(sports_directory['soccer']), "players")

printInfo2(sports_directory)