// database.h

#ifndef DATABASE_H
#define DATABASE_H

#include <string>
#include <map>
#include "globals.h"
#include "models.h"

class database {
public:
    void addListing(int price, std::string name, std::string location,string phone,string type,int rooms);


};

#endif 
