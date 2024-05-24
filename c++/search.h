// search.h

#ifndef SEARCH_H
#define SEARCH_H

#include <string>
#include <vector>
#include "models.h"
#include "globals.h"
using namespace std;

class Search {
public:
    std::vector<std::string> searchByName(std::string pre);
    std::vector<property*> filterByLocation(std::string state);
    std::vector<property*> filterByPrice(float min, float max);

    vector<property*> searchGlobal(int min, int max, string pre, string loc);
};

#endif /* SEARCH_H */
