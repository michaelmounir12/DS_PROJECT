#include<iostream>
#include "models.h"
using namespace std;

class Auth {
public:
	string registerUser(string username, string email, string password, string phone);
	user* loginUser(string email, string password);

};
