class BankAccount:
    def __init__(self, int_rate, balance):
        self.balance = balance
        self.int_rate = int_rate
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
    def yield_interest(self):
        self.balance = self.balance + self.balance * self.int_rate
        return self
    def display_account_info(self):
        print('balance; $',self.balance)
        return self

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(0.02, 0)
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self
    def display_user_balance(self):
        self.account.yield_interest()
        print('balance: $' ,self.account.balance)
        return self

michael = User("michael", "michael@dojo.com")
michael.make_deposit(100).make_deposit(200).make_withdrawal(30).display_user_balance()