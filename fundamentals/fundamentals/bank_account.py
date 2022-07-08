class BankAccount:
    def __init__(self, int_rate, balance):
        self.balance = 0
        self.int_rate = 0.01
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if amount > self.balance:
            amount+=5
            print('Insufficient funds: Charging a $5 fee')
        self.balance -= amount
        return self
    def display_account_info(self):
        print('balance; $',self.balance)
        return self
    def yield_interest(self):
        self.balance = self.balance + self.balance * self.int_rate
        return self

michael = BankAccount(0.01, 0)
michael.deposit(20).deposit(70).deposit(4).withdraw(60).yield_interest().display_account_info()
luca = BankAccount(0.03, 0)
luca.deposit(200).deposit(50).deposit(40).deposit(5).deposit(12).deposit(64).yield_interest().display_account_info()
