#include <string>
#include <map>
#include<vector>
#include "models.h"
#include "globals.h"
#include "database.h"
#include<random>
using namespace std;


    

void database::addListing(int price, string name,string location,string phone,string type,int rooms) {
    random_device rd;

    mt19937 gen(rd());

    uniform_int_distribution<int> distribution(1, 1000);

    int id = distribution(gen);
        property* p = new property(name, location, price,phone,id,type,rooms);
        for (property * i : listings) {
            if (i->id == id) {
                return;
            }
        }
        listings.push_back(p);
        trie->insert(name);


    }

