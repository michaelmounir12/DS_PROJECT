#include "files.h"
#include <iostream>
#include <fstream>
#include <vector>
#include <sstream>
#include "database.h"

using namespace std;

void files::readListings() {
    ifstream infile("listings.txt");

    if (infile.is_open()) {
        string line;

        while (getline(infile, line)) {
            vector<string> attributes;
            string cur = "";
            if (line == "") continue;
            line += '-';  // Adding a trailing '-' to parse the last attribute
            for (char i : line) {
                if (i == '-') {
                    attributes.push_back(cur);
                    cur = "";
                }
                else {
                    cur += i;
                }
            }

            if (attributes.size() < 7) {
                cerr << "Error: Incorrect format in listings.txt" << endl;
                continue;
            }

            string name = attributes[0];
            string loc = attributes[1];
            int price = stoi(attributes[2]);
            string phone = attributes[3];
            string type = attributes[6];
            int rooms = stoi(attributes[7]);

            // Assuming database is a valid class and addListing is a valid method
            database db;
            db.addListing(price, name, loc, phone, type, rooms);
        }

        infile.close();
    }
    else {
        cerr << "Error: Could not open the file for reading." << endl;
    }
}


void files::writeListings(string name, string loc, string price, string phone, string type, string rooms) {
    ofstream outfile("listings.txt", ios::app); // Open the file in append mode

    if (outfile.is_open()) {
        // Concatenate attributes with '-'
        string line = name + '-' + loc + '-' + price + '-' + phone+"-false"+"-true-" + '-' + type + '-' + rooms;

        // Write the line to the file
        outfile << line << endl;

        // Close the file
        outfile.close();

        cout << "Data written to file successfully." << endl;
    }
    else {
        cerr << "Error: Could not open the file for writing." << endl;
    }
}
