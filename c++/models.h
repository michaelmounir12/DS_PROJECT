#pragma once
#include <string>
#include <map>
#include<vector>
#include<math.h>
using namespace std;
class property {
public:
    std::string name;
    int id;
    string location;
    int price;
    string phone;
    bool highlighted;
    bool approved;
    string type;
    int rooms;
    property(const std::string& n, string loc, int p,string ph,int id,string type,int rooms)
        : name(n), location(loc), price(p),phone(ph),id(id), type(type) ,rooms(rooms){
        approved = false;
        highlighted = false;
    }
};

class user
{
public:
    string username;
    string email;
    string password;
    string phoneNumber;
    bool isAdmin = false;
    user(string username, string email, string password, string pnoneNumber) {
        this->email = email;
        this->password = password;
        this->username = username;
        this->phoneNumber = phoneNumber;
    }
   
};