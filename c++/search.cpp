#include <iostream>
#include<vector>
#include "search.h"
#include "models.h"
#include "globals.h"
#include<set>

using namespace std;


    vector<string> Search::searchByName(string pre) {
        return trie->searchPre(pre);

    }
    vector<property*> Search::filterByLocation(string state) {
        vector<property*> ans;
        for (property *i : listings) {
            if (i->location == state) ans.push_back(i);
        }
        return ans;
    }
    vector<property*> Search::searchGlobal(int min, int max, string pre, string loc) {
        vector<property*> ans;
        set<string> s;
        if (pre != "") {
            for (string name : searchByName(pre)) {
                s.insert(name);
            }
        }
        for (property* prop : listings) {
            if ((s.count(prop->name) || pre == "") && (prop->price > min && prop->price < max) && (prop->location == loc || loc == "")) ans.push_back(prop);
        }
        return ans;
    }
    vector<property*> Search::filterByPrice(float min, float max) {
        vector<property*> ans;
        for (property *i : listings) {
            if (i->price >= min && i->price <= max) ans.push_back(i);
        }
        return ans;
    }
